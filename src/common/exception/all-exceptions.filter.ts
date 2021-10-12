import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { json } from 'stream/consumers';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const exceptionClone = JSON.parse(JSON.stringify(exception));
    const resException = Object.assign({}, { timestamp: new Date().toISOString() }, exceptionClone);

    response.status(status).json(
      {
        statusCode: resException.responseCode ? resException.responseCode : resException.status,
        success: false,
        message: resException.response ?
          resException.response.message ? resException.response.message : resException.response
          : resException.message,
      }
    );
  }
}