import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { UsersModule } from '../user/user.module';
import { UsersService } from '../user/user.service';

@Module({
  imports: [
    UsersModule, // Import UsersModule to access user-related functionality
    PassportModule, // Enables authentication strategies in the module
    JwtModule.registerAsync({
      // Dynamically configure the JWT module
      useFactory: async () => ({
        secret: process.env.JWT_SECRET,
        signOptions: { expiresIn: '1h' },
      }),
    }),
  ],
  controllers: [AuthController], // Define the controller for handling authentication routes
  providers: [
    AuthService, // for handling authentication logic
    UsersService, // for handling user logic
    JwtStrategy, // for validating JWT tokens
    LocalStrategy, // for username-password authentication
  ],
  exports: [AuthService], // for use in other modules
})
export class AuthModule {}
