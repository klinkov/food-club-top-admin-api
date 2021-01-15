import { IsString, IsNumber } from "class-validator";


export class CityDto {
    id: number;

    @IsString()
    name: string;

    @IsNumber()
    regionId: number;
}