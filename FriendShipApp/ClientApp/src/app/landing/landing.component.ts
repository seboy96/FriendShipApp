import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../login/login.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  users: User[];

  constructor(private service: UserService) { }

  ngOnInit() {
    this.service.getUsers().subscribe(data => {
      this.users = data;
    })
  }

}
