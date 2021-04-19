#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { SharedResourcesStack } from '../lib/shared-resources-stack';
import { Tags } from '@aws-cdk/core';

const app = new cdk.App();

const stack = new SharedResourcesStack(app, 'cdk-workshop-shared-resources');
Tags.of(stack).add('cdk-workshop', 'shared-resources');
