import { ClientProxy } from '@nestjs/microservices';
import { IRequestResult } from './interfaces/IRequestResult';
export declare class CoreGatewayService {
    private client;
    constructor(client: ClientProxy);
    request<T>(path: string, data?: any): Promise<IRequestResult<T>>;
}
