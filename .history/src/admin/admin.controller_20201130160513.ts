import { Controller, Post, Put, Param, Body, Get, ParseIntPipe, Query } from '@nestjs/common';
import { CoreGatewayService } from 'src/core-gateway/core-gateway.service';
import { CreateAdminDto } from './dto/CreateAdminDto';
import { AdminDto } from './dto/AdminDto';
import { EditAdminDto } from './dto/EditAdminDto';

@Controller('admin')
export class AdminController {
    constructor(private coreGateway: CoreGatewayService) { }

    @Post()
    async create(@Body() body: CreateAdminDto): Promise<AdminDto> {
        return (await this.coreGateway.request<AdminDto>('admin-create', body)).toClass(AdminDto);
    }

    @Put(':id')
    async edit(@Param('id', ParseIntPipe) id: number, @Body() body: EditAdminDto): Promise<AdminDto> {
        return (await this.coreGateway.request<AdminDto>('admin-edit', {
            id,
            ...body
        })).toClass(AdminDto);
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number): Promise<AdminDto> {
        return (await this.coreGateway
            .request<AdminDto>('admin-one', { id }))
            .toClass(AdminDto);
    }

    @Get()
    async getList(): Promise<AdminDto[]> {
        return (await this.coreGateway
            .request<AdminDto>('manager-list'))
            .toClassList(AdminDto);
    }
}
