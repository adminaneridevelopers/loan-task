import { Application } from 'src/models/applications/application.entity';
import { ApplicationDto, BrokerApplicationPostResponseDto, BrokerApplicationsListRequestDto, BrokerApplicationsListResponseDto } from './list-applications.dto';
import { BrokerDto } from 'src/models/brokers/broker.dto';
export declare class BrokerApplicationsListController {
    private applicationEntity;
    constructor(applicationEntity: typeof Application);
    find(user: BrokerDto, query: BrokerApplicationsListRequestDto): Promise<BrokerApplicationsListResponseDto>;
    getAverageLoanAmount(): Promise<{
        success: boolean;
        averageLoanAmount: number;
    }>;
    post(user: BrokerDto, body: ApplicationDto, request: Request): Promise<BrokerApplicationPostResponseDto>;
}
