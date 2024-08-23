import { Model } from 'sequelize-typescript';
import { Broker } from '../brokers/broker.entity';
export declare class LoanApplication extends Model<LoanApplication> {
    id: number;
    broker: Broker;
    brokerId: number;
    applicantName: string;
    applicantEmail: string;
    applicantMobilePhoneNumber: string;
    applicantAddress: string;
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
    createdAt: Date;
    updatedAt?: Date;
}
