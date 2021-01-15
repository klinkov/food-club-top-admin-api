import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

    constructor(
        private jwtService: JwtService,
    ) { }

    generateShortTimeJWT(data: IJwt): string {
        return this.jwtService.sign(data, { expiresIn: '1h' });
    }
}


