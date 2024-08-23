"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loanapplicationProviders = void 0;
const repositories_1 = require("../../common/constants/repositories");
const loan_applIcation_entity_1 = require("./loan-applIcation.entity");
exports.loanapplicationProviders = [
    {
        provide: repositories_1.LOAN_APPLICATION_REPOSITORY,
        useValue: loan_applIcation_entity_1.LoanApplication,
    },
];
//# sourceMappingURL=loan-applications.provider.js.map