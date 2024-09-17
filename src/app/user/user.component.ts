import { Component, Input } from '@angular/core';
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
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  get imgPath() {
    return './assets/users/' + this.avatar;
  }
  onSelectUser() {}
}
