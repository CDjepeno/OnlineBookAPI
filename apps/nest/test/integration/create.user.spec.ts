import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../../src/infras/models/user.model';
import { UserRepositoryTyperom } from '../../src/infras/services/user.repository.typeorm';

describe('', () => {
  let moduleFixture: TestingModule;
  let service: UserRepositoryTyperom;

  const mockUserService = {
    create: jest.fn().mockImplementation((dto) => dto),
    save: jest
      .fn()
      .mockImplementation((user) =>
        Promise.resolve({ id: Date.now(), ...user }),
      ),
  };

  beforeAll(async () => {
    moduleFixture = await Test.createTestingModule({
      providers: [
        UserRepositoryTyperom,

        ConfigService,
        {
          provide: getRepositoryToken(User),
          useValue: mockUserService,
        },
      ],
    })
      .overrideProvider(getRepositoryToken(User))
      .useValue(mockUserService)
      .compile();

    service = moduleFixture.get<UserRepositoryTyperom>(UserRepositoryTyperom);
  });

  describe('create user', () => {
    const userDetails = {
      email: 'test@test.fr',
      name: 'firstname',
      phone: '+33624552440',
      password: 'test',
    };

    const userData = {
      id: expect.any(Number),
      email: 'test@test.fr',
      name: 'firstname',
      phone: '+33624552440',
      password: 'test',
    };

    it('service should be defined', () => {
      expect(service).toBeDefined();
    });

    it('should create a new user', async () => {
      expect(await service.signUp(userDetails)).toEqual(userData);
    });
  });

  afterAll(async () => {
    await moduleFixture.close();
  });
});
