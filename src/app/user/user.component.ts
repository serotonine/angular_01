import { Component, Input, computed, input } from '@angular/core';
import { USERS } from './users';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  /* Must be typed.
  ! => no init value. 
  Input => decorator || input => special function. */
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  //
  // TypeScript annotation.
  // Read Only no way to change the values (set).
  avatar = input.required<string>();
  name = input.required<string>();
  imgPath = computed(() => './assets/users/' + this.avatar());
  // get imgPath() {
  //   return './assets/users/' + this.avatar();
  // }
  onSelectUser() {}
}
