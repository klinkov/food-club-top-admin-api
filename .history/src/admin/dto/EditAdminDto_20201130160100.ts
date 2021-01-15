import { IsOptional, IsString } from "class-validator";

export class AdminDto {
    firstName: string;
    lastName: string;
    phoneNumber: string;
}