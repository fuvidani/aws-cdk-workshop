"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("@aws-cdk/assert");
const simple_fargate_service_stack_1 = require("../lib/simple-fargate-service-stack");
const core_1 = require("@aws-cdk/core");
// Exercise 3B:
describe('Memory and CPU', () => {
    it('should correctly depend on the region for eu-west-1', () => {
        //given
        const app = new core_1.App();
        // when
        const stack = new simple_fargate_service_stack_1.SimpleFargateServiceStack(app, 'MyTestStack', {
            env: { account: "123", region: "eu-west-1" }
        });
        // then
        // Exercise 3B: Make the right expectation
        assert_1.expect(stack).to(assert_1.haveResourceLike("AWS::ECS::TaskDefinition", {}));
    });
    it('should correctly depend on the region for eu-central-1', () => {
        //given
        const app = new core_1.App();
        // when
        const stack = new simple_fargate_service_stack_1.SimpleFargateServiceStack(app, 'MyTestStack', {
            env: { account: "123", region: "eu-central-1" }
        });
        // then
        // Exercise 3B: Make the right expectation
        assert_1.expect(stack).to(assert_1.haveResourceLike("AWS::ECS::TaskDefinition", {}));
    });
});
// Exercise 3C
test('Test retention of logs to be at most one week', () => {
    //given
    const app = new core_1.App();
    // when
    const stack = new simple_fargate_service_stack_1.SimpleFargateServiceStack(app, 'MyTestStack', {
        env: { account: "123", region: "eu-west-1" }
    });
    // then
    assert_1.expect(stack).notTo(assert_1.haveResourceLike("AWS::Logs::LogGroup", (props) => {
        // Exercise 3C: Return the right boolean condition here
        return props === null || props === void 0 ? void 0 : props.RetentionInDays;
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLWZhcmdhdGUtc2VydmljZS50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2ltcGxlLWZhcmdhdGUtc2VydmljZS50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNENBQXdFO0FBQ3hFLHNGQUFnRjtBQUNoRix3Q0FBb0M7QUFFcEMsZUFBZTtBQUNmLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLEVBQUU7SUFDNUIsRUFBRSxDQUFDLHFEQUFxRCxFQUFFLEdBQUcsRUFBRTtRQUMzRCxPQUFPO1FBQ1AsTUFBTSxHQUFHLEdBQUcsSUFBSSxVQUFHLEVBQUUsQ0FBQztRQUV0QixPQUFPO1FBQ1AsTUFBTSxLQUFLLEdBQUcsSUFBSSx3REFBeUIsQ0FBQyxHQUFHLEVBQUUsYUFBYSxFQUFFO1lBQzVELEdBQUcsRUFBRSxFQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBQztTQUM3QyxDQUFDLENBQUM7UUFFSCxPQUFPO1FBQ1AsMENBQTBDO1FBQzFDLGVBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMseUJBQWdCLENBQUMsMEJBQTBCLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMxRSxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx3REFBd0QsRUFBRSxHQUFHLEVBQUU7UUFDOUQsT0FBTztRQUNQLE1BQU0sR0FBRyxHQUFHLElBQUksVUFBRyxFQUFFLENBQUM7UUFFdEIsT0FBTztRQUNQLE1BQU0sS0FBSyxHQUFHLElBQUksd0RBQXlCLENBQUMsR0FBRyxFQUFFLGFBQWEsRUFBRTtZQUM1RCxHQUFHLEVBQUUsRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUM7U0FDaEQsQ0FBQyxDQUFDO1FBRUgsT0FBTztRQUNQLDBDQUEwQztRQUMxQyxlQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLHlCQUFnQixDQUFDLDBCQUEwQixFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDMUUsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQztBQUVILGNBQWM7QUFDZCxJQUFJLENBQUMsK0NBQStDLEVBQUUsR0FBRyxFQUFFO0lBQ3ZELE9BQU87SUFDUCxNQUFNLEdBQUcsR0FBRyxJQUFJLFVBQUcsRUFBRSxDQUFDO0lBRXRCLE9BQU87SUFDUCxNQUFNLEtBQUssR0FBRyxJQUFJLHdEQUF5QixDQUFDLEdBQUcsRUFBRSxhQUFhLEVBQUU7UUFDNUQsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO0tBQy9DLENBQUMsQ0FBQztJQUVILE9BQU87SUFDUCxlQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLHlCQUFnQixDQUNuQyxxQkFBcUIsRUFDckIsQ0FBQyxLQUFVLEVBQUUsRUFBRTtRQUNYLHVEQUF1RDtRQUN2RCxPQUFPLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxlQUFlLENBQUE7SUFDakMsQ0FBQyxDQUNKLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXhwZWN0IGFzIGV4cGVjdENESywgaGF2ZVJlc291cmNlTGlrZSB9IGZyb20gJ0Bhd3MtY2RrL2Fzc2VydCc7XG5pbXBvcnQgeyBTaW1wbGVGYXJnYXRlU2VydmljZVN0YWNrIH0gZnJvbSAnLi4vbGliL3NpbXBsZS1mYXJnYXRlLXNlcnZpY2Utc3RhY2snO1xuaW1wb3J0IHsgQXBwIH0gZnJvbSAnQGF3cy1jZGsvY29yZSc7XG5cbi8vIEV4ZXJjaXNlIDNCOlxuZGVzY3JpYmUoJ01lbW9yeSBhbmQgQ1BVJywgKCkgPT4ge1xuICAgIGl0KCdzaG91bGQgY29ycmVjdGx5IGRlcGVuZCBvbiB0aGUgcmVnaW9uIGZvciBldS13ZXN0LTEnLCAoKSA9PiB7XG4gICAgICAgIC8vZ2l2ZW5cbiAgICAgICAgY29uc3QgYXBwID0gbmV3IEFwcCgpO1xuXG4gICAgICAgIC8vIHdoZW5cbiAgICAgICAgY29uc3Qgc3RhY2sgPSBuZXcgU2ltcGxlRmFyZ2F0ZVNlcnZpY2VTdGFjayhhcHAsICdNeVRlc3RTdGFjaycsIHtcbiAgICAgICAgICAgIGVudjoge2FjY291bnQ6IFwiMTIzXCIsIHJlZ2lvbjogXCJldS13ZXN0LTFcIn1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gdGhlblxuICAgICAgICAvLyBFeGVyY2lzZSAzQjogTWFrZSB0aGUgcmlnaHQgZXhwZWN0YXRpb25cbiAgICAgICAgZXhwZWN0Q0RLKHN0YWNrKS50byhoYXZlUmVzb3VyY2VMaWtlKFwiQVdTOjpFQ1M6OlRhc2tEZWZpbml0aW9uXCIsIHt9KSk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIGNvcnJlY3RseSBkZXBlbmQgb24gdGhlIHJlZ2lvbiBmb3IgZXUtY2VudHJhbC0xJywgKCkgPT4ge1xuICAgICAgICAvL2dpdmVuXG4gICAgICAgIGNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcblxuICAgICAgICAvLyB3aGVuXG4gICAgICAgIGNvbnN0IHN0YWNrID0gbmV3IFNpbXBsZUZhcmdhdGVTZXJ2aWNlU3RhY2soYXBwLCAnTXlUZXN0U3RhY2snLCB7XG4gICAgICAgICAgICBlbnY6IHthY2NvdW50OiBcIjEyM1wiLCByZWdpb246IFwiZXUtY2VudHJhbC0xXCJ9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHRoZW5cbiAgICAgICAgLy8gRXhlcmNpc2UgM0I6IE1ha2UgdGhlIHJpZ2h0IGV4cGVjdGF0aW9uXG4gICAgICAgIGV4cGVjdENESyhzdGFjaykudG8oaGF2ZVJlc291cmNlTGlrZShcIkFXUzo6RUNTOjpUYXNrRGVmaW5pdGlvblwiLCB7fSkpO1xuICAgIH0pXG59KTtcblxuLy8gRXhlcmNpc2UgM0NcbnRlc3QoJ1Rlc3QgcmV0ZW50aW9uIG9mIGxvZ3MgdG8gYmUgYXQgbW9zdCBvbmUgd2VlaycsICgpID0+IHtcbiAgICAvL2dpdmVuXG4gICAgY29uc3QgYXBwID0gbmV3IEFwcCgpO1xuXG4gICAgLy8gd2hlblxuICAgIGNvbnN0IHN0YWNrID0gbmV3IFNpbXBsZUZhcmdhdGVTZXJ2aWNlU3RhY2soYXBwLCAnTXlUZXN0U3RhY2snLCB7XG4gICAgICAgIGVudjogeyBhY2NvdW50OiBcIjEyM1wiLCByZWdpb246IFwiZXUtd2VzdC0xXCIgfVxuICAgIH0pO1xuXG4gICAgLy8gdGhlblxuICAgIGV4cGVjdENESyhzdGFjaykubm90VG8oaGF2ZVJlc291cmNlTGlrZShcbiAgICAgICAgXCJBV1M6OkxvZ3M6OkxvZ0dyb3VwXCIsXG4gICAgICAgIChwcm9wczogYW55KSA9PiB7XG4gICAgICAgICAgICAvLyBFeGVyY2lzZSAzQzogUmV0dXJuIHRoZSByaWdodCBib29sZWFuIGNvbmRpdGlvbiBoZXJlXG4gICAgICAgICAgICByZXR1cm4gcHJvcHM/LlJldGVudGlvbkluRGF5c1xuICAgICAgICB9XG4gICAgKSk7XG59KTtcbiJdfQ==