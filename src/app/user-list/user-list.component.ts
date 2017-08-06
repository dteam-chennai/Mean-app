import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any;
  constructor(private userservice: UserService) { }

  ngOnInit() {
    // console.log('inside user list Component');
    this.userservice.getAllUser().subscribe(
      users => {
        this.users = users;
        console.log(users);
      },
      error => {
        console.log(error);
      }

    )
  }

}
