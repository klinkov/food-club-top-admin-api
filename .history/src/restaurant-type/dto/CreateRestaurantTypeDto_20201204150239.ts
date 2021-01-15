import { IsString } from 'class-validator';

export class EditRestaurantTypeDto {
    @IsString()
    name: string;
}