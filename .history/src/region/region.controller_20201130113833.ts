import { Controller, Post, ParseIntPipe, Put, Body } from '@nestjs/common';
import { CoreGatewayService } from '../core-gateway/core-gateway.service';
import { RegionDto } from './dto/RegionDto';

@Controller('region')
export class RegionController {
    constructor(private coreGateway: CoreGatewayService) { }

    @Post()
    async create(@Body() body: RegionDto) {
        const createdCity = (await this.coreGateway.request('create-city', body)).toClass(CityDto);
        return createdCity;
    }

    @Put(':id')
    async edit(@Param('id', ParseIntPipe) id: number, @Body() body: CityDto) {
        const editedCity = (await this.coreGateway.request<CityDto>('edit-city', {
            id,
            ...body
        })).toClass(CityDto);
        return editedCity;
    }

    @Get()
    async list() {
        const list = (await this.coreGateway.request<CityDto[]>('city-list')).toClassList(CityDto);
        return list;
    }
}
