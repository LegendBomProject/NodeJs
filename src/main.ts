import { NestFactory,HttpAdapterHost } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './common/middleware/logger.middleware';
import { AllExceptionsFilter } from './common/exception/all-exceptions.filter';
import  utils  from './common/util/utils'
declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AllExceptionsFilter());
  app.setGlobalPrefix('api');
  app.use(logger);
  await app.listen(3000);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());;
  }
}
bootstrap();
