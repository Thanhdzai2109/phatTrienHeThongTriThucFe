import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environment';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}
  authenticate(authen: any) {
    sessionStorage.removeItem(environment.idToken);
    sessionStorage.setItem(environment.idToken, authen['IdToken']);

    sessionStorage.removeItem(environment.refreshToken);
    sessionStorage.setItem(environment.refreshToken, authen['RefreshToken']);

    const decoded: any = jwtDecode(authen['IdToken']);
    const userInfo = JSON.stringify(decoded);
    sessionStorage.setItem(environment.userInfo, userInfo);

    this.router.navigate(['dashboard']);
  }

  isTokenExpired(): boolean {
    let token = sessionStorage.getItem(environment.idToken);
    const date = this.getTokenExpirationDate(token);
    if (date === undefined) return false;
    return !(date.valueOf() > new Date().valueOf());
  }

  getTokenExpirationDate(token: any): any {
    const decoded: any = jwtDecode(token);
    if (decoded.exp !== undefined) {
      return null;
    }
    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  getUserInfo(): any {
    let userInfo = sessionStorage.getItem(environment.userInfo);
    if (userInfo) {
      return JSON.parse(userInfo);
    }
    return null;
  }
}
