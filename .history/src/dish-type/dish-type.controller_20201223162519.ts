import { Controller, Post, Put, Get, Delete } from '@nestjs/common';

@Controller('dish-type')
export class DishTypeController {
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
