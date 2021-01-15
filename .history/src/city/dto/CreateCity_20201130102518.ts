import { IsString, IsNumber } from "class-validator";

export class CreateCity {
    @IsString()
    name: string;

    @IsNumber()
    regionId: number;
}