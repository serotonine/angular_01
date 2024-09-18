import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewtaskComponent } from './newtask/newtask.component';
import { type NewTaskDatas } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewtaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  // ? => It might to be a value
  @Input({ required: true }) name!: string;
  // Could be also
  /* @Input() name: string | undefined; */

  // TASKS LIST //
  @Input({ required: true }) userId!: string;
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];
  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  deleteTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  // Open Add new task form.
  isOpenNewTask = false;

  openTaskForm() {
    this.isOpenNewTask = true;
  }
  // Close Add new task form.
  closeTaskForm() {
    this.isOpenNewTask = false;
  }
  // Add a new task.
  onAddTask(taskDatas: NewTaskDatas) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: taskDatas.title,
      summary: taskDatas.summary,
      dueDate: taskDatas.date,
    });
    this.closeTaskForm();
  }
}
