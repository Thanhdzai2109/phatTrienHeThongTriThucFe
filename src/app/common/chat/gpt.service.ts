import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GptService {
  private apiUrl = 'https://api.openai.com/v1/chat/completions'; 
  private apiKey = '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';

  constructor(private http: HttpClient) { }

  callGPT(message: string) {
    return this.http.post(this.apiUrl, { message }, { headers: { 'Authorization': `Bearer ${this.apiKey}` } });
  }

}
