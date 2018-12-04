import { Component, OnInit } from '@angular/core';
import { Userclass } from '../models/Userclass';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model = new Userclass();
  result: any;
  posted = false;

  constructor(private service: AuthService,
    private http: HttpClient) { }

  ngOnInit() {
  }

  register(form: NgForm) {
    this.service.registerUser(this.model as Userclass).subscribe(result => {
      this.result = result;
      console.log(result);
      this.posted = true;
      form.reset();
    },
      error => alert("There was an error registering...")
    )
  }

}
