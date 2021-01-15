import { Injectable } from '@nestjs/common';
import { CoreGatewayService } from 'src/core-gateway/core-gateway.service';
import { AdminDto } from './dto/AdminDto';

@Injectable()
export class AdminService {
    constructor(private coreGateway: CoreGatewayService) { }

    async getOne(id: number): Promise<AdminDto> {
        return (await this.coreGateway
            .request<AdminDto>('admin-one', { id }))
            .toClass(AdminDto);
    }
}
