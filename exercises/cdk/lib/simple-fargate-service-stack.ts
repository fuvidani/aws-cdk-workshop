import * as cdk from '@aws-cdk/core';
import {ApplicationLoadBalancedFargateService} from '@aws-cdk/aws-ecs-patterns';
import {ContainerImage} from '@aws-cdk/aws-ecs';
import {loadExistingCluster} from './existing-cluster';
import {DockerImageAsset} from '@aws-cdk/aws-ecr-assets';
import {Aspects, Duration, Fn, RemovalPolicy} from "@aws-cdk/core";
import {CfnSecurityGroup, SecurityGroup, Vpc, Peer, Port} from '@aws-cdk/aws-ec2';
import {StringParameter} from "@aws-cdk/aws-ssm";
import {AttributeType, Table} from "@aws-cdk/aws-dynamodb";
import {SHARED_IMAGE_TAG_SSM, SHARED_ECR_REPOSITORY_SSM, SHARED_VPC_ID_SSM} from "../input/input";
import {Repository} from "@aws-cdk/aws-ecr";

export class SimpleFargateServiceStack extends cdk.Stack {
    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // Database table
        // Sub-node in the tree-structure
        const table = new Table(this, 'Table', {
            partitionKey: {name: 'name', type: AttributeType.STRING},
            tableName: `visitors-${process.env.AUTHOR!!}`,
            removalPolicy: RemovalPolicy.DESTROY,
        });

        /*Exercise 1A:
        Uncomment the following code snippet. Have a look at the applicationLoadBalancedFargateService, then implement loadExistingCluster(this).*/

        const cluster = loadExistingCluster(this);

        const ecrRepository = StringParameter.valueFromLookup(this, SHARED_ECR_REPOSITORY_SSM)
        const imageTag = StringParameter.valueFromLookup(this, SHARED_IMAGE_TAG_SSM)

        let memory, cpu;
        if (props?.env?.region === 'eu-west-1') {
            cpu = 512
            memory = 1024
        } else {
            cpu = 256
            memory = 512
        }
        // main cost here is the loadbalancer (18$/month)
        const applicationLoadBalancedFargateService = new ApplicationLoadBalancedFargateService(this, "FargateService", {
            cluster: cluster,
            assignPublicIp: true,
            taskImageOptions: {
                image: ContainerImage.fromEcrRepository(Repository.fromRepositoryName(this, "repository", ecrRepository), imageTag),
                containerPort: 8080,
                environment: {
                    TABLE_NAME: table.tableName
                }
            },
            desiredCount: 2,
            cpu,
            memoryLimitMiB: memory
        });

        // grants access to the database table
        table.grantFullAccess(applicationLoadBalancedFargateService.taskDefinition.taskRole);

        // This line accelerates deployment and should not be removed.
        applicationLoadBalancedFargateService.targetGroup.setAttribute('deregistration_delay.timeout_seconds', '0');
        applicationLoadBalancedFargateService.service.autoScaleTaskCount({
            minCapacity: 2, maxCapacity: 3
        }).scaleOnMemoryUtilization('memoryUtilization', {
            targetUtilizationPercent: 5
        });
        /* Exercise 1B:
        Replace the example image above with the following dockerImage. Do not forget to run build the image first with ./gradlew dockerBuildImage.*/

        /*const dockerImage = new DockerImageAsset(this, 'ImageAsset', {
            directory: "../service/build/docker",
        });
        */
    }
}
