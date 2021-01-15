import { IsString } from 'class-validator';

export class CreateRestaurantTypeDto {
    @IsString()
    name: string;
}