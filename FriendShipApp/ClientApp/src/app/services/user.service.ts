import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'api/user/';

  constructor(private http: HttpClient) { }

  getUser(id: number) {
    return this.http.get<User>(`${this.baseUrl}${id}`);
  }

  getUsers() {
    return this.http.get<User[]>(this.baseUrl);
  }
}
