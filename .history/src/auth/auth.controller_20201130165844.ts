import { Controller, Post, Body, ForbiddenException } from '@nestjs/common';
import { CoreGatewayService } from 'src/core-gateway/core-gateway.service';
import { LoginDto } from './dto/LoginDto';
import { IValidationAdminResult } from './interfaces/IValidationAdminResult';

@Controller('auth')
export class AuthController {
    constructor(private coreGateway: CoreGatewayService) { }

    @Post('login')
    async login(@Body() body: LoginDto): Promise<ILoginResult> {
        const { isValid, entity } = (await this.coreGateway
            .request<IValidationAdminResult>('admin-validate', body))
            .toPlain();

        console.log(entity);
        if (!isValid) {
            throw new ForbiddenException();
        }

        return {
            accessToken: this.authService.getToken({
                id: entity.id,
                email: entity.email
            })
        };
    }
}
