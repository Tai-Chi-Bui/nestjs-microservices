import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthServiceService {
  getHello(): string {
    return 'Hello, This is Auth Service!';
  }
}
