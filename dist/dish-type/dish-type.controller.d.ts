import { CoreGatewayService } from 'src/core-gateway/core-gateway.service';
import { DishTypeDto } from './dto/DishTypeDto';
import { EditDishTypeDto } from './dto/EditDishTypeDto';
import { IDeleteResponse } from 'src/core/interfaces/IDeleteResponse';
export declare class DishTypeController {
    private coreGateway;
    constructor(coreGateway: CoreGatewayService);
    create(body: EditDishTypeDto): Promise<DishTypeDto>;
    edit(id: number, body: EditDishTypeDto): Promise<DishTypeDto>;
    list(): Promise<DishTypeDto[][]>;
    getOne(id: number): Promise<DishTypeDto>;
    delete(id: number): Promise<IDeleteResponse>;
}
