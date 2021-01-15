import { IsOptional, IsNumber, IsString, IsEmail } from "class-validator";

export class CreateManagerDto {
    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsString()
    phoneNumber: string;
}