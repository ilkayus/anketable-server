import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Logger } from '@nestjs/common';

@Injectable()
export class PollsGuard implements CanActivate {
  private readonly logger = new Logger(PollsGuard.name);
  constructor(private readonly jwtService: JwtService) {}
  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const { accessToken } = request.body;

    if (!accessToken) {
      throw new ForbiddenException('No authorization token provided');
    }

    this.logger.debug(`Validating auth token: ${accessToken}`);

    // validate JWT Token
    try {
      const payload = this.jwtService.verify(accessToken);
      // append user and poll to socket
      request.userID = payload.sub;
      request.pollID = payload.pollID;
      request.name = payload.name;
      return true;
    } catch {
      throw new ForbiddenException('Invalid authorization token');
    }
  }
}
