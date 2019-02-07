import { Task } from './model/task.model';

export interface AppState {
    readonly task: Task[];
}
