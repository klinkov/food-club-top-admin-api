import { CoreGatewayService } from 'src/core-gateway/core-gateway.service';
import { AdminDto } from './dto/AdminDto';
export declare class AdminService {
    private coreGateway;
    constructor(coreGateway: CoreGatewayService);
    getOne(id: number): Promise<AdminDto>;
}
