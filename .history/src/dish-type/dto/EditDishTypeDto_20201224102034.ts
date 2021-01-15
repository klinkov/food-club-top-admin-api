import { IsString, IsNumber, IsOptional } from 'class-validator';

export class EditDishTypeDto {
    @IsString()
    name: string;

    @IsOptional()
    @IsNumber()
    brandId: number;
}