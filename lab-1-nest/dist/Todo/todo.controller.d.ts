import { TodoService } from './todo.service';
import { Todo } from './todo.type';
export declare class TodoController {
    private TodoService;
    constructor(TodoService: TodoService);
    getAll(): Todo[];
    getById(id: number): Todo;
    addTodo(todo: Todo): string;
    update(id: string, body: Partial<Todo>): Todo;
    deleteTodo(id: number): string;
}
