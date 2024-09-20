import { Component, Output, EventEmitter, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';
import { type Task } from '../task/task.model';

@Component({
  selector: 'app-newtask',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './newtask.component.html',
  styleUrl: './newtask.component.css',
})
export class NewtaskComponent {
  // Another way to implement a service.
  private taskService = inject(TasksService);
  @Input({ required: true }) userId!: string;

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
    this.taskService.addTask(
      {
        id: '',
        userId: '',
        title: this.enterTitle,
        summary: this.enterSummary,
        dueDate: this.enterDate,
      },
      this.userId
    );
    this.closeAddTaskForm();
  }
}
