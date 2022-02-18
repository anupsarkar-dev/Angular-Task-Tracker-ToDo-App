import { Component, OnInit } from '@angular/core';
import { TaskService } from './../../services/task.service';
import { Task } from './../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }

  addTask(task: Task) {
    console.log(task);
    this.taskService.addTask(task).subscribe(() => this.tasks.push(task));
  }

  toggleTask(task: Task) {
    //console.warn(task);
    this.taskService
      .updateTaskReminder(task)
      .subscribe(
        () =>
          (this.tasks = this.tasks.map((t) =>
            t.id === task.id ? (t = task) : t
          ))
      );
  }
}
