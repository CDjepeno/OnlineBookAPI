import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientSmsPort } from '../../../domaine/repositories/client.sms.port';
import Twilio from 'twilio/lib/rest/Twilio';
import * as dotenv from "dotenv"
dotenv.config();
@Injectable()
export class TwilioClient implements ClientSmsPort {
  private twilioClient: Twilio;

  constructor(private configService: ConfigService) {
    const accountSid = process.env.WILIO_ACCOUNT_SID
    const authToken = process.env.TWILIO_AUTH_TOKEN
    this.twilioClient = new Twilio(accountSid, authToken);
  }

  async sendMessage(receiverPhoneNumber: string) {
    console.log("receiverPhoneNumber");
    const senderPhoneNumber = this.configService.get(
      'TWILIO_SENDER_PHONE_NUMBER',
    );
    return this.twilioClient.messages.create({
      body: 'Votre compte a bien été crée',
      from: senderPhoneNumber,
      to: receiverPhoneNumber,
    });
  }


}
