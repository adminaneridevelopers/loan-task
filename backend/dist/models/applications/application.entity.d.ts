import { ApplicationStatus } from 'src/enums/application-status.enum';
import { Model } from 'sequelize-typescript';
import { Broker } from '../brokers/broker.entity';
import { Task } from '../tasks/task.entity';
export declare class Application extends Model<Application> {
    id: number;
    applicationId: string;
    applicantName: string;
    applicantEmail: string;
    applicantMobilePhoneNumber: string;
    applicantAddress: string;
    broker?: Broker;
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
    status: ApplicationStatus;
    task?: Task;
    createdAt: Date;
    updatedAt?: Date;
    static getAverageLoanAmount(): Promise<number>;
}
