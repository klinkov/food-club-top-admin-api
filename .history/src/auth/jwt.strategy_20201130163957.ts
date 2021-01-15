import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { JWT_SECRET } from './auth.const';
import { IJwt } from './auth.interfaces';
import { ROLE } from 'src/shared/constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: JWT_SECRET,
        });
    }

    validate(payload: IJwt): IJwt {
        const result: any = {
            id: payload.id,
            email: payload?.email,
        };
        return result;
    }
}
