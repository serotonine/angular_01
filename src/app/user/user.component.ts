import { Component, Input, Output, EventEmitter, output } from '@angular/core';
import { USERS } from './users';
import { type User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent],
})
export class UserComponent {
  // Must be typed.
  // ! => no init value.
  /* @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string; */

  // Could be of course a value type Object (See alias above).
  @Input({ required: true }) user!: User;
  // Class.
  @Input({ required: true }) selected!: boolean;

  // Emitter event.
  @Output() onSelect = new EventEmitter<string>();
  // Another new way of output declaration.
  /* onSelect = output<string>(); */
  onSelectUser() {
    this.onSelect.emit(this.user.id);
  }

  get imgPath() {
    return './assets/users/' + this.user.avatar;
  }
}
