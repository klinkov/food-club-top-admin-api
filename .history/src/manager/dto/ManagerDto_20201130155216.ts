import { IsOptional, IsNumber, IsString, IsEmail } from "class-validator";

export class ManagerDto {
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
}