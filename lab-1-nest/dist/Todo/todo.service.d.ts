import { Todo } from './todo.type';
export declare class TodoService {
    private todos;
    constructor();
    getTodos(): Todo[];
    addTodo(todo: Todo): string;
    getTodo(id: number): Todo;
    updateTodo(id: number, body: Partial<Todo>): Todo;
    deleteTodo(id: number): string;
}
