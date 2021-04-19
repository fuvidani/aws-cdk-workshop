"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadExistingCluster = void 0;
const input_1 = require("../input/input");
exports.loadExistingCluster = (scope) => {
    /* Exercise 1A:
    Import the Vpc (Virtual Private Cloud), which is needed to import the cluster.
    Use the Vpc.fromLookup method. To get the vpcId, either
        i) look it up in AWS Console (https://console.aws.amazon.com)
        ii) import the SSM parameter 'shared-vpc-id-ssm' (Hint: Use the StringParameter class to lookup the ssm
         parameter).
    */
    console.log(`Hint: use these constants: ${input_1.SHARED_VPC_ID_SSM}, ${input_1.SHARED_CLUSTER_NAME_EXPORT}`);
    // const existingVpc: IVpc =
    // return Cluster.from...
    // Hint: We exported the cluster name as the output 'shared-cluster-name-export'. Use the 'Fn' object to import it.
    // Hint 2: Pass an empty array for security groups
    throw Error("No cluster was loaded. Finish exercise 1 to fix this.");
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhpc3RpbmctY2x1c3Rlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImV4aXN0aW5nLWNsdXN0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBSUEsMENBQTZFO0FBRWhFLFFBQUEsbUJBQW1CLEdBQW9DLENBQUMsS0FBZ0IsRUFBRSxFQUFFO0lBRXJGOzs7Ozs7TUFNRTtJQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLHlCQUFpQixLQUFLLGtDQUEwQixFQUFFLENBQUMsQ0FBQTtJQUU3Riw0QkFBNEI7SUFFNUIseUJBQXlCO0lBQ3pCLG1IQUFtSDtJQUNuSCxrREFBa0Q7SUFFbEQsTUFBTSxLQUFLLENBQUMsdURBQXVELENBQUMsQ0FBQztBQUN6RSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWcGMsIElWcGMgfSBmcm9tICdAYXdzLWNkay9hd3MtZWMyJztcbmltcG9ydCB7IENsdXN0ZXIsIElDbHVzdGVyIH0gZnJvbSAnQGF3cy1jZGsvYXdzLWVjcyc7XG5pbXBvcnQgeyBDb25zdHJ1Y3QsIEZuIH0gZnJvbSAnQGF3cy1jZGsvY29yZSc7XG5pbXBvcnQgeyBTdHJpbmdQYXJhbWV0ZXIgfSBmcm9tIFwiQGF3cy1jZGsvYXdzLXNzbVwiO1xuaW1wb3J0IHtTSEFSRURfQ0xVU1RFUl9OQU1FX0VYUE9SVCwgU0hBUkVEX1ZQQ19JRF9TU019IGZyb20gXCIuLi9pbnB1dC9pbnB1dFwiO1xuXG5leHBvcnQgY29uc3QgbG9hZEV4aXN0aW5nQ2x1c3RlcjogKHNjb3BlOiBDb25zdHJ1Y3QpID0+ICBJQ2x1c3RlciA9IChzY29wZTogQ29uc3RydWN0KSA9PiB7XG5cbiAgICAvKiBFeGVyY2lzZSAxQTpcbiAgICBJbXBvcnQgdGhlIFZwYyAoVmlydHVhbCBQcml2YXRlIENsb3VkKSwgd2hpY2ggaXMgbmVlZGVkIHRvIGltcG9ydCB0aGUgY2x1c3Rlci5cbiAgICBVc2UgdGhlIFZwYy5mcm9tTG9va3VwIG1ldGhvZC4gVG8gZ2V0IHRoZSB2cGNJZCwgZWl0aGVyXG4gICAgICAgIGkpIGxvb2sgaXQgdXAgaW4gQVdTIENvbnNvbGUgKGh0dHBzOi8vY29uc29sZS5hd3MuYW1hem9uLmNvbSlcbiAgICAgICAgaWkpIGltcG9ydCB0aGUgU1NNIHBhcmFtZXRlciAnc2hhcmVkLXZwYy1pZC1zc20nIChIaW50OiBVc2UgdGhlIFN0cmluZ1BhcmFtZXRlciBjbGFzcyB0byBsb29rdXAgdGhlIHNzbVxuICAgICAgICAgcGFyYW1ldGVyKS5cbiAgICAqL1xuICAgIGNvbnNvbGUubG9nKGBIaW50OiB1c2UgdGhlc2UgY29uc3RhbnRzOiAke1NIQVJFRF9WUENfSURfU1NNfSwgJHtTSEFSRURfQ0xVU1RFUl9OQU1FX0VYUE9SVH1gKVxuXG4gICAgLy8gY29uc3QgZXhpc3RpbmdWcGM6IElWcGMgPVxuXG4gICAgLy8gcmV0dXJuIENsdXN0ZXIuZnJvbS4uLlxuICAgIC8vIEhpbnQ6IFdlIGV4cG9ydGVkIHRoZSBjbHVzdGVyIG5hbWUgYXMgdGhlIG91dHB1dCAnc2hhcmVkLWNsdXN0ZXItbmFtZS1leHBvcnQnLiBVc2UgdGhlICdGbicgb2JqZWN0IHRvIGltcG9ydCBpdC5cbiAgICAvLyBIaW50IDI6IFBhc3MgYW4gZW1wdHkgYXJyYXkgZm9yIHNlY3VyaXR5IGdyb3Vwc1xuXG4gICAgdGhyb3cgRXJyb3IoXCJObyBjbHVzdGVyIHdhcyBsb2FkZWQuIEZpbmlzaCBleGVyY2lzZSAxIHRvIGZpeCB0aGlzLlwiKTtcbn07XG4iXX0=