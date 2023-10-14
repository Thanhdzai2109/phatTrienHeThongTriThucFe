import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FethApiService } from 'src/app/common/api/feth-api.service';
import { AuthService } from 'src/app/common/auth/auth.service';
import { OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private api: FethApiService,
    private auth: AuthService,
    private router: Router,
    private toastr: ToastrService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.buidForm();
  }
  doLogin() {
    this.router.navigate(['dashboard']);
    let data = {
      userName: this.loginForm.controls['userName'],
      passWord: this.loginForm.controls['passWord'],
    };
    this.api.post('', data).subscribe((res) => {
      if (res && res.success === true) {
        this.auth.authenticate(res['data']['result']['AuthenticationResult']);
        
      } else {
        this.toastr.error('Thông báo', 'Thông tin đăng nhập không hợp lệ');
      }
    });
  }
  buidForm() {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
}
