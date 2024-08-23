import { Broker } from 'src/models/brokers/broker.entity';
import { SuccessResponseDto } from 'src/common/responses';
declare const BrokerCurrentUserDto_base: import("@nestjs/common").Type<Pick<Broker, "id" | "email" | "firstName" | "lastName" | "mobilePhoneNumber" | "createdAt">>;
export declare class BrokerCurrentUserDto extends BrokerCurrentUserDto_base {
}
export declare class BrokerCurrentUserResponseDto extends SuccessResponseDto {
    readonly broker: BrokerCurrentUserDto;
}
export {};
