"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanApplicationDataModule = void 0;
const common_1 = require("@nestjs/common");
const loan_applications_provider_1 = require("./loan-applications.provider");
const sequelize_1 = require("@nestjs/sequelize");
const loan_applIcation_entity_1 = require("./loan-applIcation.entity");
const loan_application_controller_1 = require("../../api/brokers/loan-application/loan-application.controller");
const loan_application_service_1 = require("../../api/brokers/loan-application/loan-application.service");
let LoanApplicationDataModule = class LoanApplicationDataModule {
};
LoanApplicationDataModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forFeature([loan_applIcation_entity_1.LoanApplication]),
        ],
        controllers: [loan_application_controller_1.LoanApplicationController],
        providers: [
            loan_application_service_1.LoanApplicationService,
            ...loan_applications_provider_1.loanapplicationProviders,
        ],
    })
], LoanApplicationDataModule);
exports.LoanApplicationDataModule = LoanApplicationDataModule;
//# sourceMappingURL=loan-applications.module.js.map