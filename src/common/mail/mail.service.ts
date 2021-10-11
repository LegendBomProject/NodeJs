import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { user } from '../../user/user.entity';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmation(user: user) {
    const url = `example.com`;

    await this.mailerService.sendMail({
      to: user.emailId,
      // from: '"Support Team" <support@example.com>', // override default from
      from: 'legendbom97@gmail.com',
      subject: 'Welcome to Nice App! Confirm your Email',
      template: './confirmation', // `.hbs` extension is appended automatically
      context: { // ✏️ filling curly brackets with content
        name: user.userName,
        url,
      },
    });
  }
}
