import { IsOptional, IsString, IS_ALPHA } from "class-validator";

export class EditAdminDto {
    @IsOptional()
    @IsString()
    firstName: string;

    @IsOptional()
    @IsString()
    lastName: string;

    @IsOptional()
    @IS_ALPHA()
    email: string;
}