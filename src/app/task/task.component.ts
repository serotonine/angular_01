import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  // ? => It might to be a value
  @Input() name?: string;
  // Could be also
  /* @Input() name: string | undefined; */

  // @Input({ required: true }) title!: string;
  // @Input({ required: true }) summary!: string;
  // @Input({ required: true }) dueDate!: string;
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) userId!: string;
}
