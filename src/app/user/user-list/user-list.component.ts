import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../user.service';
import { User } from '../user'


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any;

  constructor(
    private _userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this._userService.getUsers().then((res) => {
      this.users = res;
      console.log(this.users);
    }, (err) => {
      console.log(err);
    });
  }

  destroy(id){
    const r = confirm('are you sure you want to delete??')
    if(r){
      this._userService.deleteUser(id).then((result) => {
        let idx = this.users.findIndex(x => x._id === id)
        this.users.splice(idx, 1);
        //this.router.navigate(['/users']);
      }, (err) => {
        console.log(err);
      });
    }
  }

}
