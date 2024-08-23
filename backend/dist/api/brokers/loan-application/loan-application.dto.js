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
exports.CreateLoanApplicationResponseDto = exports.CreateLoanApplicationDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const loan_application_status_enum_1 = require("../../../enums/loan-application-status.enum");
class CreateLoanApplicationDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { applicantName: { required: true, type: () => String }, applicantEmail: { required: true, type: () => String }, applicantMobilePhoneNumber: { required: true, type: () => String }, applicantAddress: { required: true, type: () => String }, brokerId: { required: false, type: () => Number }, annualIncomeBeforeTax: { required: true, type: () => Number }, incomingAddress: { required: true, type: () => String }, incomingDeposit: { required: true, type: () => Number }, incomingPrice: { required: true, type: () => Number }, incomingStampDuty: { required: true, type: () => Number }, loanAmount: { required: true, type: () => Number }, loanDuration: { required: true, type: () => Number }, monthlyExpenses: { required: true, type: () => Number }, outgoingAddress: { required: true, type: () => String }, outgoingMortgage: { required: true, type: () => Number }, outgoingValuation: { required: true, type: () => Number }, savingsContribution: { required: true, type: () => Number }, status: { required: true, enum: require("../../../enums/loan-application-status.enum").LoanApplicationStatus } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "The applicant's name",
        example: 'John Doe',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateLoanApplicationDto.prototype, "applicantName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "The applicant's email address",
        example: 'john.doe@example.com',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateLoanApplicationDto.prototype, "applicantEmail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "The applicant's mobile phone number",
        example: '+1234567890',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateLoanApplicationDto.prototype, "applicantMobilePhoneNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "The applicant's address",
        example: '123 Main St, Anytown, USA',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateLoanApplicationDto.prototype, "applicantAddress", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'The broker ID that arranged the loan',
        example: 1,
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateLoanApplicationDto.prototype, "brokerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "The applicant's annual income before tax in dollars",
        example: 75000.00,
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateLoanApplicationDto.prototype, "annualIncomeBeforeTax", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The incoming property address',
        example: '456 Elm St, Other Town, USA',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateLoanApplicationDto.prototype, "incomingAddress", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The deposit paid on the incoming property in dollars',
        example: 20000.00,
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateLoanApplicationDto.prototype, "incomingDeposit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The purchase price of the incoming property in dollars',
        example: 300000.00,
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateLoanApplicationDto.prototype, "incomingPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The stamp duty to be paid on the incoming property in dollars',
        example: 5000.00,
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateLoanApplicationDto.prototype, "incomingStampDuty", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The loan amount in dollars',
        example: 250000.00,
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateLoanApplicationDto.prototype, "loanAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The duration of the loan in months',
        example: 30,
    }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateLoanApplicationDto.prototype, "loanDuration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "The applicant's monthly expenses in dollars",
        example: 1500.00,
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateLoanApplicationDto.prototype, "monthlyExpenses", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The outgoing property address',
        example: '789 Oak St, Another Town, USA',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateLoanApplicationDto.prototype, "outgoingAddress", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The remaining mortgage if any on the outgoing property in dollars',
        example: 100000.00,
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateLoanApplicationDto.prototype, "outgoingMortgage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The outgoing property valuation in dollars',
        example: 200000.00,
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateLoanApplicationDto.prototype, "outgoingValuation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "The applicant's savings put towards the loan in dollars",
        example: 10000.00,
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateLoanApplicationDto.prototype, "savingsContribution", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The application status in progress/on hold/etc',
        enum: loan_application_status_enum_1.LoanApplicationStatus,
    }),
    (0, class_validator_1.IsEnum)(loan_application_status_enum_1.LoanApplicationStatus, { message: 'Invalid status provided' }),
    __metadata("design:type", String)
], CreateLoanApplicationDto.prototype, "status", void 0);
exports.CreateLoanApplicationDto = CreateLoanApplicationDto;
class CreateLoanApplicationResponseDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { success: { required: true, type: () => Boolean }, application: { required: true, type: () => Object } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Success status indicating the request completed',
        default: true,
    }),
    __metadata("design:type", Boolean)
], CreateLoanApplicationResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The created loan application data',
    }),
    __metadata("design:type", Object)
], CreateLoanApplicationResponseDto.prototype, "application", void 0);
exports.CreateLoanApplicationResponseDto = CreateLoanApplicationResponseDto;
//# sourceMappingURL=loan-application.dto.js.map