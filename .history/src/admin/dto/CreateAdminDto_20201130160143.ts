import { IsString } from "class-validator";

export class CreateAdminDto {
    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsString()
    phoneNumber: string;
}