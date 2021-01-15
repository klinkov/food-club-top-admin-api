import { Controller, Post, Body } from '@nestjs/common';
import { CoreGatewayService } from 'src/core-gateway/core-gateway.service';
import { CreateManagerDto, CreateManagerDto } from './dto/CreateManagerDto';

@Controller('manager')
export class ManagerController {
    constructor(private coreGateway: CoreGatewayService) { }

    @Post()
    async create(@Body() body: CreateManagerDto): Promise<CreateManagerDto> {
        const createdManager = (await this.coreGateway.request<CreateManagerDto>('manager-create', body)).toClass(CreateManagerDto);
        return createdManager;
    }

    @Put(':id')
    async edit(@Param('id', ParseIntPipe) id: number, @Body() body: CityDto) {
        const editedCity = (await this.coreGateway.request<CityDto>('edit-city', {
            id,
            ...body
        })).toClass(CityDto);
        return editedCity;
    }

    @Get()
    async list(@Query('regionId') regionId: number) {
        const list = (await this.coreGateway
            .request<CityDto[]>('city-list', {
                regionId: Number(regionId)
            }))
            .toClassList(CityDto);
        return list;
    }
}
