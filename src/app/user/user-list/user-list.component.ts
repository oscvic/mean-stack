import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user'


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any;
  //@Input() users;
  @Output() destroyUserEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.users = [
      new User(1, 'Oscar', 'Vicente', 'vicenteyan@gmail.com'),
      new User(2, 'Oscar', 'Vicente', 'vicenteyan@gmail.com')
    ];
  }



  destroy(user: User){
    const r = confirm('delete?')
    if(r){
      this.destroyUserEvent.emit(user);
    }
  }

}
