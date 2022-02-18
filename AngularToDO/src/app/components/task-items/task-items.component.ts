import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-items',
  templateUrl: './task-items.component.html',
  styleUrls: ['./task-items.component.css'],
})
export class TaskItemsComponent implements OnInit {
  @Input() task: Task = {} as Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleTask2: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  onDelete(t: Task) {
    //console.warn(t);
    this.onDeleteTask.emit(t);
  }

  Toggle(t: Task) {
    console.warn('yo');
    //t.reminder=false;
    this.onToggleTask2.emit(t);
  }
}
