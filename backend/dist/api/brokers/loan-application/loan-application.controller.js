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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var LoanApplicationController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanApplicationController = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const loan_application_service_1 = require("./loan-application.service");
const loan_application_dto_1 = require("./loan-application.dto");
const response_messages_1 = require("../../../common/constants/response-messages");
const responses_1 = require("../../../common/responses");
const common_2 = require("@nestjs/common");
let LoanApplicationController = LoanApplicationController_1 = class LoanApplicationController {
    constructor(loanApplicationService) {
        this.loanApplicationService = loanApplicationService;
        this.logger = new common_2.Logger(LoanApplicationController_1.name);
    }
    async create(createLoanApplicationDto) {
        this.logger.log('Received payload:', JSON.stringify(createLoanApplicationDto));
        try {
            console.log('createLoanApplicationDto =>>>>>> ', createLoanApplicationDto);
            const application = await this.loanApplicationService.create(createLoanApplicationDto);
            console.log('Saved application:', application);
            return {
                success: true,
                application,
            };
        }
        catch (error) {
            console.log("Errrrrrorrrrrrrrr =====>    ", error);
            throw new common_1.HttpException(response_messages_1.INVALID_INPUT_ERROR, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
__decorate([
    (0, common_1.Post)('create'),
    (0, swagger_1.ApiOperation)({
        summary: 'Creates a new loan application',
        description: 'Allows users to create a new loan application with provided details.',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOkResponse)({
        type: loan_application_dto_1.CreateLoanApplicationResponseDto,
    }),
    (0, swagger_1.ApiInternalServerErrorResponse)({
        type: responses_1.InternalServerErrorResponseDto,
        description: `Returns \`${response_messages_1.INTERNAL_SERVER_ERROR}\` when the result could not be computed`,
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        type: responses_1.BadRequestResponseDto,
        description: `Returns \`${response_messages_1.INVALID_INPUT_ERROR}\` when input validation fails`,
    }),
    (0, swagger_1.ApiBody)({
        type: loan_application_dto_1.CreateLoanApplicationDto,
    }),
    openapi.ApiResponse({ status: common_1.HttpStatus.CREATED, type: require("./loan-application.dto").CreateLoanApplicationResponseDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [loan_application_dto_1.CreateLoanApplicationDto]),
    __metadata("design:returntype", Promise)
], LoanApplicationController.prototype, "create", null);
LoanApplicationController = LoanApplicationController_1 = __decorate([
    (0, common_1.Controller)('loan-applications'),
    (0, swagger_1.ApiTags)('Loan Application API'),
    __metadata("design:paramtypes", [loan_application_service_1.LoanApplicationService])
], LoanApplicationController);
exports.LoanApplicationController = LoanApplicationController;
//# sourceMappingURL=loan-application.controller.js.map