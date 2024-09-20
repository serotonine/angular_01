import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TasksService } from './tasks.service';
import { TaskComponent } from './task/task.component';
import { NewtaskComponent } from './newtask/newtask.component';
import { type Task } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewtaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  /* TypeScript shortcut : init taskService right in the constructor
    === private taskService: TasksService then in the constructor:
    this.taskService = TasksService (constructor param). 
    */
  /* Another way to implement a service: use Angular inject() fct.
    private taskService = inject(TasksService).
    Cf NewTaskComponent.
  */
  constructor(private tasksService: TasksService) {}
  // ? => It might to be a value
  @Input({ required: true }) name!: string;
  // Could be also
  /* @Input() name: string | undefined; */

  // TASKS LIST //
  @Input({ required: true }) userId!: string;
  // Retrieve all task by user.
  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  // Add a new task.
  onAddTask(taskDatas: Task) {
    this.tasksService.addTask(taskDatas, this.userId);
    this.closeTaskForm();
  }
  // Open | close New Task's form.
  isOpenNewTask = false;
  openTaskForm() {
    this.isOpenNewTask = true;
  }
  closeTaskForm() {
    this.isOpenNewTask = false;
  }
}
