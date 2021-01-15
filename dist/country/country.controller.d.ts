import { CoreGatewayService } from 'src/core-gateway/core-gateway.service';
import { CountryDto } from './dto/CountryDto';
export declare class CountryController {
    private coreGateway;
    constructor(coreGateway: CoreGatewayService);
    create(body: CountryDto): Promise<unknown>;
    edit(id: number, body: CountryDto): Promise<CountryDto>;
    list(): Promise<CountryDto[][]>;
}
