import { IsString, IsEmail } from "class-validator";

export class CreateAdminDto {
    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsEmail()
    email: string;
}