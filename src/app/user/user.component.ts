import { Component, Input, Output, EventEmitter, output } from '@angular/core';
import { USERS } from './users';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // Must be typed.
  // ! => no init value.
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  // Emitter event.
  // @Output() onSelect = new EventEmitter();
  // Another way of declaration.
  onSelect = output<string>();
  onSelectUser() {
    this.onSelect.emit(this.id);
  }

  get imgPath() {
    return './assets/users/' + this.avatar;
  }
}
