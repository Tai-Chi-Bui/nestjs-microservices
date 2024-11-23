import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';

/**
 * LocalStrategy handles username and password validation.
 */
@Injectable()
export class LocalAuthGuard extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      usernameField: 'username', // Field in the request body for the username
      passwordField: 'password', // Field in the request body for the password
    });
  }

  async validate(username: string, password: string): Promise<any> {
    // Validate the user using AuthService
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException('Invalid username or password');
    }
    return user; // Attach the validated user to req.user
  }
}
