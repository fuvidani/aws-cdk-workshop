import {IAspect, IConstruct} from "@aws-cdk/core";
import {CfnLogGroup} from '@aws-cdk/aws-logs';

// Exercise 3D

export class LogGroupRetentionChecker implements IAspect {
    public visit(node: IConstruct): void {
        if (node instanceof CfnLogGroup) {
            if (!node.retentionInDays || node.retentionInDays > 7) {
                node.retentionInDays = 7
            }
        }
    }
}
