import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Task } from './../model/task.model';

export const ADD_TASK = '[TASK] Add';
export const CHANGE_TASK = '[TASK] Change';
export const COMPLETE_TASK = '[TASK] Complete';
export const REMOVE_TASK = '[TASK] Remove';

export class AddTask implements Action {
    readonly type = ADD_TASK;

    constructor(public payload: Task) { }
}

export class ChangeTask implements Action {
    readonly type = CHANGE_TASK;

    constructor(public payload: string, public index: number) { }
}

export class CompleteTask implements Action {
    readonly type = COMPLETE_TASK;

    constructor(public payload: number) { }
}


export class RemoveTask implements Action {
    readonly type = REMOVE_TASK;

    constructor(public payload: number) { }
}

export type Actions = AddTask | ChangeTask | CompleteTask | RemoveTask;
