import { Controller, Post, Body } from '@nestjs/common';
import { CoreGatewayService } from 'src/core-gateway/core-gateway.service';
import { EditRestaurantTypeDto } from './dto/CreateRestaurantTypeDto';

@Controller('restaurant-type')
export class RestaurantTypeController {
    constructor(private coreGateway: CoreGatewayService) { }

    @Post()
    async create(@Body() body: EditRestaurantTypeDto) {
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
    async list(@Query('regionId') regionId: number) {
        const list = (await this.coreGateway
            .request<CityDto[]>('city-list', {
                regionId: Number(regionId)
            }))
            .toClassList(CityDto);
        return list;
    }
}

