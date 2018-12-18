import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../login/login.component';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthUser } from '../models1/AuthUser';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
    private jwtHelperService: JwtHelperService) { }

  login(user: User) {
    return this.http.post<AuthUser>('api/auth/login', user)
      .pipe(map((result: AuthUser) => {
        if (result) {
          localStorage.setItem('token', result.tokenString);
          localStorage.setItem('user', JSON.stringify(result.user));
        }
        return result;
      }));
  }

  loginUser(user: User) {
    return this.http.post("api/auth/login", user);
  }

  registerUser(user: User) {
    return this.http.post("api/auth/register", user);
  }

  isLoggedIn() {
    const token = localStorage.getItem('token', );

    return !this.jwtHelperService.isTokenExpired(token, );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
}
