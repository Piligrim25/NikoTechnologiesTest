import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../model/task.model';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import * as TaskActions from './../action/task.action';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  tasks: Observable<Task[]>;

  isChangeTask: boolean;

  index: number;

  constructor(private store: Store<AppState>) {
    this.tasks = store.select('task');
  }

  addTask(description) {
    if (description) {
      this.store.dispatch(new TaskActions.AddTask({ description: description, complete: false}));
    }
  }

  deleteTask(index) {
    this.store.dispatch(new TaskActions.RemoveTask(index));
  }

  changeTask(description, index) {
    if (!this.isChangeTask) {
      this.isChangeTask = true;
    } else {
      console.log(description);
      this.store.dispatch(new TaskActions.ChangeTask(description, index));
      this.isChangeTask = false;
    }
  }

  changeStatus(index) {
    if (!this.isChangeTask) {
      this.isChangeTask = true;
    }
    this.index = index;
  }

  completeTask(index) {
    this.store.dispatch(new TaskActions.CompleteTask(index));
  }

  ngOnInit() {
    this.isChangeTask = false;
  }

}
