import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy, } from '@nestjs/microservices';
import { timeout } from 'rxjs/operators';
import { TIMEOUT } from './core-gateway.const';

@Injectable()
export class CoreGatewayService {

    constructor(@Inject('CORE_GATEWAY') private client: ClientProxy) { }

    request(path: string, data: any){
        const pattern = {
			cmd: path
		}
		return this.client.send(pattern, data)
			.pipe((TIMEOUT))
			.toPromise()
			.catch((err) => {
				console.log(err);
				return { result: false };
			});
    }
}
