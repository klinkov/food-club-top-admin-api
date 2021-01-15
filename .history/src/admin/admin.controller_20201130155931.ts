import { Controller, Post, Put, Param, Body, Get, Query } from '@nestjs/common';

@Controller('admin')
export class AdminController {
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
