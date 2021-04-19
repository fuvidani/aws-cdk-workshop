import { Vpc } from '@aws-cdk/aws-ec2';
import { Cluster, ICluster } from '@aws-cdk/aws-ecs';
import { Construct, Fn } from '@aws-cdk/core';
import {StringParameter} from "@aws-cdk/aws-ssm";
import {SHARED_CLUSTER_NAME_EXPORT, SHARED_VPC_ID_SSM} from "../input/input";

// Exercise 1
export const loadExistingCluster: (scope: Construct) => ICluster = (scope: Construct) => {

    const existingVpcFromLookup = Vpc.fromLookup(scope, 'existing-vpc-2', {
        vpcId: StringParameter.valueFromLookup(scope, SHARED_VPC_ID_SSM)
    });

    return Cluster.fromClusterAttributes(
        scope,
        "existing-cluster",
        {
            clusterName: Fn.importValue(SHARED_CLUSTER_NAME_EXPORT),
            securityGroups: [],
            vpc: existingVpcFromLookup,
        }
    );
};
