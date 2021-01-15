import { Controller, Post, Put, Get, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { CoreGatewayService } from 'src/core-gateway/core-gateway.service';
import { DishTypeDto } from './dto/DishTypeDto';
import { EditDishTypeDto } from './dto/EditDishTypeDto';

@Controller('dish-type')
export class DishTypeController {
    constructor(private coreGateway: CoreGatewayService) { }

    @Post()
    async create(@Body() body: EditDishTypeDto): Promise<DishTypeDto> {
        const createdType = (await this.coreGateway.request<DishTypeDto>('dish-type-create', body)).toClass(DishTypeDto);
        return createdType;
    }

    @Put(':id')
    async edit(@Param('id', ParseIntPipe) id: number, @Body() body: DishTypeDto) {
        const editedType = (await this.coreGateway.request<DishTypeDto>('dish-type-edit', {
            id,
            ...body
        })).toClass(RestaurantTypeDto);
        return editedType;
    }

    @Get()
    async list() {
        const list = (await this.coreGateway
            .request<RestaurantTypeDto[]>('restaurant-type-list',))
            .toClassList(RestaurantTypeDto);
        return list;
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number): Promise<RestaurantTypeDto> {
        const item = (await this.coreGateway
            .request<RestaurantTypeDto>('restaurant-type-one', { id }))
            .toClass(RestaurantTypeDto);
        return item;
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number): Promise<IDeleteResponse> {
        await this.coreGateway.request('restaurant-type-delete', {
            id,
        });
        return {
            isDelete: true
        };
    }
}
