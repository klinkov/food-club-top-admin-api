import { IsString } from 'class-validator';

export class DishTypeDto {
    @IsString()
    name: string;
}