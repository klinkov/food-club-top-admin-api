import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy, } from '@nestjs/microservices';

@Injectable()
export class CoreGatewayService {

    constructor(@Inject('CORE_GATEWAY') private client: ClientProxy) { }

    request(path: string, data: any){
        
    }
}
