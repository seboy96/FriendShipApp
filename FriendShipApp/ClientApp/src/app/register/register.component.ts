import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { User } from '../login/login.component';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model = new User();
  result: any;
  posted = false;

  constructor(private service: AuthService,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit() {
  }

  register(form: NgForm) {
    this.service.registerUser(this.model as User).subscribe(result => {
      this.result = result;
      console.log(result);
      this.posted = true;
      form.reset();
      this.router.navigate(['landing'])
    },
      error => alert("There was an error registering...")
    )
  }

  passwordNoMatch(pw: string) {
    return this.model.Password == pw;
  }

}
