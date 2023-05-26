import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TodoModule } from './todo/todo.module';
import config from './config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(config), UsersModule, TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
