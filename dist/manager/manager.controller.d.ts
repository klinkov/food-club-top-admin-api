import { CoreGatewayService } from 'src/core-gateway/core-gateway.service';
import { CreateManagerDto } from './dto/CreateManagerDto';
import { ManagerDto } from './dto/ManagerDto';
import { EditManagerDto } from './dto/EditManagerDto';
export declare class ManagerController {
    private coreGateway;
    constructor(coreGateway: CoreGatewayService);
    create(body: CreateManagerDto): Promise<ManagerDto>;
    edit(id: number, body: EditManagerDto): Promise<ManagerDto>;
    getOne(id: number): Promise<ManagerDto>;
    getList(brandId: number): Promise<ManagerDto[][]>;
}
