import { Inject, Injectable, InternalServerErrorException } from '@nestjs/common';
import { ClientProxy, } from '@nestjs/microservices';
import { plainToClass } from 'class-transformer';
import { timeout } from 'rxjs/operators';
import { TIMEOUT } from './core-gateway.const';
import { IRequestResult } from './interfaces/IRequestResult';
import { cleanObject } from 'src/core/utils';

@Injectable()
export class CoreGatewayService {

	constructor(@Inject('CORE_GATEWAY') private client: ClientProxy) { }

	async request<T>(path: string, data: any = {}): Promise<IRequestResult<T>> {
		const pattern = {
			cmd: path
		}
		console.log(pattern, cleanObject(data));
		const result = await this.client.send(pattern, cleanObject(data))
			.pipe(timeout(TIMEOUT))
			.toPromise()
			.catch((err) => {
				console.log(err);
				throw new InternalServerErrorException();
			});
		return {
			toClass: (entity) => {
				return plainToClass<T, Object>(entity, result as Object) as T;
			},
			toClassList: (entity) => {
				return plainToClass<T, Object>(entity, result as Object[]) as T[];
			},
			toPlain: () => result
		}
	}
}
