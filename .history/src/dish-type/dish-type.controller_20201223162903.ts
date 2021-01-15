import { Controller, Post, Put, Get, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { CoreGatewayService } from 'src/core-gateway/core-gateway.service';
import { DishTypeDto } from './dto/DishTypeDto';
import { EditDishTypeDto } from './dto/EditDishTypeDto';
import { IDeleteResponse } from 'src/core/interfaces/IDeleteResponse';

@Controller('dish-type')
export class DishTypeController {
    constructor(private coreGateway: CoreGatewayService) { }

    @Post()
    async create(@Body() body: EditDishTypeDto): Promise<DishTypeDto> {
        const createdType = (await this.coreGateway.request<DishTypeDto>('dish-type-create', body)).toClass(DishTypeDto);
        return createdType;
    }

    @Put(':id')
    async edit(@Param('id', ParseIntPipe) id: number, @Body() body: EditDishTypeDto) {
        const editedType = (await this.coreGateway.request<DishTypeDto>('dish-type-edit', {
            id,
            ...body
        })).toClass(DishTypeDto);
        return editedType;
    }

    @Get()
    async list() {
        const list = (await this.coreGateway
            .request<DishTypeDto[]>('dish-type-list',))
            .toClassList(DishTypeDto);
        return list;
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number): Promise<DishTypeDto> {
        const item = (await this.coreGateway
            .request<DishTypeDto>('dish-type-one', { id }))
            .toClass(DishTypeDto);
        return item;
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number): Promise<IDeleteResponse> {
        await this.coreGateway.request('dish-type-delete', {
            id,
        });
        return {
            isDelete: true
        };
    }
}
