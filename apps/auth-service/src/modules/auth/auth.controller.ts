import { Controller, Post, UseGuards, Request, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // Signup endpoint
  @Post('signup')
  async signup(@Body() body: { username: string; password: string }) {
    return this.authService.signup(body.username, body.password);
  } 

  // Login endpoint
  @UseGuards(LocalAuthGuard) // Validates username and password
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user); // req.user populated by LocalStrategy
  }
}
