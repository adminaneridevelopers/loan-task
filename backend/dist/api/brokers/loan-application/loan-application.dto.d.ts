import { LoanApplicationStatus } from 'src/enums/loan-application-status.enum';
export declare class CreateLoanApplicationDto {
    applicantName: string;
    applicantEmail: string;
    applicantMobilePhoneNumber: string;
    applicantAddress: string;
    brokerId?: number;
    annualIncomeBeforeTax: number;
    incomingAddress: string;
    incomingDeposit: number;
    incomingPrice: number;
    incomingStampDuty: number;
    loanAmount: number;
    loanDuration: number;
    monthlyExpenses: number;
    outgoingAddress: string;
    outgoingMortgage: number;
    outgoingValuation: number;
    savingsContribution: number;
    status: LoanApplicationStatus;
}
export declare class CreateLoanApplicationResponseDto {
    success: boolean;
    application: any;
}
