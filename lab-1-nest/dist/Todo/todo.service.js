"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const common_1 = require("@nestjs/common");
let TodoService = class TodoService {
    todos;
    constructor() {
        this.todos = [];
    }
    getTodos() {
        return this.todos;
    }
    addTodo(todo) {
        const newTodo = {
            ...todo,
            id: this.todos.length + 1,
        };
        this.todos.push(newTodo);
        return 'todo added successfully !';
    }
    getTodo(id) {
        const todo = this.todos[id - 1];
        if (!todo) {
            throw new common_1.NotFoundException('todo not found');
        }
        return todo;
    }
    updateTodo(id, body) {
        const todo = this.todos[id - 1];
        if (!todo) {
            throw new common_1.NotFoundException('todo not found');
        }
        this.todos[id - 1] = { ...todo, ...body };
        return this.todos[id - 1];
    }
    deleteTodo(id) {
        if (id < 0 || id > this.todos.length) {
            throw new common_1.NotFoundException('todo not found');
        }
        this.todos.splice(id - 1, 1);
        return 'todo deleted successfully';
    }
};
exports.TodoService = TodoService;
exports.TodoService = TodoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], TodoService);
//# sourceMappingURL=todo.service.js.map