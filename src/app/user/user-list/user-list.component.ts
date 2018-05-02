import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user'


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() users;
  @Output() destroyUserEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  destroy(user: User){
    const r = confirm('delete?')
    if(r){
      this.destroyUserEvent.emit(user);
    }    
  }

}
