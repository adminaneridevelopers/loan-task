import { LoanApplication } from 'src/models/loanapplication/loan-applIcation.entity';
import { CreateLoanApplicationDto } from './loan-application.dto';
export declare class LoanApplicationService {
    create(createLoanApplicationDto: CreateLoanApplicationDto): Promise<LoanApplication>;
}
