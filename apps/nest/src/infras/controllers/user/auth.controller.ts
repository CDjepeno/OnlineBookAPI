import {
  Body,
  Controller,
  Get,
  Inject,
  Post,
  Req,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';

import { GetCurrentUserUseCase } from 'src/application/usecases/user/auth/get.current.user.usecase';
import { LoginUserUseCase } from 'src/application/usecases/user/getuser/login.user.usecase';
import { JwtAuthGuard } from 'src/infras/common/guards/jwt-auth.guard';
import { UseCaseProxy } from 'src/infras/usecase-proxy/usecase-proxy';
import { UsecaseProxyModule } from 'src/infras/usecase-proxy/usecase-proxy.module';
import { AuthDto } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject(UsecaseProxyModule.LOGIN_USER_USE_CASE)
    private readonly loginUsecaseProxy: UseCaseProxy<LoginUserUseCase>,
    @Inject(UsecaseProxyModule.GET_CURRENT_USER_USE_CASE)
    private readonly getCurrentUserUseCase: UseCaseProxy<GetCurrentUserUseCase>,
  ) {}

  @Post('login')
  async login(@Body() auth: AuthDto) {
    const user = await this.loginUsecaseProxy.getInstance().execute(auth);
    if (!user) {
      throw new UnauthorizedException(
        "L'utilisateur n'a pas pu être connecté.",
      );
    }
    return user;
  }

  @Get('current')
  @UseGuards(JwtAuthGuard)
  async getCurrentUser(@Req() request) {
    return await this.getCurrentUserUseCase
      .getInstance()
      .execute(request.user.email);
  }
}
