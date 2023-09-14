import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserControllerModule } from './presentations/user/users.controller.module';
import { UsecaseProxyModule } from './infras/usecase-proxy/usecase-proxy.module';
import { UsersController } from './presentations/user/users.controller';
import { User } from './infras/entities/user.entity';

@Module({
  imports: [
    UsecaseProxyModule.register(),
    UserControllerModule,
    ConfigModule.forRoot(),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [User],
        synchronize: true,
      }),
      inject: [ConfigService],
    })
  ],
  controllers: [UsersController],
  providers: [],
})
export class AppModule {}
