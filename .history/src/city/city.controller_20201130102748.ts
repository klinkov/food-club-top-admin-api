import { Controller, Post, Put, Body } from '@nestjs/common';
import { CoreGatewayService } from '../core-gateway/core-gateway.service';
import { CityDto } from './dto/City';
import { CreateCityDto } from './dto/CreateCity';

@Controller('city')
export class CityController {

    constructor(private coreGateway: CoreGatewayService) { }

    @Post()
    async create(@Body() body: CreateCityDto) {
        const createdCity = (await this.coreGateway.request('create-city', body)).toClass(CityDto);
        return createdCity;
    }
}
