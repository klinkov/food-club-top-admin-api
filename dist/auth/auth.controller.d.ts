import { CoreGatewayService } from '../core-gateway/core-gateway.service';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/LoginDto';
import { ILoginResult } from './interfaces/ILoginResult';
import { AdminService } from '../admin/admin.service';
import { AdminDto } from '../admin/dto/AdminDto';
export declare class AuthController {
    private coreGateway;
    private authService;
    private adminService;
    constructor(coreGateway: CoreGatewayService, authService: AuthService, adminService: AdminService);
    login(body: LoginDto): Promise<ILoginResult>;
    auth(request: any): Promise<AdminDto>;
}
