import { Action } from '@ngrx/store';
import { Task } from './../model/task.model';
import * as TaskActions from './../action/task.action';

const initialState: Task = {
    description: 'First Task',
    complete: false
};

export function reducer(state: Task[] = [initialState], action: TaskActions.Actions) {
    switch (action.type) {
        case TaskActions.ADD_TASK:
            return [...state, action.payload];

        case TaskActions.CHANGE_TASK:
            state[action.index].description = action.payload;
            return state;

        case TaskActions.COMPLETE_TASK:
            state[action.payload].complete = true;
            return state;

        case TaskActions.REMOVE_TASK:
            state.splice(action.payload, 1);
            console.log(state);
            return state;

        default:
            return state;
    }
}
