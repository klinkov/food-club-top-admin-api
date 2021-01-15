import { Inject, Injectable, InternalServerErrorException } from '@nestjs/common';
import { ClientProxy, } from '@nestjs/microservices';
import { plainToClass } from 'class-transformer';
import { timeout } from 'rxjs/operators';
import { TIMEOUT } from './core-gateway.const';

@Injectable()
export class CoreGatewayService {

	constructor(@Inject('CORE_GATEWAY') private client: ClientProxy) { }

	async request(path: string, data: any = {}) {
		const pattern = {
			cmd: path
		}
		const result = await this.client.send(pattern, data)
			.pipe(timeout(TIMEOUT))
			.toPromise()
			.catch((err) => {
				throw new InternalServerErrorException();
			});
		return  {
			toClass: (entity) => plainToClass(entity, result),
			toPlain: () => result
		}
	}
}
