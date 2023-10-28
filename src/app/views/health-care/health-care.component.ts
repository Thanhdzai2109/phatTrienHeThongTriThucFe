import { Component } from '@angular/core';
import {FethApiService} from "../../common/api/feth-api.service";
import {AuthService} from "../../common/auth/auth.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {FormBuilder} from "@angular/forms";


@Component({
  selector: 'app-health-care',
  templateUrl: './health-care.component.html',
  styleUrls: ['./health-care.component.scss'],
})
export class HealthCareComponent {
  constructor(
    private api: FethApiService,
    private auth: AuthService,
    private router: Router,
    private toastr: ToastrService,
    private fb: FormBuilder
  ) {
  }

  public user: any = { id: 1 };

  public bot: any = { id: 0 };

  public messages: any[] = [
    {
      author: this.bot,
      text: 'Do you like Angular?',
    },
    {
      author: this.user,
      text: 'Definitely!',
    },
  ];

  public sendMessage(e: any): void {
    this.messages = [...this.messages, e.message];
  }

  // BMI
  public bmiCalculator(e: any): void {
    
  }

  public doSent(){
    // let data={
    //      height: 20,
    //      weight: 54,
    //      old:24,
    //      sex:1
    // }
    // this.api.post("http://localhost:8080/bmi/ketQua",data).subscribe(res=>{
    //     if(res){
    //       console.log(res)
    //     }
    // },(error=>{
    //   this.toastr.error(error.message,'Thông báo')
    // }))
  }
}
