import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { AddUserRequest } from 'src/application/usecases/user/adduser/add.user.request';
import { AddUserResponse } from 'src/application/usecases/user/adduser/add.user.response';
import { CurrentUserResponse } from 'src/application/usecases/user/getuser/current.user.response';
import { GetUserRequest } from 'src/application/usecases/user/getuser/get.user.request';
import { GetUserResponse } from 'src/application/usecases/user/getuser/get.user.response';
import { Repository } from 'typeorm';
import { UsersRepository } from '../../domaine/repositories/user.repository';
import { User } from '../models/user.entity';

@Injectable()
export class UserRepositoryTyperom implements UsersRepository {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
    private readonly jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async addUser(addUserRequest: AddUserRequest): Promise<AddUserResponse> {
    const user = new User();
    user.email = addUserRequest.email;
    user.password = await bcrypt.hash(addUserRequest.password, 10);
    user.name = addUserRequest.name;
    user.phone = addUserRequest.phone;
    return this.repository.save(user);
  }

  async signIn(siginIn: GetUserRequest): Promise<GetUserResponse> {
    const { email, password } = siginIn;
    const user = await this.repository.findOne({
      where: { email },
    });
    if (!user) {
      throw new NotFoundException("L'utilisateur n'existe pas.");
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      throw new UnauthorizedException('Le mot de passe est invalide.');
    }

    const payload = {
      sub: user.id,
      email: user.email,
    };

    const token = await this.jwtService.signAsync(payload, {
      secret: this.configService.get('JWT_SECRET'),
      expiresIn: '60s',
    });
    return { name: user.name, email: user.email, token };
  }

  async getCurrentUser(email: string): Promise<CurrentUserResponse> {
    try {
      const userEntity = await this.repository.findOne({
        where: { email },
      });

      if (!userEntity) {
        throw new NotFoundException();
      }

      return userEntity;
    } catch (error) {
      console.error(
        "Erreur lors de la recherche de l'utilisateur :",
        error.message,
      );
      throw new Error(
        "Une erreur s'est produite lors de la recherche de l'utilisateur.",
      );
    }
  }
}
