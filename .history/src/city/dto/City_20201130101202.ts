import { Exclude } from "class-transformer";

export class City {
    @Exclude()
    id: number;

    name: string;
}