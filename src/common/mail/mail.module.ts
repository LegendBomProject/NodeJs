import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Global, Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { join } from 'path';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Global() // 👈 global module
@Module({
  imports: [
    MailerModule.forRootAsync({
      // imports: [ConfigModule], // import module if not enabled globally
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        // transport: config.get("MAIL_TRANSPORT"),
        // or
        transport: {
          // host: config.get('MAIL_HOST'),
          // secure: false,
          // auth: {
          //   user: config.get('MAIL_USER'),
          //   pass: config.get('MAIL_PASSWORD'),
          // },
          host: 'smtp.gmail.com',
          port: 587,
          secure: false, // use SSL
          auth: {
            user: 'legendbom97@gmail.com',
            pass: 'Admin@123'
          }
        },
        defaults: {
          from: 'legendbom97@gmail.com'//`"No Reply" <${config.get('MAIL_FROM')}>`,
        },
        template: {
          dir: join(__dirname, 'templates'),
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule { }
