import { Controller, Post, Body, ParseIntPipe, Put } from '@nestjs/common';
import { CoreGatewayService } from 'src/core-gateway/core-gateway.service';
import { RestaurantTypeDto } from './dto/RestaurantTypeDto';

@Controller('restaurant-type')
export class RestaurantTypeController {
    constructor(private coreGateway: CoreGatewayService) { }

    @Post()
    async create(@Body() body: RestaurantTypeDto) {
        const createdType = (await this.coreGateway.request('restaurant-type-create', body)).toClass(RestaurantTypeDto);
        return createdType;
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
    async list(@Query('regionId') regionId: number) {
        const list = (await this.coreGateway
            .request<CityDto[]>('city-list', {
                regionId: Number(regionId)
            }))
            .toClassList(CityDto);
        return list;
    }
}

