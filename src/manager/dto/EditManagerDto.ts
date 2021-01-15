import { IsOptional, IsNumber, IsString, IsEmail } from "class-validator";

export class EditManagerDto {
    @IsNumber()
    id: number;

    @IsOptional()
    @IsString()
    firstName: string;

    @IsOptional()
    @IsString()
    lastName: string;

    @IsOptional()
    @IsString()
    phoneNumber: string;

    @IsOptional()
    @IsEmail()
    email: string;
}