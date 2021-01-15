import { Injectable } from '@nestjs/common';
import { CoreGatewayService } from 'src/core-gateway/core-gateway.service';

@Injectable()
export class AdminService {
    constructor(private coreGateway: CoreGatewayService) { }

    getOne(id: number){
        
    }
}
