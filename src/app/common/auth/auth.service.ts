import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environment';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root',
})
export class AuthService implements HttpInterceptor {
  constructor(private router: Router) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const beartoken = localStorage.getItem('token');
    if (beartoken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${beartoken}`,
        },
      });
    }

    return next.handle(request);
  }

  removeToken(): void {
    var beartoken = localStorage.getItem('token');
    localStorage.removeItem('token');
  }
}
