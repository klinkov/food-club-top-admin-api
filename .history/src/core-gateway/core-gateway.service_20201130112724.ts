import { Inject, Injectable, InternalServerErrorException } from '@nestjs/common';
import { ClientProxy, } from '@nestjs/microservices';
import { plainToClass } from 'class-transformer';
import { timeout } from 'rxjs/operators';
import { TIMEOUT } from './core-gateway.const';
import { IRequestResult } from './interfaces/IRequestResult';

@Injectable()
export class CoreGatewayService {

	constructor(@Inject('CORE_GATEWAY') private client: ClientProxy) { }

	async request<T>(path: string, data: any = {}): Promise<IRequestResult<T>> {
		const pattern = {
			cmd: path
		}
		const result = await this.client.send(pattern, data)
			.pipe(timeout(TIMEOUT))
			.toPromise()
			.catch((err) => {
				throw new InternalServerErrorException();
			});
		return {
			toClass: (entity) => {
				return plainToClass(entity, result as Object) as T;
			},
			toClassList(entity) => {
				return plainToClass(entity, result as Object[]) as T[];
			},
			toPlain: () => result
		}
	}
}
