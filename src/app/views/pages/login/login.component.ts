import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FethApiService} from 'src/app/common/api/feth-api.service';
import {AuthService} from 'src/app/common/auth/auth.service';
import {OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isLoading: boolean = false;

  constructor(
    private api: FethApiService,
    private auth: AuthService,
    private router: Router,
    private toastr: ToastrService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.buidForm();
  }

  doLogin() {
    this.isLoading = true
    let data = {
      user_email: this.loginForm.controls['userName'].value,
      user_password: this.loginForm.controls['passWord'].value,
    };
    this.api.post('http://localhost:8080/app_user/login', data).subscribe((res: any) => {
      if (res) {
        console.log(res['access_token']);
        localStorage.setItem('token', res['access_token']);

        const token = localStorage.getItem('token');
        console.log(token);
        this.toastr.success('Đăng nhập thành công !');
        this.router.navigate(['health-care']);
      } else {
        this.toastr.error('Thông tin đăng nhập không hợp lệ');
      }
      this.isLoading = false
    },(error) => {
      this.toastr.error(
        error.message ? error.message : error
      );
    });
  }

  buidForm() {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required]],
      passWord: ['', [Validators.required]],
    });
  }
  doRegiter(){
    this.router.navigate(['register']);
  }
}
