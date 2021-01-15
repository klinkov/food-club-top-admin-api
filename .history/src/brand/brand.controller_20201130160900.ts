import { Controller, Get } from '@nestjs/common';
import { CoreGatewayService } from 'src/core-gateway/core-gateway.service';
import { BrandDt } from './dto/BrandDto';

@Controller('brand')
export class BrandController {

    constructor(private coreGatewayService: CoreGatewayService) { }

    @Get()
    async getList(): Promise<BrandDto[]> {
        return (await this.coreGatewayService.request<BrandDto>('brand-list'))
            .toClassList(BrandDto)
    }
}
