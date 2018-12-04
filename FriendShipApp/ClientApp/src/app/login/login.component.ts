import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { User } from '../models/User';
import { Userclass } from '../models/Userclass';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model = new Userclass();
  result: any;
  posted = false;

  constructor(private service: AuthService,
    private http: HttpClient) { }

  ngOnInit() {
  }

  submit(form: NgForm) {
    this.service.loginUser(this.model as Userclass).subscribe(result => {
      this.result = result;
      console.log(result);
      this.posted = true;
      form.reset();
    },
      error => alert("There was an error logging in...") //was console.log(error)
    )
    //console.log('Submitted');
    //console.log(form);
  }

}

// export class User {
//  UserName: string;
//  Password: string;
//}
