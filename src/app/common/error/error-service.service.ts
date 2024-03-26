import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorServiceService {
  public errorMessage = 'Phiên làm việc đã kết thúc vui lòng đăng nhập lại !';
  constructor() { }
  errorMessege(){
    return this.errorMessage;
  }
}
