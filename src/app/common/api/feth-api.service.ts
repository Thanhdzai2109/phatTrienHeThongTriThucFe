import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class FethApiService {
  constructor(private http: HttpClient) {}

  get(strUrl: string, param?: any): Observable<any> {
    return this.http.get(strUrl, {
      params: param,
      responseType: 'json',
    });
  }

  post(strUrl: string, paramBody?: any, param?: any): Observable<any> {
    return this.http.post(strUrl, paramBody, {
      params: param,
      responseType: 'json',
    });
  }

  put(strUrl: string, paramBody?: any, param?: any): Observable<any> {
    return this.http.put(strUrl, paramBody, {
      params: param,
      responseType: 'json',
    });
  }

}
