import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

// Marks this class as a provider for dependency injection
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    // Call the parent class constructor and configure the JWT strategy
    super({
      // Extract JWT from the 'Authorization' header in the format 'Bearer <token>'
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),

      // Reject tokens that have expired (do not ignore expiration)
      ignoreExpiration: false,

      // Secret key used to validate the token's signature
      // Securely load this value from environment variables
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  /**
   * The `validate` method is called automatically when a token is successfully verified.
   * It allows custom validation logic and attaches the returned value to `req.user`.
   *
   * @param payload - The decoded JWT payload
   * @returns A user object containing essential user information
   */
  async validate(payload: any) {
    // Extract and return user details from the JWT payload
    // 'sub' is typically the user ID, and 'username' is the user's name
    return { userId: payload.sub, username: payload.username };
  }
}
