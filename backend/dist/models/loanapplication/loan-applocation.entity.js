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
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const broker_entity_1 = require("../brokers/broker.entity");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
let LoanApplication = class LoanApplication extends sequelize_typescript_1.Model {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, broker: { required: true, type: () => require("../brokers/broker.entity").Broker }, brokerId: { required: true, type: () => Number }, applicantName: { required: true, type: () => String }, applicantEmail: { required: true, type: () => String }, applicantMobilePhoneNumber: { required: true, type: () => String }, applicantAddress: { required: true, type: () => String }, annualIncomeBeforeTax: { required: true, type: () => Number }, incomingAddress: { required: true, type: () => String }, incomingDeposit: { required: true, type: () => Number }, incomingPrice: { required: true, type: () => Number }, incomingStampDuty: { required: true, type: () => Number }, loanAmount: { required: true, type: () => Number }, loanDuration: { required: true, type: () => Number }, monthlyExpenses: { required: true, type: () => Number }, outgoingAddress: { required: true, type: () => String }, outgoingMortgage: { required: true, type: () => Number }, outgoingValuation: { required: true, type: () => Number }, savingsContribution: { required: true, type: () => Number }, createdAt: { required: true, type: () => Date }, updatedAt: { required: false, type: () => Date } };
    }
};
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The primary key for the row',
    }),
    (0, class_transformer_1.Exclude)(),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    }),
    __metadata("design:type", Number)
], LoanApplication.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The broker who submitted the application' }),
    (0, sequelize_typescript_1.BelongsTo)(() => broker_entity_1.Broker, 'brokerId'),
    __metadata("design:type", broker_entity_1.Broker)
], LoanApplication.prototype, "broker", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The broker id',
        type: String,
        format: 'uuid',
    }),
    (0, sequelize_typescript_1.ForeignKey)(() => broker_entity_1.Broker),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, field: 'broker_id' }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], LoanApplication.prototype, "brokerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The name of the applicant' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(100) }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LoanApplication.prototype, "applicantName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The email of the applicant' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(100), unique: true }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LoanApplication.prototype, "applicantEmail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The mobile phone number of the applicant' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(15) }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LoanApplication.prototype, "applicantMobilePhoneNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The address of the applicant' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(255) }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LoanApplication.prototype, "applicantAddress", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The annual income before tax' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.FLOAT }),
    __metadata("design:type", Number)
], LoanApplication.prototype, "annualIncomeBeforeTax", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The incoming address' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(255) }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LoanApplication.prototype, "incomingAddress", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The incoming deposit amount' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.FLOAT }),
    __metadata("design:type", Number)
], LoanApplication.prototype, "incomingDeposit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The incoming price' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.FLOAT }),
    __metadata("design:type", Number)
], LoanApplication.prototype, "incomingPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The incoming stamp duty' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.FLOAT }),
    __metadata("design:type", Number)
], LoanApplication.prototype, "incomingStampDuty", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The loan amount' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.FLOAT }),
    __metadata("design:type", Number)
], LoanApplication.prototype, "loanAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The loan duration in months' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], LoanApplication.prototype, "loanDuration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The monthly expenses' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.FLOAT }),
    __metadata("design:type", Number)
], LoanApplication.prototype, "monthlyExpenses", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The outgoing address' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(255) }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LoanApplication.prototype, "outgoingAddress", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The outgoing mortgage' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.FLOAT }),
    __metadata("design:type", Number)
], LoanApplication.prototype, "outgoingMortgage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The outgoing valuation' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.FLOAT }),
    __metadata("design:type", Number)
], LoanApplication.prototype, "outgoingValuation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The savings contribution' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.FLOAT }),
    __metadata("design:type", Number)
], LoanApplication.prototype, "savingsContribution", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The date the row was created',
        type: Date,
        format: 'date-time',
    }),
    (0, class_transformer_1.Exclude)(),
    (0, sequelize_typescript_1.Column)({
        field: 'created_at',
        type: sequelize_typescript_1.DataType.DATE,
        defaultValue: sequelize_typescript_1.DataType.NOW,
    }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], LoanApplication.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'The date the row was last modified',
        type: Date,
        format: 'date-time',
    }),
    (0, class_transformer_1.Exclude)(),
    (0, sequelize_typescript_1.Column)({
        field: 'updated_at',
        type: sequelize_typescript_1.DataType.DATE,
        defaultValue: sequelize_typescript_1.DataType.NOW,
    }),
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], LoanApplication.prototype, "updatedAt", void 0);
LoanApplication = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'loan_applications',
        timestamps: true,
    })
], LoanApplication);
exports.LoanApplication = LoanApplication;
//# sourceMappingURL=loan-applocation.entity.js.map