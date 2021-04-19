"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleFargateServiceStack = void 0;
const cdk = require("@aws-cdk/core");
const aws_dynamodb_1 = require("@aws-cdk/aws-dynamodb");
class SimpleFargateServiceStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const table = new aws_dynamodb_1.Table(this, 'Table', {
            partitionKey: { name: 'name', type: aws_dynamodb_1.AttributeType.STRING },
            tableName: `visitors-${process.env.AUTHOR}`,
        });
        /* Exercise 1A:
        Uncomment the following code snippet. Have a look at the applicationLoadBalancedFargateService, then implement loadExistingCluster(this).*/
        /*const cluster = loadExistingCluster(this);

        const imageUri = StringParameter.valueFromLookup(this, IMAGE_URI_EXPORT)

        const applicationLoadBalancedFargateService = new ApplicationLoadBalancedFargateService(this, "FargateService", {
            cluster: cluster,
            assignPublicIp: true,
            taskImageOptions: {
                image: ContainerImage.fromEcrRepository(Repository.fromRepositoryName(this, "repository", ecrRepositoryFromImageUri(imageUri)), imageTagFromImageUri(imageUri)),
                containerPort: 8080,
            },
        });

        // This line accelerates deployment and should not be removed.
        applicationLoadBalancedFargateService.targetGroup.setAttribute('deregistration_delay.timeout_seconds', '0');
        */
        /* Exercise 1B:
        Replace the example image above with the following dockerImage. Do not forget to run build the image first with ./gradlew dockerBuildImage.*/
        /*const dockerImage = new DockerImageAsset(this, 'ImageAsset', {
            directory: "../service/build/docker",
        });
        */
    }
}
exports.SimpleFargateServiceStack = SimpleFargateServiceStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLWZhcmdhdGUtc2VydmljZS1zdGFjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpbXBsZS1mYXJnYXRlLXNlcnZpY2Utc3RhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQXFDO0FBU3JDLHdEQUEyRDtBQUUzRCxNQUFhLHlCQUEwQixTQUFRLEdBQUcsQ0FBQyxLQUFLO0lBQ3BELFlBQVksS0FBYyxFQUFFLEVBQVUsRUFBRSxLQUFzQjtRQUMxRCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QixNQUFNLEtBQUssR0FBRyxJQUFJLG9CQUFLLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRTtZQUNuQyxZQUFZLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSw0QkFBYSxDQUFDLE1BQU0sRUFBRTtZQUMxRCxTQUFTLEVBQUUsWUFBWSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQVEsRUFBRTtTQUNoRCxDQUFDLENBQUM7UUFFSDttSkFDMkk7UUFFM0k7Ozs7Ozs7Ozs7Ozs7OztVQWVFO1FBRUY7cUpBQzZJO1FBRTdJOzs7VUFHRTtJQUNOLENBQUM7Q0FDSjtBQXJDRCw4REFxQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSAnQGF3cy1jZGsvY29yZSc7XG5pbXBvcnQge0FwcGxpY2F0aW9uTG9hZEJhbGFuY2VkRmFyZ2F0ZVNlcnZpY2V9IGZyb20gJ0Bhd3MtY2RrL2F3cy1lY3MtcGF0dGVybnMnO1xuaW1wb3J0IHtDb250YWluZXJJbWFnZX0gZnJvbSAnQGF3cy1jZGsvYXdzLWVjcyc7XG5pbXBvcnQge2xvYWRFeGlzdGluZ0NsdXN0ZXJ9IGZyb20gJy4vZXhpc3RpbmctY2x1c3Rlcic7XG5pbXBvcnQge0RvY2tlckltYWdlQXNzZXR9IGZyb20gJ0Bhd3MtY2RrL2F3cy1lY3ItYXNzZXRzJztcbmltcG9ydCB7QXNwZWN0cywgRHVyYXRpb24sIEZuLCBSZW1vdmFsUG9saWN5fSBmcm9tIFwiQGF3cy1jZGsvY29yZVwiO1xuaW1wb3J0IHtDZm5TZWN1cml0eUdyb3VwLCBTZWN1cml0eUdyb3VwLCBWcGMsIFBlZXIsIFBvcnR9IGZyb20gJ0Bhd3MtY2RrL2F3cy1lYzInO1xuaW1wb3J0IHtTSEFSRURfVlBDX0lEX1NTTX0gZnJvbSBcIi4uLy4uLy4uLy4uL3NoYXJlZC1yZXNvdXJjZXMvY2RrL291dHB1dHMvb3V0cHV0XCI7XG5pbXBvcnQge1N0cmluZ1BhcmFtZXRlcn0gZnJvbSBcIkBhd3MtY2RrL2F3cy1zc21cIjtcbmltcG9ydCB7QXR0cmlidXRlVHlwZSwgVGFibGV9IGZyb20gXCJAYXdzLWNkay9hd3MtZHluYW1vZGJcIjtcblxuZXhwb3J0IGNsYXNzIFNpbXBsZUZhcmdhdGVTZXJ2aWNlU3RhY2sgZXh0ZW5kcyBjZGsuU3RhY2sge1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiBjZGsuQXBwLCBpZDogc3RyaW5nLCBwcm9wcz86IGNkay5TdGFja1Byb3BzKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuXG4gICAgICAgIGNvbnN0IHRhYmxlID0gbmV3IFRhYmxlKHRoaXMsICdUYWJsZScsIHtcbiAgICAgICAgICAgIHBhcnRpdGlvbktleTogeyBuYW1lOiAnbmFtZScsIHR5cGU6IEF0dHJpYnV0ZVR5cGUuU1RSSU5HIH0sXG4gICAgICAgICAgICB0YWJsZU5hbWU6IGB2aXNpdG9ycy0ke3Byb2Nlc3MuZW52LkFVVEhPUiEhfWAsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8qIEV4ZXJjaXNlIDFBOlxuICAgICAgICBVbmNvbW1lbnQgdGhlIGZvbGxvd2luZyBjb2RlIHNuaXBwZXQuIEhhdmUgYSBsb29rIGF0IHRoZSBhcHBsaWNhdGlvbkxvYWRCYWxhbmNlZEZhcmdhdGVTZXJ2aWNlLCB0aGVuIGltcGxlbWVudCBsb2FkRXhpc3RpbmdDbHVzdGVyKHRoaXMpLiovXG5cbiAgICAgICAgLypjb25zdCBjbHVzdGVyID0gbG9hZEV4aXN0aW5nQ2x1c3Rlcih0aGlzKTtcblxuICAgICAgICBjb25zdCBpbWFnZVVyaSA9IFN0cmluZ1BhcmFtZXRlci52YWx1ZUZyb21Mb29rdXAodGhpcywgSU1BR0VfVVJJX0VYUE9SVClcblxuICAgICAgICBjb25zdCBhcHBsaWNhdGlvbkxvYWRCYWxhbmNlZEZhcmdhdGVTZXJ2aWNlID0gbmV3IEFwcGxpY2F0aW9uTG9hZEJhbGFuY2VkRmFyZ2F0ZVNlcnZpY2UodGhpcywgXCJGYXJnYXRlU2VydmljZVwiLCB7XG4gICAgICAgICAgICBjbHVzdGVyOiBjbHVzdGVyLFxuICAgICAgICAgICAgYXNzaWduUHVibGljSXA6IHRydWUsXG4gICAgICAgICAgICB0YXNrSW1hZ2VPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgaW1hZ2U6IENvbnRhaW5lckltYWdlLmZyb21FY3JSZXBvc2l0b3J5KFJlcG9zaXRvcnkuZnJvbVJlcG9zaXRvcnlOYW1lKHRoaXMsIFwicmVwb3NpdG9yeVwiLCBlY3JSZXBvc2l0b3J5RnJvbUltYWdlVXJpKGltYWdlVXJpKSksIGltYWdlVGFnRnJvbUltYWdlVXJpKGltYWdlVXJpKSksXG4gICAgICAgICAgICAgICAgY29udGFpbmVyUG9ydDogODA4MCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFRoaXMgbGluZSBhY2NlbGVyYXRlcyBkZXBsb3ltZW50IGFuZCBzaG91bGQgbm90IGJlIHJlbW92ZWQuXG4gICAgICAgIGFwcGxpY2F0aW9uTG9hZEJhbGFuY2VkRmFyZ2F0ZVNlcnZpY2UudGFyZ2V0R3JvdXAuc2V0QXR0cmlidXRlKCdkZXJlZ2lzdHJhdGlvbl9kZWxheS50aW1lb3V0X3NlY29uZHMnLCAnMCcpO1xuICAgICAgICAqL1xuXG4gICAgICAgIC8qIEV4ZXJjaXNlIDFCOlxuICAgICAgICBSZXBsYWNlIHRoZSBleGFtcGxlIGltYWdlIGFib3ZlIHdpdGggdGhlIGZvbGxvd2luZyBkb2NrZXJJbWFnZS4gRG8gbm90IGZvcmdldCB0byBydW4gYnVpbGQgdGhlIGltYWdlIGZpcnN0IHdpdGggLi9ncmFkbGV3IGRvY2tlckJ1aWxkSW1hZ2UuKi9cblxuICAgICAgICAvKmNvbnN0IGRvY2tlckltYWdlID0gbmV3IERvY2tlckltYWdlQXNzZXQodGhpcywgJ0ltYWdlQXNzZXQnLCB7XG4gICAgICAgICAgICBkaXJlY3Rvcnk6IFwiLi4vc2VydmljZS9idWlsZC9kb2NrZXJcIixcbiAgICAgICAgfSk7XG4gICAgICAgICovXG4gICAgfVxufVxuIl19