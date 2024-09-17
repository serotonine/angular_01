import { Component, signal, computed } from '@angular/core';
import { USERS } from './users';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  private get _selectedUser() {
    const userRandom = Math.floor(Math.random() * USERS.length);
    return USERS[userRandom];
  }

  // Create such a Signal Event Emitter Object.
  selectedUser = signal(this._selectedUser);

  // get userImg() {
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }
  // With Signal Use computed (function as argument).
  userImg = computed(() => 'assets/users/' + this.selectedUser().avatar);
  onSelectUser() {
    // Signal Object has a  set method.
    this.selectedUser.set(this._selectedUser);
    // You have to call the signal value as a function.
    console.log(this.selectedUser().name + ' is selected!');
  }
}
