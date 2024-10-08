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
var LoanApplication_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanApplication = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const loan_application_status_enum_1 = require("../../enums/loan-application-status.enum");
const sequelize_typescript_1 = require("sequelize-typescript");
const broker_entity_1 = require("../brokers/broker.entity");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const task_entity_1 = require("../tasks/task.entity");
let LoanApplication = LoanApplication_1 = class LoanApplication extends sequelize_typescript_1.Model {
    static async getAverageLoanAmount() {
        const result = await LoanApplication_1.findOne({
            attributes: [
                [this.sequelize.fn('AVG', this.sequelize.col('loan_amount')), 'averageLoanAmount']
            ],
        });
        const res = (result === null || result === void 0 ? void 0 : result.get('averageLoanAmount')) || 0;
        return res;
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, loanApplicationId: { required: true, type: () => String }, applicantName: { required: true, type: () => String }, applicantEmail: { required: true, type: () => String }, applicantMobilePhoneNumber: { required: true, type: () => String }, applicantAddress: { required: true, type: () => String }, broker: { required: false, type: () => require("../brokers/broker.entity").Broker }, brokerId: { required: false, type: () => Number }, annualIncomeBeforeTax: { required: true, type: () => Number }, incomingAddress: { required: true, type: () => String }, incomingDeposit: { required: true, type: () => Number }, incomingPrice: { required: true, type: () => Number }, incomingStampDuty: { required: true, type: () => Number }, loanAmount: { required: true, type: () => Number }, loanDuration: { required: true, type: () => Number }, monthlyExpenses: { required: true, type: () => Number }, outgoingAddress: { required: true, type: () => String }, outgoingMortgage: { required: true, type: () => Number }, outgoingValuation: { required: true, type: () => Number }, savingsContribution: { required: true, type: () => Number }, status: { required: true, enum: require("../../enums/loan-application-status.enum").LoanApplicationStatus }, tasks: { required: false, type: () => [require("../tasks/task.entity").Task] }, createdAt: { required: true, type: () => Date }, updatedAt: { required: false, type: () => Date } };
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
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.VIRTUAL,
        get() {
            const id = this.getDataValue('id');
            return `LA${id.toString().padStart(5, '0')}`;
        },
    }),
    __metadata("design:type", String)
], LoanApplication.prototype, "loanApplicationId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "The applicant's name" }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(50), field: 'applicant_name' }),
    __metadata("design:type", String)
], LoanApplication.prototype, "applicantName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "The applicant's email address" }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(255), field: 'applicant_email' }),
    __metadata("design:type", String)
], LoanApplication.prototype, "applicantEmail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "The applicant's mobile phone number" }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(20),
        unique: true,
        field: 'applicant_mobile_phone_number',
    }),
    __metadata("design:type", String)
], LoanApplication.prototype, "applicantMobilePhoneNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "The applicant's address" }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(50), field: 'applicant_address' }),
    __metadata("design:type", String)
], LoanApplication.prototype, "applicantAddress", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'The broker that arranged the loan' }),
    (0, sequelize_typescript_1.BelongsTo)(() => broker_entity_1.Broker),
    __metadata("design:type", broker_entity_1.Broker)
], LoanApplication.prototype, "broker", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The broker id that arranged the loan',
    }),
    (0, sequelize_typescript_1.ForeignKey)(() => broker_entity_1.Broker),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, field: 'broker_id' }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], LoanApplication.prototype, "brokerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "The applicant's annual income before tax in dollars" }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DECIMAL(10, 2),
        field: 'annual_income_before_tax',
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], LoanApplication.prototype, "annualIncomeBeforeTax", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The incoming property address' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(50), field: 'incoming_address' }),
    __metadata("design:type", String)
], LoanApplication.prototype, "incomingAddress", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The deposit paid on the incoming property in dollars' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DECIMAL(10, 2),
        field: 'incoming_deposit',
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], LoanApplication.prototype, "incomingDeposit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The purchase price of the incoming property in dollars' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DECIMAL(10, 2),
        field: 'incoming_price',
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], LoanApplication.prototype, "incomingPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The stamp duty to be paid on the incoming property in dollars' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DECIMAL(10, 2),
        field: 'incoming_stamp_duty',
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], LoanApplication.prototype, "incomingStampDuty", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The loan amount in dollars' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DECIMAL(10, 2),
        field: 'loan_amount',
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], LoanApplication.prototype, "loanAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The duration of the loan in months' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        field: 'loan_duration',
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], LoanApplication.prototype, "loanDuration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "The applicant's monthly expenses in dollars" }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DECIMAL(10, 2),
        field: 'monthly_expenses',
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], LoanApplication.prototype, "monthlyExpenses", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The outgoing property address' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(50), field: 'outgoing_address' }),
    __metadata("design:type", String)
], LoanApplication.prototype, "outgoingAddress", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The remaining mortgage if any on the outgoing property in dollars' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DECIMAL(10, 2),
        field: 'outgoing_mortgage',
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], LoanApplication.prototype, "outgoingMortgage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The outgoing property valuation in dollars' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DECIMAL(10, 2),
        field: 'outgoing_valuation',
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], LoanApplication.prototype, "outgoingValuation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "The applicant's savings put towards the loan in dollars" }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DECIMAL(10, 2),
        field: 'savings_contribution',
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], LoanApplication.prototype, "savingsContribution", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The application status in progress/on hold/etc',
        enum: loan_application_status_enum_1.LoanApplicationStatus,
        enumName: 'LoanApplicationStatus',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ENUM(...Object.values(loan_application_status_enum_1.LoanApplicationStatus)),
        allowNull: false,
    }),
    __metadata("design:type", String)
], LoanApplication.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'The tasks attached to the loan' }),
    (0, sequelize_typescript_1.HasMany)(() => task_entity_1.Task, { onDelete: 'cascade', hooks: true }),
    __metadata("design:type", Array)
], LoanApplication.prototype, "tasks", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The date the row was created', type: Date, format: 'date-time' }),
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
    (0, swagger_1.ApiPropertyOptional)({ description: 'The date the row was last modified', type: Date, format: 'date-time' }),
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
LoanApplication = LoanApplication_1 = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'loan_applications',
        timestamps: true,
    })
], LoanApplication);
exports.LoanApplication = LoanApplication;
//# sourceMappingURL=loan-applIcation.entity.js.map