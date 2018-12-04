import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { Userclass } from '../models/Userclass';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  loginUser(user: Userclass) {
    return this.http.post("api/auth/login", user);
  }

  registerUser(user: Userclass) {
    return this.http.post("api/auth/register", user);
  }

}
