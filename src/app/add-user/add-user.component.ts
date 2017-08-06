import { Component, OnInit, Input } from '@angular/core';
import { UserComponent } from '../user/user.component';
import {UserService} from '../user.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  @Input()
  user: any = {};
  newuser = false;
  id: any;
  constructor(private userservice: UserService, private router: Router, private activatedroute: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.user);
    if(Object.keys(this.user).length == 0) {
      this.newuser = true;
      this.user.name = "";
      this.user.status = "";
    }
    this.activatedroute.params.subscribe(params => this.id = params['id']);
    if(this.id) {
      console.log(this.id);
      this.newuser = false;
      this.userservice.getUserById(this.id).subscribe(
        user => {
          this.user = user;
        },
        error => {
          console.log(error);
        }

      )
    }


  }

  createUser() {
    /*if(this.user.id) {
      this.uservice.updateUser(this.user.id, this.user);
    } else {
      this.uservice.createUser(this.user);
    }*/
    console.log('inside create user', this.user);
    this.userservice.createUser(this.user).subscribe(
      data => {
        console.log('user created successfully');
        this.router.navigate(['/users']);
      },
      error => {
        console.log(error);
      }
    )

  }

  updateUser() {
    this.userservice.updateUser(this.id, this.user).subscribe(
      data => {
        console.log('updated successfully');
        this.router.navigate(['/users']);
      },
      error => {
        console.log(error);
      }
    );

    }

}
