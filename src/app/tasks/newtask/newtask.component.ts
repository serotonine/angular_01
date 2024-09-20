import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type Task } from '../task/task.model';

@Component({
  selector: 'app-newtask',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './newtask.component.html',
  styleUrl: './newtask.component.css',
})
export class NewtaskComponent {
  // Close New Task dialog
  @Output() onClose = new EventEmitter<void>();
  closeAddTaskForm() {
    this.onClose.emit();
  }
  // Collect entered datas.
  @Output() addTask = new EventEmitter<Task>();
  enterTitle = '';
  enterSummary = '';
  enterDate = '';
  onSubmit() {
    this.addTask.emit({
      userId: '',
      id: '',
      title: this.enterTitle,
      summary: this.enterSummary,
      dueDate: this.enterDate,
    });
  }
}
