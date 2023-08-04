import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDTO } from './user.dtos';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  async createUser(@Body() userDto: UserDTO) {
    this.userService.createUser(userDto);
  }
}
