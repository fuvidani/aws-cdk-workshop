import {Vpc, IVpc} from '@aws-cdk/aws-ec2';
import {Cluster, ICluster} from '@aws-cdk/aws-ecs';
import {Construct, Fn} from '@aws-cdk/core';
import {StringParameter} from "@aws-cdk/aws-ssm";
import {SHARED_CLUSTER_NAME_EXPORT, SHARED_IMAGE_TAG_SSM, SHARED_VPC_ID_SSM} from "../input/input";

export const loadExistingCluster: (scope: Construct) => ICluster = (scope: Construct) => {

    /* Exercise 1A:
    Import the Vpc (Virtual Private Cloud), which is needed to import the cluster.
    Use the Vpc.fromLookup method. To get the vpcId, either
        i) look it up in AWS Console (https://console.aws.amazon.com)
        ii) import the SSM parameter 'shared-vpc-id-ssm' (Hint: Use the StringParameter class to lookup the ssm
         parameter).
    */
    //console.log(`Hint: use these constants: ${SHARED_VPC_ID_SSM}, ${SHARED_CLUSTER_NAME_EXPORT}`)

    const existingVpc: IVpc = Vpc.fromLookup(scope, 'myVpc', {
        vpcId: StringParameter.valueFromLookup(scope, SHARED_VPC_ID_SSM),
    });
    return Cluster.fromClusterAttributes(scope, 'myCluster', {
        clusterName: Fn.importValue(SHARED_CLUSTER_NAME_EXPORT),
        vpc: existingVpc,
        securityGroups: []
    })
    // return Cluster.from...
    // Hint: We exported the cluster name as the output 'shared-cluster-name-export'. Use the 'Fn' object to import it.
    // Hint 2: Pass an empty array for security groups

    //throw Error("No cluster was loaded. Finish exercise 1 to fix this.");
};
