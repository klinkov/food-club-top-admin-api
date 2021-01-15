import { IsString } from 'class-validator';

export class EditDishTypeDto {
    @IsString()
    name: string;
}