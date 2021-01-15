import { Controller, Param, Post, Put, Get, Body, ParseIntPipe } from '@nestjs/common';
import { CoreGatewayService } from 'src/core-gateway/core-gateway.service';
import { CountryDto } from './dto/CountryDto';

@Controller('country')
export class CountryController {
    constructor(private coreGateway: CoreGatewayService) { }

    @Post()
    async create(@Body() body: CountryDto) {
        const createdCountry = (await this.coreGateway.request('create-country', body)).toClass(CountryDto);
        return createdCountry;
    }

    @Put(':id')
    async edit(@Param('id', ParseIntPipe) id: number, @Body() body: CountryDto) {
        const editedCountry = (await this.coreGateway.request<CountryDto>('edit-country', {
            id,
            ...body
        })).toClass(CountryDto);
        return editedCountry;
    }

    @Get()
    async list() {
        const list = (await this.coreGateway.request<CountryDto[]>('country-list')).toClassList(CountryDto);
        return list;
    }
}
