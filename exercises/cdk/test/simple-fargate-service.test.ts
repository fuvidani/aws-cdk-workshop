import {expect as expectCDK, haveResourceLike} from '@aws-cdk/assert';
import {SimpleFargateServiceStack} from '../lib/simple-fargate-service-stack';
import {App} from '@aws-cdk/core';

// Exercise 3B:
describe('Memory and CPU', () => {
    it('should correctly depend on the region for eu-west-1', () => {
        //given
        const app = new App();

        // when
        const stack = new SimpleFargateServiceStack(app, 'MyTestStack', {
            env: {account: "123", region: "eu-west-1"}
        });

        // then
        // Exercise 3B: Make the right expectation
        expectCDK(stack).to(haveResourceLike("AWS::ECS::TaskDefinition", {
            Cpu: '512',
        }));
    });

    it('should correctly depend on the region for eu-central-1', () => {
        //given
        const app = new App();

        // when
        const stack = new SimpleFargateServiceStack(app, 'MyTestStack', {
            env: {account: "123", region: "eu-central-1"}
        });

        // then
        // Exercise 3B: Make the right expectation
        expectCDK(stack).to(haveResourceLike("AWS::ECS::TaskDefinition", {
            Cpu: '256',
        }));
    })
});

// Exercise 3C
test('Test retention of logs to be at most one week', () => {
    //given
    const app = new App();

    // when
    const stack = new SimpleFargateServiceStack(app, 'MyTestStack', {
        env: {account: "123", region: "eu-west-1"}
    });

    // then
    expectCDK(stack).notTo(haveResourceLike(
        "AWS::Logs::LogGroup",
        (props: any) => {
            // Exercise 3C: Return the right boolean condition here
            return props?.RetentionInDays
        }
    ));
});
