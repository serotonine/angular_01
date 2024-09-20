import { Component, Input } from '@angular/core';
import { type Task } from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  imports: [CardComponent, DatePipe],
})
export class TaskComponent {
  constructor(private tasksService: TasksService) {}
  @Input({ required: true }) task!: Task;
  onComplete() {
    this.tasksService.deleteTask(this.task.id);
  }
}
