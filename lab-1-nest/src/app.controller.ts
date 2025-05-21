import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { TodoService } from './Todo/todo.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private todoService: TodoService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
