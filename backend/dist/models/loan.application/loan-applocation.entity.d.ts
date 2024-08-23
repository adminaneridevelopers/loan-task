import { Model } from 'sequelize-typescript';
export declare class LoanApplication extends Model {
    applicant_name: string;
    applicant_email: string;
    applicant_mobile_phone_number: string;
    applicant_address: string;
    annual_income_before_tax: number;
    incoming_address: string;
    incoming_deposit: number;
    incoming_price: number;
    incoming_stamp_duty: number;
    loan_amount: number;
    loan_duration: number;
    monthly_expenses: number;
    outgoing_address: string;
    outgoing_mortgage: number;
    outgoing_valuation: number;
    savings_contribution: number;
}
