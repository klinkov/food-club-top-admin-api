import { Controller, Post, Body, ParseIntPipe, Put, Param } from '@nestjs/common';
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
    async edit(@Param('id', ParseIntPipe) id: number, @Body() body: RestaurantTypeDto) {
        const editedType = (await this.coreGateway.request<RestaurantTypeDto>('restaurant-type-edit', {
            id,
            ...body
        })).toClass(RestaurantTypeDto);
        return editedType;
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

