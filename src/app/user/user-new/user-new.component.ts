import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../user.service';
import { User } from '../user'

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {
  //@Output() createNewUserEvent = new EventEmitter();
  //newUser = new User;
  user = {};

  constructor(
    private _UserService: UserService, private router: Router
  ) { }

  ngOnInit() {
  }

  create() {
    this._UserService.saveUser(this.user).then((result) => {
      let id = result['_id'];      
      this.router.navigate(['/user-details', id]);
    }, (err) => {
      console.log(err);
    });
  }
}
