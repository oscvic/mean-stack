import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user = {}

  constructor(
    private _userService: UserService, private router: Router, private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getUser(this.route.snapshot.params['id']);
  }

  getUser(id) {
    this._userService.showUser(id).then((res) => {
      this.user = res;
    }, (err) => {
      console.log(err);
    });
  }

  updateUser(id) {
    this._userService.updateUser(id, this.user).then((result) => {
      let id = result['_id'];
      this.router.navigate(['/user-details', id]);
    }, (err) => {
      console.log(err);
    });
}

}
