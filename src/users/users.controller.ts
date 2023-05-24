import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entities';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get()
  getAll(): User[] {
    return this.userService.findAll();
  }

  @Get(':id')
  getById(@Param('id') id: string): User {
    return this.userService.findById(Number(id));
  }

  @Post()
  create(@Body() body: CreateUserDto): User[] {
    return this.userService.createUser(body);
  }
}
