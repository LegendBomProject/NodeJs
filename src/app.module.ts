import { Module, NestModule,RequestMethod, MiddlewareConsumer} from '@nestjs/common';
import { logger } from './common/middleware/logger.middleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { loginModule } from './login/login.module';
import { user } from './user/user.entity';
import { role } from './role/role.entity';
import { material } from './material/material.entity';
import { materialModule } from './material/material.module';
import { component } from './component/component.entity';
import { componentModule } from './component/component.module';
import { MailModule } from './common/mail/mail.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin',
      database: 'legendbom',
      entities: [user,role, material, component],
      synchronize: true,
    }),
    loginModule,
    materialModule,
    componentModule,
    MailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(logger)
      .forRoutes({ path: 'ab*cd', method: RequestMethod.ALL });
  }
}