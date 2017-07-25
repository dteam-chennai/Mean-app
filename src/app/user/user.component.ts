import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  id: String;
  name: String;
  status: String;
  constructor() { }

  ngOnInit() {
  }

}
