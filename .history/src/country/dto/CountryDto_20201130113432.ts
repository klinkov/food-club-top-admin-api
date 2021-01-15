import { IsString } from "class-validator";

export class CountryDto {
    id: number;

    @IsString()
    name: string;
}