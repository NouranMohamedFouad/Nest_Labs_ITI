export declare enum TodoStatus {
    TODO = "todo",
    IN_PROGRESS = "in-progress",
    DONE = "done"
}
export interface Todo {
    id: number;
    task: string;
    status: TodoStatus;
}
