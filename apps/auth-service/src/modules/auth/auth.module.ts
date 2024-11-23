import { Module } from '@nestjs/common';
import { AuthService } from './auth.service'; // Service for handling authentication logic
import { AuthController } from './auth.controller'; // Controller for authentication endpoints
import { JwtModule } from '@nestjs/jwt'; // Module for working with JSON Web Tokens (JWT)
import { PassportModule } from '@nestjs/passport'; // Module for managing authentication strategies
import { JwtStrategy } from './strategies/jwt.strategy'; // JWT-based authentication strategy
import { LocalStrategy } from './strategies/local.strategy'; // Local (username-password) authentication strategy
import { UsersModule } from '../user/user.module'; // UsersModule for user-related operations

@Module({
  imports: [
    PassportModule, // Enables authentication strategies in the module
    JwtModule.registerAsync({
      // Dynamically configure the JWT module
      useFactory: async () => ({
        secret: process.env.JWT_SECRET, // Use secret from environment variables for signing tokens
        signOptions: { expiresIn: '1h' }, // Set token expiration to 1 hour
      }),
    }),
    UsersModule, // Import UsersModule to access user-related functionality
  ],
  controllers: [AuthController], // Define the controller for handling authentication routes
  providers: [
    AuthService, // Provide AuthService for handling authentication logic
    JwtStrategy, // Provide JwtStrategy for validating JWT tokens
    LocalStrategy, // Provide LocalStrategy for username-password authentication
  ],
  exports: [AuthService], // Export AuthService for use in other modules
})
export class AuthModule {}
