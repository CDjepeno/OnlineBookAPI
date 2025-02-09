import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { MulterModule } from '@nestjs/platform-express';
import multer from 'multer';
import { JwtAuthGuard } from 'src/infras/common/guards/jwt-auth.guard';
import { AwsS3Client } from '../clients/aws/aws-s3.client';
import { UsecaseProxyModule } from '../usecase-proxy/usecase-proxy.module';
import { AddBookController } from './book/addBook/addBook.controller';
import { DeleteBookController } from './book/deleteBook/deleteBook.controller';
import { GetAllBookController } from './book/getAllBook/getAllBook.controller';
import { GetBookController } from './book/getBook/getBook.controller';
import { GetBookByUserController } from './book/getBookByUser/getBookByUser.controller';
import { UpdateBookController } from './book/updateBook/updateBook.controller';
import { AuthController } from './user/auth.controller';
import { UsersController } from './user/users.controller';

@Module({
  imports: [
    UsecaseProxyModule.register(),
    MulterModule.register({
      storage: multer.memoryStorage(),
    }),
  ],
  controllers: [
    UsersController,
    AuthController,
    AddBookController,
    GetAllBookController,
    GetBookController,
    GetBookByUserController,
    DeleteBookController,
    UpdateBookController,
  ],
  providers: [JwtAuthGuard, JwtService, AwsS3Client],
})
export class ControllerModule {}
