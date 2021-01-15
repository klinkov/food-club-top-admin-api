import { IsString, IsNumber } from "class-validator";
import { ICity } from "../interfaces/ICity";


export class CityDto implements ICity{
    id: number;

    @IsString()
    name: string;

    @IsNumber()
    regionId: number;
}