import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  loginUser(user: User) {
    return this.http.post("api/auth/login", user);
  }

  registerUser(user: User) {
    return this.http.post("api/auth/register", user);
  }

}
