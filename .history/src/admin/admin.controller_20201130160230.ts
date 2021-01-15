import { Controller, Post, Put, Param, Body, Get } from '@nestjs/common';
import { CoreGatewayService } from 'src/core-gateway/core-gateway.service';
import { CreateAdminDto } from './dto/CreateAdminDto';
import { AdminDto } from './dto/AdminDto';

@Controller('admin')
export class AdminController {
    constructor(private coreGateway: CoreGatewayService) { }

    @Post()
    async create(@Body() body: CreateAdminDto): Promise<AdminDto> {
        return (await this.coreGateway.request<AdminDto>('admin-create', body)).toClass(AdminDto);
    }

    @Put(':id')
    async edit(@Param('id', ParseIntPipe) id: number, @Body() body: EditManagerDto) {
        const editedCity = (await this.coreGateway.request<ManagerDto>('manager-edit', {
            id,
            ...body
        })).toClass(ManagerDto);
        return editedCity;
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number,) {
        const item = (await this.coreGateway
            .request<ManagerDto>('brand-one', { id }))
            .toClass(ManagerDto);
        return item;
    }

    @Get()
    async getList(@Query('brandId') brandId: number) {
        const list = (await this.coreGateway
            .request<ManagerDto[]>('manager-list', {
                brandId: Number(brandId)
            }))
            .toClassList(ManagerDto);
        return list;
    }
}
