import { Controller, Param, Post, ParseIntPipe, Put, Body, Get, Query } from '@nestjs/common';
import { CoreGatewayService } from '../core-gateway/core-gateway.service';
import { RegionDto } from './dto/RegionDto';

@Controller('region')
export class RegionController {
    constructor(private coreGateway: CoreGatewayService) { }

    @Post()
    async create(@Body() body: RegionDto): Promise<RegionDto> {
        return (await this.coreGateway.request<RegionDto>('create-region', body)).toClass(RegionDto);
    }

    @Put(':id')
    async edit(@Param('id', ParseIntPipe) id: number, @Body() body: RegionDto): Promise<RegionDto> {
        return (await this.coreGateway.request<RegionDto>('edit-region', {
            id,
            ...body
        })).toClass(RegionDto);
    }

    @Get()
    async list(@Query('countryId') countryId: number): Promise<RegionDto[]> {
        const data =  (await this.coreGateway
            .request<RegionDto>('region-list', {
                countryId: Number(countryId)
            }))
            // .toPlain();
            .toClassList(RegionDto);
        return data;
    }
}
