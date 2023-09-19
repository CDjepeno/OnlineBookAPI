import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsecaseProxyModule } from 'src/infra/usecase-proxy/usecase-proxy.module';
import { TwilioModules } from 'src/infra/clients/twilio/twilio.module';

@Module({
  imports: [UsecaseProxyModule.register()],
  controllers: [UsersController],
})
export class UserControllerModule {}
