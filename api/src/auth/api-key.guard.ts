import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';


@Injectable()
export class ApiKeyGuard implements CanActivate {


  private readonly apiKey =
    'bilisfiber-talkdesk-key';


  canActivate(
    context: ExecutionContext,
  ): boolean {


    const request =
      context.switchToHttp()
      .getRequest();


    const authHeader =
      request.headers['authorization'];


    if (!authHeader) {
      throw new UnauthorizedException(
        'Missing authorization header',
      );
    }


    const token =
      authHeader.replace(
        'Bearer ',
        '',
      );


    if (token !== this.apiKey) {

      throw new UnauthorizedException(
        'Invalid API key',
      );

    }


    return true;

  }

}