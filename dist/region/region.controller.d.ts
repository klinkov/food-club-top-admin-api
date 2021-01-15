import { CoreGatewayService } from '../core-gateway/core-gateway.service';
import { RegionDto } from './dto/RegionDto';
export declare class RegionController {
    private coreGateway;
    constructor(coreGateway: CoreGatewayService);
    create(body: RegionDto): Promise<RegionDto>;
    edit(id: number, body: RegionDto): Promise<RegionDto>;
    list(countryId: number): Promise<RegionDto[]>;
}
