import { LoanApplicationService } from './loan-application.service';
import { CreateLoanApplicationDto, CreateLoanApplicationResponseDto } from './loan-application.dto';
export declare class LoanApplicationController {
    private readonly loanApplicationService;
    private readonly logger;
    constructor(loanApplicationService: LoanApplicationService);
    create(createLoanApplicationDto: CreateLoanApplicationDto): Promise<CreateLoanApplicationResponseDto>;
}
