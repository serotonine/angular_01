import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-newtask',
  standalone: true,
  imports: [],
  templateUrl: './newtask.component.html',
  styleUrl: './newtask.component.css',
})
export class NewtaskComponent {
  @Output() onClose = new EventEmitter<void>();

  closeAddTaskForm() {
    this.onClose.emit();
  }
}
