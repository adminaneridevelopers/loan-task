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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrokerApplicationsListController = void 0;
const openapi = require("@nestjs/swagger");
const repositories_1 = require("../../../../common/constants/repositories");
const swagger_1 = require("@nestjs/swagger");
const list_applications_dto_1 = require("./list-applications.dto");
const broker_dto_1 = require("../../../../models/brokers/broker.dto");
const broker_guard_1 = require("../../broker.guard");
const common_1 = require("@nestjs/common");
const response_messages_1 = require("../../../../common/constants/response-messages");
const responses_1 = require("../../../../common/responses");
const task_entity_1 = require("../../../../models/tasks/task.entity");
const task_status_enum_1 = require("../../../../enums/task-status.enum");
const query_filters_1 = require("../../../../common/query-filters");
const swagger_2 = require("../../../../common/swagger");
const user_1 = require("../../../../common/decorators/user");
const sequelize_1 = require("sequelize");
const application_status_enum_1 = require("../../../../enums/application-status.enum");
let BrokerApplicationsListController = class BrokerApplicationsListController {
    constructor(applicationEntity) {
        this.applicationEntity = applicationEntity;
    }
    async find(user, query) {
        let dateFilter;
        try {
            dateFilter = (0, query_filters_1.createDateFilter)('createdAt', query.minimumDate, query.maximumDate);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
        const relatedData = [];
        if (query.completed) {
            relatedData.push({
                model: task_entity_1.Task,
                where: {
                    status: task_status_enum_1.TaskStatus.Completed,
                    assignedToBrokerId: user.id,
                },
            });
        }
        else {
            relatedData.push({
                model: task_entity_1.Task,
                where: {
                    status: task_status_enum_1.TaskStatus.Pending,
                    assignedToBrokerId: user.id,
                },
                required: false,
            });
        }
        const whereOptions = Object.assign({ brokerId: user.id }, dateFilter);
        if (query.status) {
            whereOptions.status = { [sequelize_1.Op.in]: query.status };
            console.log(whereOptions);
        }
        const applications = await this.applicationEntity.findAll({
            where: whereOptions,
            include: relatedData,
        });
        return {
            success: true,
            applications,
        };
    }
    async post(user, body, request) {
        const avgLoanAmount = await this.applicationEntity.getAverageLoanAmount();
        const loanAmount = body.loanAmount !== avgLoanAmount ? body.loanAmount : null;
        const application = await this.applicationEntity.create(Object.assign(Object.assign({}, body), { status: application_status_enum_1.ApplicationStatus.Submitted, brokerId: user.id }));
        return {
            success: true,
            loanAmount,
            application
        };
    }
};
__decorate([
    (0, common_1.Get)('list-applications'),
    (0, common_1.UseGuards)(broker_guard_1.BrokerGuard),
    (0, swagger_1.ApiBearerAuth)('BROKER'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Finds applications belonging to a broker',
        description: 'Fetches the applications that the broker has submitted.  The applications are optionally filtered by date via the query string parameters, and by the status of the task being pending or complete.',
    }),
    (0, swagger_1.ApiOkResponse)({
        type: list_applications_dto_1.BrokerApplicationsListResponseDto,
    }),
    (0, swagger_1.ApiInternalServerErrorResponse)({
        type: responses_1.InternalServerErrorResponseDto,
        description: `Returns \`${response_messages_1.INTERNAL_SERVER_ERROR}\` when the result could not be computed`,
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        type: list_applications_dto_1.BrokerApplicationsListBadRequestResponseDto,
        description: (0, swagger_2.formatResponseTable)({}),
    }),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: require("./list-applications.dto").BrokerApplicationsListResponseDto }),
    __param(0, (0, user_1.default)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [broker_dto_1.BrokerDto,
        list_applications_dto_1.BrokerApplicationsListRequestDto]),
    __metadata("design:returntype", Promise)
], BrokerApplicationsListController.prototype, "find", null);
__decorate([
    (0, common_1.Post)('create-applications'),
    (0, common_1.UseGuards)(broker_guard_1.BrokerGuard),
    (0, swagger_1.ApiBearerAuth)('BROKER'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Create applications',
        description: 'Create the applications that the broker has submitted.',
    }),
    (0, swagger_1.ApiOkResponse)({
        type: list_applications_dto_1.BrokerApplicationPostResponseDto,
    }),
    (0, swagger_1.ApiInternalServerErrorResponse)({
        type: responses_1.InternalServerErrorResponseDto,
        description: `Returns \`${response_messages_1.INTERNAL_SERVER_ERROR}\` when the result could not be computed`,
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        type: list_applications_dto_1.BrokerApplicationsListBadRequestResponseDto,
        description: (0, swagger_2.formatResponseTable)({}),
    }),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: require("./list-applications.dto").BrokerApplicationPostResponseDto }),
    __param(0, (0, user_1.default)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [broker_dto_1.BrokerDto,
        list_applications_dto_1.ApplicationDto,
        Request]),
    __metadata("design:returntype", Promise)
], BrokerApplicationsListController.prototype, "post", null);
BrokerApplicationsListController = __decorate([
    (0, common_1.Controller)('brokers/applications'),
    (0, swagger_1.ApiTags)('Broker API'),
    __param(0, (0, common_1.Inject)(repositories_1.APPLICATION_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], BrokerApplicationsListController);
exports.BrokerApplicationsListController = BrokerApplicationsListController;
//# sourceMappingURL=list-applications.controller.js.map