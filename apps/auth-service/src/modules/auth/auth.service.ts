import { Injectable, ConflictException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  // Signup logic
  async signup(username: string, password: string) {
    // Check if username is already taken
    const existingUser = await this.usersService.findOne(username);
    if (existingUser) {
      throw new ConflictException('Username is already taken');
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save the user
    return this.usersService.create({ username, password: hashedPassword });
  }

  // Login logic
  async login(user: any) {
    const payload = { sub: user.id, username: user.username };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  // Validate user credentials for LocalStrategy
  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user; // Exclude password from returned data
      return result;
    }
    return null; // Return null if validation fails
  }
}
