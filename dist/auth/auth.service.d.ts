import { JwtService } from '@nestjs/jwt';
import { IJwt } from './interfaces/IJwt';
export declare class AuthService {
    private jwtService;
    constructor(jwtService: JwtService);
    generateJWT(data: IJwt): string;
}
