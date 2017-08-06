import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import {routing} from './app.routing';

import {UserService} from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserListComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
