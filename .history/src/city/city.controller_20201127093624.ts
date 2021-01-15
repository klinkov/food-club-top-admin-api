import { Controller, Post, Body } from '@nestjs/common';
import { CoreGatewayService } from '../core-gateway/core-gateway.service';

@Controller('city')
export class CityController {

    constructor(private coreGateway: CoreGatewayService) { }

    @Post()
    async create(@Body() body) {
        const createdCity = await this.coreGateway.request('create-city', body);

        console.log(createdCity);
    }
}
