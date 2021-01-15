import { CoreGatewayService } from '../core-gateway/core-gateway.service';
import { CityDto } from './dto/CityDto';
export declare class CityController {
    private coreGateway;
    constructor(coreGateway: CoreGatewayService);
    create(body: CityDto): Promise<unknown>;
    edit(id: number, body: CityDto): Promise<CityDto>;
    list(regionId: number): Promise<CityDto[][]>;
}
