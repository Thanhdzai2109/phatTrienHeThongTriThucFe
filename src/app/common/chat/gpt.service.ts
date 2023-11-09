import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GptService {
  private apiUrl = 'http://localhost:8080/chat/request';

  constructor(private http: HttpClient) { }

  // callGPT(userMessage: any: Observable<string> {
  //   return this.http.post(this.apiUrl, { userMessage } );
  // }
  callGPT(message: string): Observable<string> {
    const url = `${this.apiUrl}?userMessage=${message}`;
    return this.http.get<string>(url, { responseType: 'text' as 'json' });
  }
}
