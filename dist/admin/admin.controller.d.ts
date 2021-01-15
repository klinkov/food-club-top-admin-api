import { CoreGatewayService } from 'src/core-gateway/core-gateway.service';
import { CreateAdminDto } from './dto/CreateAdminDto';
import { AdminDto } from './dto/AdminDto';
import { EditAdminDto } from './dto/EditAdminDto';
export declare class AdminController {
    private coreGateway;
    constructor(coreGateway: CoreGatewayService);
    create(body: CreateAdminDto): Promise<AdminDto>;
    edit(id: number, body: EditAdminDto): Promise<AdminDto>;
    getOne(id: number): Promise<AdminDto>;
    getList(): Promise<AdminDto[]>;
    delete(id: number): Promise<void>;
}
