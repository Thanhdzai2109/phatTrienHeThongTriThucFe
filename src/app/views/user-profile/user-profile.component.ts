import { Component } from '@angular/core';
import { LocalStorageService } from './../../common/api/local-storage-service.service'
import { FethApiService } from './../../common/api/feth-api.service';
import * as jwtDecode from 'jwt-decode';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {
  constructor(private apiService: FethApiService,
    private localStorage: LocalStorageService,
    private toastr: ToastrService,){
  }
  public isEdit: Boolean = true
  public user: any = {
    username: 'loi',
    email: 'loi',

  }

  userInfo: any = {}
  token: any = null

  ngOnInit(): void {
    this.token = this.localStorage.getItem("token");
    if(this.token) {
      this.userInfo = jwtDecode.default(this.token);
      this.getUser();
    }
  }

  public getUser(): void {
    debugger
    this.apiService.get('http://localhost:8080/app_user/search/' + this.userInfo.uid).subscribe(
      (res) => {
        if (res) {
          this.localStorage.setItem('user' ,res);
          this.user = res;
        }
      }
    );
  }
  public updateUser(): void {
    let res = this.apiService.put('http://localhost:8080/app_user/update', this.user).subscribe(
      (res) => {
      }
      );

      if (res) {
        this.localStorage.setItem('user' ,this.user);
        this.toastr.success("Cập nhật thành công");
      }
    }
  }
