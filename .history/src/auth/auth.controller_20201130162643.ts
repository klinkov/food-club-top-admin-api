import { Controller, Post, Body } from '@nestjs/common';
import { CoreGatewayService } from 'src/core-gateway/core-gateway.service';
import { LoginDto } from './dto/LoginDto';
import { IValidationAdminResult } from 'src/admin/interfaces/IValidationAdminResult';

@Controller('auth')
export class AuthController {
    constructor(private coreGateway: CoreGatewayService) { }

    @Post('login')
    async login(@Body() body: LoginDto) {
        const { isValid } = (await this.coreGateway.request<IValidationAdminResult>('admin-validate', body)).toPlain();
    }
}
