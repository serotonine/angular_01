import { Component } from '@angular/core';
import { USERS } from './users';
//const userRandom = Math.floor(Math.random() * USERS.length);

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
  selectedUser = this._selectedUser;
  get userImg() {
    return 'assets/users/' + this.selectedUser.avatar;
  }
  onSelectUser() {
    this.selectedUser = this._selectedUser;
    console.log(this.selectedUser.name + ' is selected!');
  }
}
