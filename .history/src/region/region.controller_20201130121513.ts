import { Controller, Param, Post, ParseIntPipe, Put, Body, Get, Query } from '@nestjs/common';
import { CoreGatewayService } from '../core-gateway/core-gateway.service';
import { RegionDto } from './dto/RegionDto';

@Controller('region')
export class RegionController {
    constructor(private coreGateway: CoreGatewayService) { }

    @Post()
    async create(@Body() body: RegionDto) {
        const createdRegion = (await this.coreGateway.request('create-region', body)).toClass(RegionDto);
        return createdRegion;
    }

    @Put(':id')
    async edit(@Param('id', ParseIntPipe) id: number, @Body() body: RegionDto) {
        const editedRegion = (await this.coreGateway.request<RegionDto>('edit-region', {
            id,
            ...body
        })).toClass(RegionDto);
        return editedRegion;
    }

    @Get()
    async list(@Query('countryId', ParseIntPipe) countryId?: number) {
        const list = (await this.coreGateway.request<RegionDto[]>('region-list', { countryId })).toClassList(RegionDto);
        return list;
    }
}
