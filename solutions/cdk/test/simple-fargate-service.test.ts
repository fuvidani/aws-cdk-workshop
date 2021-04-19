import { expect as expectCDK, haveResourceLike } from '@aws-cdk/assert';
import { App } from '@aws-cdk/core';
import { SimpleFargateServiceStack } from '../lib/simple-fargate-service-stack';
import { RetentionDays } from '@aws-cdk/aws-logs';

//Exercise 3B
describe('Memory and CPU', () => {
    it('should correctly depend on the region for eu-west-1', () => {
        //given
        const app = new App();

        //when
        const stack = new SimpleFargateServiceStack(app, 'MyTestStack', {
            env: { account: "123", region: "eu-west-1" }
        });

        //then
        expectCDK(stack).to(haveResourceLike(
            "AWS::ECS::TaskDefinition",
            {
                Memory: '1024',
                Cpu: '512',
            }
        ));
    })

    it('should correctly depend on the region for eu-central-1', () => {
        //given
        const app = new App();

        //when
        const stack = new SimpleFargateServiceStack(app, 'MyTestStack', {
            env: { account: "123", region: "eu-central-1" }
        });

        //then
        expectCDK(stack).to(haveResourceLike(
            "AWS::ECS::TaskDefinition",
            {
                Memory: '512',
                Cpu: '256',
            }
        ));
    })
});

// Exercise 3C
test('Test retention of logs to be at most one week', () => {
    //given
    const app = new App();

    // when
    const stack = new SimpleFargateServiceStack(app, 'MyTestStack', {
        env: { account: "123", region: "eu-west-1" }
    });

    // then
    expectCDK(stack).notTo(haveResourceLike(
        "AWS::Logs::LogGroup",
        (props: any) => {
            return props?.RetentionInDays == null || props.RetentionInDays > RetentionDays.ONE_WEEK;
        }
    ));
});
