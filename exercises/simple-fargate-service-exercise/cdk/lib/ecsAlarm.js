"use strict";
/* Exercise 5A
Implement the AlarmConstruct here. Use the following interface as the Construct props.
Despite having a built-in abstraction for alarms in the CDK, we want to use the low-level CfnAlarm-construct for educational purposes.
Take the alarms.yaml file as a template. Properties not appearing in the IEcsAlarmProps can be hard-coded.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EcsAlarm = void 0;
const cdk = require("@aws-cdk/core");
const aws_cloudwatch_1 = require("@aws-cdk/aws-cloudwatch");
class EcsAlarm extends cdk.Construct {
    constructor(scope, id, props) {
        super(scope, id);
        this.alarm = new aws_cloudwatch_1.CfnAlarm(this, id, {
            actionsEnabled: false,
            comparisonOperator: aws_cloudwatch_1.ComparisonOperator.GREATER_THAN_OR_EQUAL_TO_THRESHOLD,
            evaluationPeriods: 1,
            metricName: props.metricName,
            namespace: 'AWS/ECS',
            threshold: props.threshold,
            dimensions: [{
                    name: 'ServiceName',
                    value: props.serviceName
                }, {
                    name: 'ClusterName',
                    value: props.clusterName
                }
            ],
            period: 60,
            statistic: 'Average'
        });
    }
}
exports.EcsAlarm = EcsAlarm;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWNzQWxhcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlY3NBbGFybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7R0FJRzs7O0FBRUgscUNBQXFDO0FBQ3JDLDREQUF1RTtBQVV2RSxNQUFhLFFBQVMsU0FBUSxHQUFHLENBQUMsU0FBUztJQUd2QyxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXFCO1FBQy9ELEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLHlCQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRTtZQUNoQyxjQUFjLEVBQUUsS0FBSztZQUNyQixrQkFBa0IsRUFBRSxtQ0FBa0IsQ0FBQyxrQ0FBa0M7WUFDekUsaUJBQWlCLEVBQUUsQ0FBQztZQUNwQixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLFVBQVUsRUFBRSxDQUFDO29CQUNULElBQUksRUFBRSxhQUFhO29CQUNuQixLQUFLLEVBQUUsS0FBSyxDQUFDLFdBQVc7aUJBQzNCLEVBQUU7b0JBQ0MsSUFBSSxFQUFFLGFBQWE7b0JBQ25CLEtBQUssRUFBRSxLQUFLLENBQUMsV0FBVztpQkFDM0I7YUFDQTtZQUNELE1BQU0sRUFBRSxFQUFFO1lBQ1YsU0FBUyxFQUFFLFNBQVM7U0FDdkIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKO0FBekJELDRCQXlCQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEV4ZXJjaXNlIDVBXG5JbXBsZW1lbnQgdGhlIEFsYXJtQ29uc3RydWN0IGhlcmUuIFVzZSB0aGUgZm9sbG93aW5nIGludGVyZmFjZSBhcyB0aGUgQ29uc3RydWN0IHByb3BzLlxuRGVzcGl0ZSBoYXZpbmcgYSBidWlsdC1pbiBhYnN0cmFjdGlvbiBmb3IgYWxhcm1zIGluIHRoZSBDREssIHdlIHdhbnQgdG8gdXNlIHRoZSBsb3ctbGV2ZWwgQ2ZuQWxhcm0tY29uc3RydWN0IGZvciBlZHVjYXRpb25hbCBwdXJwb3Nlcy5cblRha2UgdGhlIGFsYXJtcy55YW1sIGZpbGUgYXMgYSB0ZW1wbGF0ZS4gUHJvcGVydGllcyBub3QgYXBwZWFyaW5nIGluIHRoZSBJRWNzQWxhcm1Qcm9wcyBjYW4gYmUgaGFyZC1jb2RlZC5cbiAqL1xuXG5pbXBvcnQgKiBhcyBjZGsgZnJvbSBcIkBhd3MtY2RrL2NvcmVcIjtcbmltcG9ydCB7IENmbkFsYXJtLCBDb21wYXJpc29uT3BlcmF0b3IgfSBmcm9tIFwiQGF3cy1jZGsvYXdzLWNsb3Vkd2F0Y2hcIjtcblxuaW50ZXJmYWNlIElFY3NBbGFybVByb3BzIHtcbiAgICBzZXJ2aWNlTmFtZTogc3RyaW5nXG4gICAgY2x1c3Rlck5hbWU6IHN0cmluZ1xuICAgIG1ldHJpY05hbWU6IHN0cmluZ1xuICAgIHRocmVzaG9sZDogbnVtYmVyXG59XG5cblxuZXhwb3J0IGNsYXNzIEVjc0FsYXJtIGV4dGVuZHMgY2RrLkNvbnN0cnVjdCB7XG4gICAgcmVhZG9ubHkgYWxhcm06IENmbkFsYXJtO1xuXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IGNkay5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBJRWNzQWxhcm1Qcm9wcykge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIHRoaXMuYWxhcm0gPSBuZXcgQ2ZuQWxhcm0odGhpcywgaWQsIHtcbiAgICAgICAgICAgIGFjdGlvbnNFbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbXBhcmlzb25PcGVyYXRvcjogQ29tcGFyaXNvbk9wZXJhdG9yLkdSRUFURVJfVEhBTl9PUl9FUVVBTF9UT19USFJFU0hPTEQsXG4gICAgICAgICAgICBldmFsdWF0aW9uUGVyaW9kczogMSxcbiAgICAgICAgICAgIG1ldHJpY05hbWU6IHByb3BzLm1ldHJpY05hbWUsXG4gICAgICAgICAgICBuYW1lc3BhY2U6ICdBV1MvRUNTJyxcbiAgICAgICAgICAgIHRocmVzaG9sZDogcHJvcHMudGhyZXNob2xkLFxuICAgICAgICAgICAgZGltZW5zaW9uczogW3tcbiAgICAgICAgICAgICAgICBuYW1lOiAnU2VydmljZU5hbWUnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBwcm9wcy5zZXJ2aWNlTmFtZVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdDbHVzdGVyTmFtZScsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHByb3BzLmNsdXN0ZXJOYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgcGVyaW9kOiA2MCxcbiAgICAgICAgICAgIHN0YXRpc3RpYzogJ0F2ZXJhZ2UnXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==