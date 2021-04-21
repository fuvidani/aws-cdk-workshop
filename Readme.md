# AWS CDK Workshop
    
## Presentation Slides

The slides are available in the Slides folder

## Useful links for the exercises:

[Reference](https://docs.aws.amazon.com/cdk/api/latest/docs/aws-construct-library.html)
[Documenation](https://docs.aws.amazon.com/cdk/latest/guide/getting_started.html)

## How to deploy exercises and access the deployed webpage
+ First install the CDK cli: `npm install -g aws-cdk`.
+ Go to `exercises/cdk` and run `npm install`.
+ Deploy to AWS
 `AUTHOR=<Your Unique Name (e.g. neuerm)> AWS_PROFILE=cdk-workshop AWS_REGION=eu-west-1 cdk deploy`.
+ Deployment takes some time. Some exercises can be completed by running `cdk synth` or `cdk diff`.
+ (After exercise 1A) The deployment command should print the URL of the deployed webpage as an Cloudformation output.

## Exercises

### 0 Run the CDK app and deploy
+ Goals: First deployment (a DynamoDB table) and getting started with the CDK.
+ Go to `exercises/cdk` and make yourself familiar with the code.
+ run `cdk synth`, contemplate the generated template in the cdk.out folder and `cdk deploy`. 

### 1 How to import resources from other stacks:

### 1A Use the existing cluster
+ Goals: 
    + Deploy our example application, which serves a static web page. 
    + Access the web page in your browser.
    + Use a cdk pattern to deploy a Fargate service behind a loadbalancer. 
    + Use an existing ECS cluster.
+ Starting point: Go to `exercises/cdk/lib/simple-fargate-service-stack.ts`
+ We already deployed a shared stack called `cdk-workshop-shared-resources`, which defines a vpc, ECS cluster. Import these into your stack.
+ Visit the URL printed as an output in the deploy command. 

### 1B Build the Docker image yourself (Optional)
+ Go to the `exercises/service/` directory and run `./gradlew dockerBuildImage`
+ Adapt the code in `exercises/cdk/lib/simple-fargate-service-stack.ts`
+ Validate your changes by running cdk diff and deploy your service.

### 2 Customization of constructs (Requires: 1A)

#### 2A

Set the DesiredTaskCount of our Service to 2. 

#### 2B

Add Auto-Scaling to the Service. When the service uses more than 5% of its memory, it should use 3 instances.
Hint: Investigate the 'service' property of your ApplicationLoadBalancedFargateService.

### 3 Basic logic, tests and aspects (Requires: 1A)

#### 3A Conditional resource creation

Make the size of the CPU and the memory of the task definition depending on the AWS region you are deploying into 
(not all combinations of CPU and memory values are valid, check [Docu](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-cpu-memory-error.html)). 
We have deployed the shared-resources-stack into eu-west-1 and eu-central-1.

#### 3B A simple test

Write a test that verifies the code from 3A by inspecting the Cloudformation template.
+ Starting point: `exercises/cdk/test/simple-fargate-service.test.ts`

#### 3C A more complex test (Optional)

Write a test that ensures that logs in every log group of the stack are discarded after at most one week. 
Ideally your test code should not depend on the concrete resources created in the stack. 
Afterwards make the test green by specifying the retention time of the log-group of our service or by solving exercise 3D.
+ Starting point: `exercises/cdk/test/simple-fargate-service.test.ts`

#### 3D Aspects (Optional)

Write an aspect that automatically limits the retention time for all log groups in scope in order to make the test of 3C green.

### 4 Higher-level permission API: (Requires: 1A)

Goal: When you open the webpage deployed by our service, the visitor should be saved in the database 'visitors-${AUTHOR}' added in Exercise 0.
Additionally, all visitors should be listed on the webpage. Our source code already contains the logic and performs a PUT and SCAN.
 
#### 4A Giving very high-level permissions
 
Give the service general read and write permissions to the database.
+ Starting point: `exercises/cdk/lib/simple-fargate-service-stack.ts`
+ Pass the table name as an environment variable TABLE_NAME to the service
+ Make the table grant the task role read and write permissions

#### 4B Giving least-privilege permissions

Inspect the resulting policy/role from 4A with cdk synth and restrict the permissions to only the necessary ones.

# Useful commands

## For CDK
After `cd cdk`:
 * `cdk deploy`      deploy this stack to your default AWS account/region (Dockerfile needs to be created before)
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template

## For java
* `./gradlew dockerCreateDockerfile` create Dockerfile to package application
* `./gradlew dockerBuildImage` package the application as Docker image
