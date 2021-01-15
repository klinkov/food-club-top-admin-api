import { IsOptional, IsNumber, IsString, IsEmail } from "class-validator";

export class EditManagerDto {
    @IsOptional()
    @IsString()
    firstName: string;

    @IsOptional()
    @IsString()
    lastName: string;

    @IsOptional()
    @IsString()
    phoneNumber: string;
}