import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './../../Task';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.css'],
})
export class ToggleButtonComponent implements OnInit {
  @Input() task: Task = {} as Task;
  //@Output() onToggleTask: EventEmitter<Task> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  // onToggle(t: Task) {
  //   //console.log(t);
  //   //
  //   this.onToggleTask.emit(t);
  // }
}
