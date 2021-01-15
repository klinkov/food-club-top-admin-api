import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IJwt } from './interfaces/IJwt';

@Injectable()
export class AuthService {

    constructor(
        private jwtService: JwtService,
    ) { }

    generateShortTimeJWT(data: IJwt): string {
        return this.jwtService.sign(data, { expiresIn: '72h' });
    }
}


