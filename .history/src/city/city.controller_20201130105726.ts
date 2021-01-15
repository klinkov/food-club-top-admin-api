import { Controller, Post, Put, Get, Body, Param, ParseIntPipe } from '@nestjs/common';
import { CoreGatewayService } from '../core-gateway/core-gateway.service';
import { CityDto } from './dto/CityDto';
import { ICity } from './interfaces/ICity';

@Controller('city')
export class CityController {

    constructor(private coreGateway: CoreGatewayService) { }

    @Post()
    async create(@Body() body: CityDto) {
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

    @Get(':id')
    async list() {
        const editedCity = (await this.coreGateway.request('city-list')).toClass(CityDto);
        return editedCity;
    }
}
