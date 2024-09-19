import { Component, Input, Output, EventEmitter } from '@angular/core';
import { type Task } from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  imports: [CardComponent, DatePipe],
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  // Complete Event.
  @Output() complete = new EventEmitter<string>();
  onComplete() {
    this.complete.emit(this.task.id);
  }
}
