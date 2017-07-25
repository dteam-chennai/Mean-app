import {Router, RouterModule, Routes} from '@angular/router';
import {UserListComponent} from './user-list/user-list.component';
import {AddUserComponent} from './add-user/add-user.component';


const appRoutes: Routes = [
  {path: '', component: UserListComponent},
  {path: 'users', component: UserListComponent},
  {path: 'user/:id', component: AddUserComponent},
  {path: 'adduser', component: AddUserComponent},
  {path: '*', component: UserListComponent}
];

export const routing = RouterModule.forRoot(appRoutes);

