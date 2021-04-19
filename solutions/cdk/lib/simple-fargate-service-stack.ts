import * as cdk from '@aws-cdk/core';
import {Aspects, Duration, RemovalPolicy} from '@aws-cdk/core';
import {ApplicationLoadBalancedFargateService} from '@aws-cdk/aws-ecs-patterns';
import {AwsLogDriver, ContainerImage} from '@aws-cdk/aws-ecs';
import {loadExistingCluster} from './existing-cluster';
import {RetentionDays} from '@aws-cdk/aws-logs';
import {AttributeType, Table} from "@aws-cdk/aws-dynamodb";
import {LogGroupRetentionChecker} from "./logsAspect";
import {Repository} from "@aws-cdk/aws-ecr";
import {StringParameter} from "@aws-cdk/aws-ssm";
import {SHARED_ECR_REPOSITORY_SSM, SHARED_IMAGE_TAG_SSM} from "../input/input";

export class SimpleFargateServiceStack extends cdk.Stack {

    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const table = new Table(this, 'Table', {
            partitionKey: { name: 'name', type: AttributeType.STRING },
            tableName: `visitors-${process.env.AUTHOR!!}`,
            removalPolicy: RemovalPolicy.DESTROY,
        });

        // Exercise 3A
        let cpu: number;
        let memory: number;
        if (props?.env?.region == "eu-west-1") {
            cpu = 512
            memory = 1024
        } else {
            cpu = 256
            memory = 512
        }

        // Exercise 3C
        let logDriver = new AwsLogDriver({
            logRetention: RetentionDays.ONE_WEEK,
            streamPrefix: "test-stream-prefix",
        });

        // Exercise 1
        const cluster = loadExistingCluster(this);

        // Exercise 1B
/*        const dockerImage = new DockerImageAsset(this, 'ImageAsset', {
            directory: "../service/build/docker",
        });*/

        const ecrRepository = StringParameter.valueFromLookup(this, SHARED_ECR_REPOSITORY_SSM)
        const imageTag = StringParameter.valueFromLookup(this, SHARED_IMAGE_TAG_SSM)

        const applicationLoadBalancedFargateService = new ApplicationLoadBalancedFargateService(this, "FargateService", {
            cluster: cluster,
            assignPublicIp: true,
            taskImageOptions: {
                image: ContainerImage.fromEcrRepository(Repository.fromRepositoryName(this, "repository", ecrRepository), imageTag),
                // image: ContainerImage.fromDockerImageAsset(dockerImage), // Exercise 1B
                containerPort: 8080,
                environment: {
                    TABLE_NAME: table.tableName,
                }
                // logDriver: logDriver // Exercise 3C
            },
            desiredCount: 2, // Exercise 2A
            cpu,
            memoryLimitMiB: memory,
        });

        applicationLoadBalancedFargateService.taskDefinition.defaultContainer?.environmentFiles?.push()

        applicationLoadBalancedFargateService.targetGroup.setAttribute('deregistration_delay.timeout_seconds', '0');

        // Exercise 2B
        const scaling = applicationLoadBalancedFargateService.service.autoScaleTaskCount({maxCapacity: 3});
        scaling.scaleOnMemoryUtilization('memory', {
            targetUtilizationPercent: 5,
            scaleInCooldown: Duration.seconds(30),
            scaleOutCooldown: Duration.seconds(30),
        });

        // Exercise 4A
        // table.grantReadWriteData(applicationLoadBalancedFargateService.taskDefinition.taskRole);

        // Exercise 4B
        table.grant(applicationLoadBalancedFargateService.taskDefinition.taskRole, 'dynamodb:PutItem');
        table.grant(applicationLoadBalancedFargateService.taskDefinition.taskRole, 'dynamodb:Scan');

        // Exercise 3D
        Aspects.of(this).add(new LogGroupRetentionChecker())
    }
}

