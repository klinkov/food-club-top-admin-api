import { Controller, Post, Put, Get } from '@nestjs/common';
import { CoreGatewayService } from 'src/core-gateway/core-gateway.service';
import { CountryDto } from './dto/CountryDto';

@Controller('country')
export class CountryController {
    constructor(private coreGateway: CoreGatewayService) { }

    @Post()
    async create(@Body() body: Countr) {
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
