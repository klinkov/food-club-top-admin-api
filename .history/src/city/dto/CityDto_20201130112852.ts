import { IsString, IsNumber } from "class-validator";
import { ICity } from "../interfaces/ICity";
import { Exclude } from "class-transformer";


export class CityDto implements ICity{
    @Exclude()
    id: number;

    @IsString()
    name: string;

    @IsNumber()
    regionId: number;
}