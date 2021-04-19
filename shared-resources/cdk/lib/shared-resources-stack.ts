import * as cdk from '@aws-cdk/core';
import { Cluster } from '@aws-cdk/aws-ecs';
import * as ecr from '@aws-cdk/aws-ecr';
import { SubnetType, Vpc } from '@aws-cdk/aws-ec2';
import { generateCloudformationOutput, generateParameterStoreOutput } from "./generate-output";
import {DockerImageAsset} from "@aws-cdk/aws-ecr-assets";

export class SharedResourcesStack extends cdk.Stack {

    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const vpc = new Vpc(this, 'cdk-workshop-shared-vpc', {
            maxAzs: 2,
            subnetConfiguration: [
                {
                    subnetType: SubnetType.PUBLIC,
                    name: 'PublicSubnet123',
                },
            ]
        });

        let cluster = new Cluster(
            this,
            'SharedCluster',
            {
                vpc: vpc,
                clusterName: 'cdk-workshop-shared-cluster',
            }
        );

        const dockerImage = new DockerImageAsset(this, 'ImageAsset', {
            directory: "../service/build/docker",
        });

        generateCloudformationOutput(this, vpc, cluster);
        generateParameterStoreOutput(this, vpc, dockerImage);
    }
}
