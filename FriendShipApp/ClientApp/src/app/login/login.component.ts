import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model = new User();
  result: any;
  posted = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  submit(form: NgForm) {
    //this.http.post('api/auth/login', this.model as User).subscribe(result => {
    //  this.result = result;
    //  console.log(result);
    //  this.posted = true;
    //  form.reset();
    //},
    //  error => console.log(error)
    //)
    console.log("Submitted");
  }

}

 export class User {
  UserName: string;
  Password: string;
}
