import { CoreGatewayService } from 'src/core-gateway/core-gateway.service';
import { RestaurantTypeDto } from './dto/RestaurantTypeDto';
import { IDeleteResponse } from 'src/core/interfaces/IDeleteResponse';
export declare class RestaurantTypeController {
    private coreGateway;
    constructor(coreGateway: CoreGatewayService);
    create(body: RestaurantTypeDto): Promise<unknown>;
    edit(id: number, body: RestaurantTypeDto): Promise<RestaurantTypeDto>;
    list(): Promise<RestaurantTypeDto[][]>;
    getOne(id: number): Promise<RestaurantTypeDto>;
    delete(id: number): Promise<IDeleteResponse>;
}
