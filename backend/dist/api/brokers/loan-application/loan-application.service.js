"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanApplicationService = void 0;
const common_1 = require("@nestjs/common");
const loan_applIcation_entity_1 = require("../../../models/loanapplication/loan-applIcation.entity");
const loan_application_status_enum_1 = require("../../../enums/loan-application-status.enum");
let LoanApplicationService = class LoanApplicationService {
    async create(createLoanApplicationDto) {
        const loanApplication = new loan_applIcation_entity_1.LoanApplication(Object.assign(Object.assign({}, createLoanApplicationDto), { status: loan_application_status_enum_1.LoanApplicationStatus.SUBMITTED }));
        try {
            await loanApplication.save();
            return loanApplication;
        }
        catch (error) {
            throw new Error('Failed to create loan application');
        }
    }
};
LoanApplicationService = __decorate([
    (0, common_1.Injectable)()
], LoanApplicationService);
exports.LoanApplicationService = LoanApplicationService;
//# sourceMappingURL=loan-application.service.js.map