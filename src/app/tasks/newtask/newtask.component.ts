import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskDatas } from '../task/task.model';

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
  @Output() addTask = new EventEmitter<NewTaskDatas>();
  enterTitle = '';
  enterSummary = '';
  enterDate = '';
  onSubmit() {
    this.addTask.emit({
      title: this.enterTitle,
      summary: this.enterSummary,
      date: this.enterDate,
    });
  }
}
