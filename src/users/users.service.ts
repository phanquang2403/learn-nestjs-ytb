import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entities';

@Injectable()
export class UsersService {
  private user: User[] = [
    {
      id: 0,
      name: 'quang 1',
    },
    {
      id: 1,
      name: 'chony 2',
    },
    {
      id: 2,
      name: 'hilyshit',
    },
    {
      id: 3,
      name: 'yangwua',
    },
    {
      id: 4,
      name: 'lia ia',
    },
    {
      id: 5,
      name: 'huahua',
    },
  ];

  findAll(name?: string): User[] {
    if (name) {
      return this.user.filter((item) => item.name === name);
    }
    return this.user;
  }

  findById(userId: number): User {
    console.log('userId', userId);
    return this.user.find((item) => item.id === userId);
  }

  createUser(user: CreateUserDto): User[] {
    const newUser = {
      id: Date.now(),
      ...user,
    };
    this.user.push(newUser);

    return this.user;
  }
}
