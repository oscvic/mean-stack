import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user = {}

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _userService: UserService
  ) { }

  ngOnInit() {
    this.getUserDetail(this.route.snapshot.params['id']);
  }

  getUserDetail(id) {
    this._userService.showUser(id).then((res) => {
      this.user = res;
    }, (err) => {
      console.log(err);
    });
  }

  deleteUser(id) {
    const r = confirm('are you sure you want to delete??')
    if(r){
      this._userService.deleteUser(id).then((result) => {
        this.router.navigate(['/users']);
      }, (err) => {
        console.log(err);
      });
    }
  }

}
