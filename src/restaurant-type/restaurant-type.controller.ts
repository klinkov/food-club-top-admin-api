import { Controller, Post, Body, ParseIntPipe, Put, Param, Get, Delete } from '@nestjs/common';
import { CoreGatewayService } from 'src/core-gateway/core-gateway.service';
import { RestaurantTypeDto } from './dto/RestaurantTypeDto';
import { IDeleteResponse } from 'src/core/interfaces/IDeleteResponse';

@Controller('place-type')
export class RestaurantTypeController {
    constructor(private coreGateway: CoreGatewayService) { }

    @Post()
    async create(@Body() body: RestaurantTypeDto) {
        const createdType = (await this.coreGateway.request('place-type-create', body)).toClass(RestaurantTypeDto);
        return createdType;
    }

    @Put(':id')
    async edit(@Param('id', ParseIntPipe) id: number, @Body() body: RestaurantTypeDto) {
        const editedType = (await this.coreGateway.request<RestaurantTypeDto>('place-type-edit', {
            id,
            ...body
        })).toClass(RestaurantTypeDto);
        return editedType;
    }

    @Get()
    async list() {
        const list = (await this.coreGateway
            .request<RestaurantTypeDto[]>('place-type-list',))
            .toClassList(RestaurantTypeDto);
        return list;
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number): Promise<RestaurantTypeDto> {
        const item = (await this.coreGateway
            .request<RestaurantTypeDto>('place-type-one', { id }))
            .toClass(RestaurantTypeDto);
        return item;
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number): Promise<IDeleteResponse> {
        await this.coreGateway.request('place-type-delete', {
            id,
        });
        return {
            isDelete: true
        };
    }
}

