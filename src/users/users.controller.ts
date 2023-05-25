import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entities';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('User')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @ApiOkResponse({ type: User, isArray: true })
  @ApiNotFoundResponse()
  @Get()
  @ApiQuery({ name: 'name', required: false })
  getAll(@Query('name') name: string): User[] {
    const users = this.userService.findAll(name);
    if (!users.length) {
      throw new NotFoundException();
    }
    return users;
  }

  @ApiOkResponse({ type: User, description: 'desc user' })
  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number): User {
    console.log(typeof id);
    return this.userService.findById(id);
  }

  @ApiCreatedResponse({ type: User })
  @ApiBadRequestResponse()
  @Post()
  create(@Body() body: CreateUserDto): User[] {
    return this.userService.createUser(body);
  }
}
