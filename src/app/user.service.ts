import { Injectable } from '@angular/core';
import {UserComponent} from './user/user.component';


@Injectable()
export class UserService {
  users: any = [{id: '1', name: 'vijay', status: 'its working'},
              {id: '2', name: 'vasanth', status: 'great'}];
  constructor() { }

  createUser(user: UserComponent) {
    user.id = Math.random().toString();
    this.users.push(user);
  }

  updateUser(id: String, user: UserComponent) {

  }

  getUserById(id: String) {
    console.log(id);
    let u = this.users.filter(user => user.id === id);
    console.log(u);
    return u;

  }

  getAllUser() {
    return this.users;
  }


}
