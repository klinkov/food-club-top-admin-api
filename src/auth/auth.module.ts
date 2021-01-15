import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JWT_SECRET } from './auth.const';
import { AdminModule } from 'src/admin/admin.module';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    AdminModule,
    JwtModule.register({
      secret: JWT_SECRET,
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy]
})
export class AuthModule { }
