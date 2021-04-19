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

export class SimpleFargateServiceStack extends cdk.Stack {
    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const table = new Table(this, 'Table', {
            partitionKey: { name: 'name', type: AttributeType.STRING },
            tableName: `visitors-${process.env.AUTHOR!!}`,
            removalPolicy: RemovalPolicy.DESTROY,
        });

        /* Exercise 1A:
        Uncomment the following code snippet. Have a look at the applicationLoadBalancedFargateService, then implement loadExistingCluster(this).*/

        /*const cluster = loadExistingCluster(this);

        const ecrRepository = StringParameter.valueFromLookup(this, SHARED_ECR_REPOSITORY_SSM)
        const imageTag = StringParameter.valueFromLookup(this, SHARED_IMAGE_TAG_SSM)

        const applicationLoadBalancedFargateService = new ApplicationLoadBalancedFargateService(this, "FargateService", {
            cluster: cluster,
            assignPublicIp: true,
            taskImageOptions: {
                image: ContainerImage.fromEcrRepository(Repository.fromRepositoryName(this, "repository", ecrRepository), imageTag),
                containerPort: 8080,
            },
        });

        // This line accelerates deployment and should not be removed.
        applicationLoadBalancedFargateService.targetGroup.setAttribute('deregistration_delay.timeout_seconds', '0');
        */

        /* Exercise 1B:
        Replace the example image above with the following dockerImage. Do not forget to run build the image first with ./gradlew dockerBuildImage.*/

        /*const dockerImage = new DockerImageAsset(this, 'ImageAsset', {
            directory: "../service/build/docker",
        });
        */
    }
}
