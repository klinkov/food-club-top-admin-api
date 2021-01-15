import { IsString } from 'class-validator';

export class RestaurantTypeDto {
    @IsString()
    name: string;
}