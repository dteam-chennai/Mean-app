import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any;
  constructor(private userservice: UserService) { }

  ngOnInit() {
    this.users = this.userservice.getAllUser();
  }

}
