import { Injectable, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    // Call the base class's canActivate and ensure it resolves to a boolean
    const canActivate = await super.canActivate(context);
    return canActivate as boolean; // Ensure the return type matches `boolean | Promise<boolean>`
  }

  handleRequest(err: any, user: any, info: any, context: ExecutionContext) {
    if (err || !user) {
      if (info?.name === 'TokenExpiredError') {
        throw new UnauthorizedException('Your session has expired. Please log in again.');
      } else if (info?.name === 'JsonWebTokenError') {
        throw new UnauthorizedException('Invalid token. Please log in again.');
      } else {
        throw new UnauthorizedException('You are not authorized to access this resource.');
      }
    }

    // Return the user object to attach it to the request
    return user;
  }
}
