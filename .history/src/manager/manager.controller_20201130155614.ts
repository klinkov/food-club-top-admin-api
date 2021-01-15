import { Controller, Post, Body, Put, Param, ParseIntPipe, Get, Query } from '@nestjs/common';
import { CoreGatewayService } from 'src/core-gateway/core-gateway.service';
import { CreateManagerDto } from './dto/CreateManagerDto';
import { ManagerDto } from './dto/ManagerDto';
import { EditManagerDto } from './dto/EditManagerDto';

@Controller('manager')
export class ManagerController {
    constructor(private coreGateway: CoreGatewayService) { }

    @Post()
    async create(@Body() body: CreateManagerDto): Promise<ManagerDto> {
        const createdManager = (await this.coreGateway.request<ManagerDto>('manager-create', body)).toClass(ManagerDto);
        return createdManager;
    }

    @Put(':id')
    async edit(@Param('id', ParseIntPipe) id: number, @Body() body: EditManagerDto) {
        const editedCity = (await this.coreGateway.request<ManagerDto>('manager-edit', {
            id,
            ...body
        })).toClass(ManagerDto);
        return editedCity;
    }

    @Get()
    async list(@Query('brandId') brandId: number) {
        const list = (await this.coreGateway
            .request<ManagerDto[]>('manager-list', {
                brandId: Number(brandId)
            }))
            .toClassList(ManagerDto);
        return list;
    }
}
