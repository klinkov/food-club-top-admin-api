import { IsString, IsNumber } from "class-validator";

export class CreateCityDto {
    @IsString()
    name: string;

    @IsNumber()
    regionId: number;
}