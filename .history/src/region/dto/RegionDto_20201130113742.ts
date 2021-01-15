import { IsString, IsNumber } from "class-validator";

export class RegionDto {
    id: number;

    @IsString()
    name: string;

    @IsNumber()
    countryId: number;
}