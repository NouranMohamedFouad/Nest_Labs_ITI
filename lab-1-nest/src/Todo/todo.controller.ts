import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.type';

@Controller('todo')
export class TodoController {
  constructor(private TodoService: TodoService) {}

  @Get()
  getAll(): Todo[] {
    return this.TodoService.getTodos();
  }

  @Get(':id')
  getById(@Param('id') id: number): Todo {
    return this.TodoService.getTodo(+id);
  }

  @Post()
  addTodo(@Body() todo: Todo) {
    return this.TodoService.addTodo(todo);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: Partial<Todo>) {
    return this.TodoService.updateTodo(+id, body);
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: number): string {
    return this.TodoService.deleteTodo(+id);
  }
}
