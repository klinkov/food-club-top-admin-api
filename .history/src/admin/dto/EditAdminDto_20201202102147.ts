import { IsOptional, IsString, IsEmail } from "class-validator";

export class EditAdminDto {
    @IsOptional()
    @IsString()
    firstName: string;

    @IsOptional()
    @IsString()
    lastName: string;

    @IsOptional()
    @IsEmail()
    email: string;
}