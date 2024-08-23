"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanApplication = void 0;
const openapi = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
let LoanApplication = class LoanApplication extends sequelize_typescript_1.Model {
    static _OPENAPI_METADATA_FACTORY() {
        return { applicant_name: { required: true, type: () => String }, applicant_email: { required: true, type: () => String }, applicant_mobile_phone_number: { required: true, type: () => String }, applicant_address: { required: true, type: () => String }, annual_income_before_tax: { required: true, type: () => Number }, incoming_address: { required: true, type: () => String }, incoming_deposit: { required: true, type: () => Number }, incoming_price: { required: true, type: () => Number }, incoming_stamp_duty: { required: true, type: () => Number }, loan_amount: { required: true, type: () => Number }, loan_duration: { required: true, type: () => Number }, monthly_expenses: { required: true, type: () => Number }, outgoing_address: { required: true, type: () => String }, outgoing_mortgage: { required: true, type: () => Number }, outgoing_valuation: { required: true, type: () => Number }, savings_contribution: { required: true, type: () => Number } };
    }
};
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], LoanApplication.prototype, "applicant_name", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], LoanApplication.prototype, "applicant_email", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], LoanApplication.prototype, "applicant_mobile_phone_number", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], LoanApplication.prototype, "applicant_address", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], LoanApplication.prototype, "annual_income_before_tax", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], LoanApplication.prototype, "incoming_address", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], LoanApplication.prototype, "incoming_deposit", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], LoanApplication.prototype, "incoming_price", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], LoanApplication.prototype, "incoming_stamp_duty", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], LoanApplication.prototype, "loan_amount", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], LoanApplication.prototype, "loan_duration", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], LoanApplication.prototype, "monthly_expenses", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], LoanApplication.prototype, "outgoing_address", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], LoanApplication.prototype, "outgoing_mortgage", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], LoanApplication.prototype, "outgoing_valuation", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], LoanApplication.prototype, "savings_contribution", void 0);
LoanApplication = __decorate([
    sequelize_typescript_1.Table
], LoanApplication);
exports.LoanApplication = LoanApplication;
//# sourceMappingURL=applocation.entity.js.map