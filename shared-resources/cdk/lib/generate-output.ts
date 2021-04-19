import * as cdk from '@aws-cdk/core';
import {CfnOutput} from '@aws-cdk/core';
import {Cluster} from '@aws-cdk/aws-ecs';
import {Vpc} from '@aws-cdk/aws-ec2';
import {SHARED_CLUSTER_NAME_EXPORT, SHARED_ECR_REPOSITORY_SSM, SHARED_IMAGE_TAG_SSM, SHARED_VPC_ID_SSM,} from "../outputs/output";
import {StringParameter} from "@aws-cdk/aws-ssm";
import {DockerImageAsset} from "@aws-cdk/aws-ecr-assets";

export function generateCloudformationOutput(scope: cdk.Construct, vpc: Vpc, cluster: Cluster) {
    new CfnOutput(scope, 'SharedClusterName', {
        exportName: SHARED_CLUSTER_NAME_EXPORT,
        value: cluster.clusterName,
    });
}

export function generateParameterStoreOutput(scope: cdk.Construct, vpc: Vpc, image: DockerImageAsset) {
    new StringParameter(scope, 'SharedVpcIdSsm', {
        stringValue: vpc.vpcId,
        simpleName: true,
        parameterName: SHARED_VPC_ID_SSM
    });

    // Hack: This should only write a substring and has to be adapted manually
    new StringParameter(scope, 'SharedECRRepositorySsm', {
        stringValue: image.imageUri,
        simpleName: true,
        parameterName: SHARED_ECR_REPOSITORY_SSM
    });

    // Hack: This should only write a substring and has to be adapted manually
    new StringParameter(scope, 'SharedImageTagSsm', {
        stringValue: image.imageUri,
        simpleName: true,
        parameterName: SHARED_IMAGE_TAG_SSM
    });
}
