import { AppService } from './app.service';
import { TodoService } from './Todo/todo.service';
export declare class AppController {
    private readonly appService;
    private todoService;
    constructor(appService: AppService, todoService: TodoService);
    getHello(): string;
}
