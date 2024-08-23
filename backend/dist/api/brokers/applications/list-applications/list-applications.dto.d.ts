import { Application } from 'src/models/applications/application.entity';
import { ApplicationStatus } from 'src/enums/application-status.enum';
import { SuccessResponseDto } from 'src/common/responses';
import { TaskStatus } from 'src/enums/task-status.enum';
export declare class BrokerApplicationsListRequestDto {
    readonly status?: ApplicationStatus[];
    readonly completed?: TaskStatus.Completed | TaskStatus.Pending;
    readonly minimumDate?: Date;
    readonly maximumDate?: Date;
}
declare const ApplicationDto_base: import("@nestjs/common").Type<Pick<Application, "applicantName" | "applicantEmail" | "applicantMobilePhoneNumber" | "applicantAddress" | "annualIncomeBeforeTax" | "incomingAddress" | "incomingDeposit" | "incomingPrice" | "incomingStampDuty" | "loanAmount" | "loanDuration" | "monthlyExpenses" | "outgoingAddress" | "outgoingMortgage" | "outgoingValuation" | "savingsContribution">>;
export declare class ApplicationDto extends ApplicationDto_base {
}
export declare class BrokerApplicationPostResponseDto extends SuccessResponseDto {
    readonly loanAmount: number;
    readonly application: any;
}
declare const BrokerApplicationDto_base: import("@nestjs/common").Type<Pick<Application, "status" | "id" | "applicationId" | "applicantName" | "incomingAddress" | "loanAmount" | "loanDuration" | "outgoingAddress" | "createdAt">>;
declare class BrokerApplicationDto extends BrokerApplicationDto_base {
}
export declare class BrokerApplicationsListResponseDto extends SuccessResponseDto {
    readonly applications: BrokerApplicationDto[];
}
export declare class BrokerApplicationsListBadRequestResponseDto {
    readonly message: string;
}
export {};
