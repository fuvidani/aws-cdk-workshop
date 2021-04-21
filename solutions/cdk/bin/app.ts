#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { SimpleFargateServiceStack } from '../lib/simple-fargate-service-stack';
import { Tags } from '@aws-cdk/core';

if(!process.env.AUTHOR) {
    throw new Error('Author name in stack name is missing. Execute export AUTHOR={yourName}.')
}

const STACK_NAME = `${process.env.AUTHOR}-cdk-workshop-simple-fargate-service`;

const app = new cdk.App();

const stack = new SimpleFargateServiceStack(app, STACK_NAME, {
    env: {
        account: '834253078283',
        region: process.env.AWS_REGION,
    },
    stackName: STACK_NAME
});
Tags.of(stack).add('cdk-workshop', 'solution');
