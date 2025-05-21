import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './todo.type';

@Injectable()
export class TodoService {
  private todos: Todo[];

  constructor() {
    this.todos = [];
  }

  getTodos() {
    return this.todos;
  }

  addTodo(todo: Todo): string {
    const newTodo: Todo = {
      ...todo,
      id: this.todos.length + 1,
    };
    this.todos.push(newTodo);
    return 'todo added successfully !';
  }

  getTodo(id: number): Todo {
    const todo = this.todos[id - 1];
    if (!todo) {
      throw new NotFoundException('todo not found');
    }
    return todo;
  }

  updateTodo(id: number, body: Partial<Todo>): Todo {
    const todo = this.todos[id - 1];
    if (!todo) {
      throw new NotFoundException('todo not found');
    }
    this.todos[id - 1] = { ...todo, ...body };
    return this.todos[id - 1];
  }

  deleteTodo(id: number): string {
    if (id < 0 || id > this.todos.length) {
      throw new NotFoundException('todo not found');
    }
    this.todos.splice(id - 1, 1);
    return 'todo deleted successfully';
  }
}
