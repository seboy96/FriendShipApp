import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model = new User();
  result: any;
  posted = false;

  constructor(private service: AuthService,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit() {
  }

  submit(form: NgForm) {
    this.service.login(this.model as User).subscribe(result => {
      this.result = result;
      console.log(result);
      this.posted = true;
      form.reset();
      this.router.navigate(['landing'])
    },
      error => alert("There was an error logging in...") //was console.log(error)
    )
    //console.log('Submitted');
    //console.log(form);
  }

  isLoggedIn() {
    var x = this.service.isLoggedIn();
    //this.service.isLoggedIn();
    return x;
  }

}

 export class User {
  UserName: string;
  Password: string;
}
