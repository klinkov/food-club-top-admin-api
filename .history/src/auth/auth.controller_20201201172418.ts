import {
    Controller, Post, Body, ForbiddenException,
    Get, UseGuards, Request
} from '@nestjs/common';
import { CoreGatewayService } from '../core-gateway/core-gateway.service';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/LoginDto';
import { ILoginResult } from './interfaces/ILoginResult';
import { IValidationAdminResult } from './interfaces/IValidationAdminResult';
import { JwtAuthGuard } from './../core/guards/jwt-auth-guard';
import { AdminService } from '../admin/admin.service';
import { AdminDto } from '../admin/dto/AdminDto';


@Controller('auth')
export class AuthController {
    constructor(
        private coreGateway: CoreGatewayService,
        private authService: AuthService,
        private adminService: AdminService) { }

    @Post('login')
    async login(@Body() body: LoginDto): Promise<ILoginResult> {
        const { isValid, entity } = (await this.coreGateway
            .request<IValidationAdminResult>('admin-validate', body))
            .toPlain();

        if (!isValid) {
            throw new ForbiddenException();
        }

        return {
            accessToken: this.authService.generateJWT({
                id: entity.id,
                email: entity.email
            })
        };
    }

    @Get()
    @UseGuards(JwtAuthGuard)
    async auth(@Request() request): Promise<AdminDto> {
        console.log(request.user);
        return this.adminService.getOne(request.user.id);
    }
}
