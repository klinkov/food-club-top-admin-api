import { Controller, Get } from '@nestjs/common';
import { CoreGatewayService } from 'src/core-gateway/core-gateway.service';
import { BrandDto, BrandDto } from './dto/BrandDto';

@Controller('brand')
export class BrandController {

    constructor(private coreGatewayService: CoreGatewayService) { }

    @Get()
    async getList(): Promise<BrandDto[]> {
        return (await this.coreGatewayService.request('brand-list'))
            .toClassList(BrandDto)
    }
}
