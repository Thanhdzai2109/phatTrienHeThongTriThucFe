import {Component} from '@angular/core';
import {FethApiService} from "../../../common/api/feth-api.service";
import {OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formDangki!: FormGroup;

  constructor(
    private api: FethApiService,
    private toastr: ToastrService,
    private router: Router,
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.buidForm();
  }

  regiter() {
    let data = {
      user_name: this.formDangki.controls['userName'].value,
      user_email: this.formDangki.controls['Email'].value,
      user_password: this.formDangki.controls['password'].value,
    }
    if (this.formDangki.invalid) {
      this.toastr.warning('Vui lòng nhập đầy đủ thông tin')
    } else {
      this.api.post('http://localhost:8080/app_user/save', data).subscribe(res => {
        if (res) {
          this.toastr.success("Đăng kí thành công")
          this.router.navigate(['login']);
        }
      }, (error) => {
        this.toastr.error(" Địa chỉ Email đã tồn tại")
      })
    }
  }

  buidForm() {
    this.formDangki = this.fb.group({
      userName: ['', [Validators.required]],
      Email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }
}
