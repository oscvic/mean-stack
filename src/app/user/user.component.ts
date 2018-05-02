import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[] = [
    new User(1, 'Oscar', 'Vicente', 'vicenteyan@gmail.com'),
    new User(2, 'Oscar', 'Vicente', 'vicenteyan@gmail.com')
  ];
  constructor(
    private _userService: UserService
  ) { }

  ngOnInit() {
    //this.getUsers();
  }

  getUsers() {
    //this._userService.getUsers()
    //.then(users => this.users = users)
  }

  create(user: User){
    //console.log(user)
    this.users.push(user);
  }

  destroy(user: User){
    const i = this.users.indexOf(user);
    this.users.splice(i, 1)
  }

}
