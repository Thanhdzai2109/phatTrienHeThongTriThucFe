import { Component } from '@angular/core';
import { FethApiService } from '../../common/api/feth-api.service';
import { AuthService } from '../../common/auth/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder } from '@angular/forms';
import * as jwtDecode from 'jwt-decode';

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
  ) {}

  get userInfo(): any {
    let userString = localStorage.getItem("user");
    if(userString){
      return JSON.parse(userString);
    }
    return {}
  }
  public bmiData: any = {
    height: this.userInfo.height,
    weight: this.userInfo.weight,
    old: this.userInfo.age,
    sex: this.userInfo.gender,
    result: null
  }

  public weightGainData: any = {
    height: this.userInfo.height,
    weight: this.userInfo.weight,
    old: this.userInfo.age,
    sex: this.userInfo.gender,
    activityLevel: null,
    targetWeight: null,
    weightGain: null,
    result: null
  }

  public kaloData: any = {
    height: this.userInfo.height,
    weight: this.userInfo.weight,
    old: this.userInfo.age,
    sex: this.userInfo.gender,
    activityLevel: null,
    result: null
  }

  public physicalMenuData: any = {
    height: null,
    weight: null,
    old: null,
    gender: null,
    result: null
  }

  public resByHienTuong: any = {};

  public user: any = { id: 1 };

  public phenomenals: any = [];
  public phenomenalSelected: any = [];

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

  ngOnInit() {
    this.getHienTuongs();

    if(this.userInfo){
      this.bmiData.height = this.userInfo.height;
      this.bmiData.weight = this.userInfo.weight;
      this.bmiData.old = this.userInfo.age;
      this.bmiData.sex = this.userInfo.gender;
    }
  }

  public sendMessage(e: any): void {
    this.messages = [...this.messages, e.message];
  }

  // BMI
  public bmiCalculator(e: any): void {
    this.api.post('http://localhost:8080/bmi/ketQua', this.bmiData).subscribe(
      (res) => {
        if (res) {
          this.bmiData.result = res;
        }
      },
      (error) => {
        this.toastr.error(error.message, 'Thông báo');
      }
    );
  }

  // weightGainCalculator
  public onWeightGainCalculator(e: any): void {
    this.api.post('http://localhost:8080/Brm/uocTinhCalo', this.weightGainData).subscribe(
      (res) => {
        if (res) {
          this.weightGainData.result = res;
        }
      },
      (error) => {
        this.toastr.error(error.message, 'Thông báo');
      }
    );
  }

  // kalo per day calulator
  public onKaloCalculator(e: any): void {
    this.api.post('http://localhost:8080/Brm/ketQua', this.kaloData).subscribe(
      (res) => {
        if (res) {
          this.kaloData.result = res;
        }
      },
      (error) => {
        this.toastr.error(error.message, 'Thông báo');
      }
    );
  }


  public onPhysicalMenu(e: any): void {
    this.api.post('http://localhost:8080/api/physical-menu', this.physicalMenuData).subscribe(
      (res) => {
        if (res) {
          this.physicalMenuData.result = res;
        }
      },
      (error) => {
        this.toastr.error(error.message, 'Thông báo');
      }
    );
  }

  public onPhenomenalMenu(e: any): void {
    let pathVal = this.collectData();
    this.api.post('http://localhost:8080/api/phenomenal-menu?hienTuong=' + pathVal).subscribe(
      (res) => {
        if (res) {
          this.resByHienTuong = res;
        }
      },
      (error) => {
        this.toastr.error(error.message, 'Thông báo');
      }
    );
  }

  public getHienTuongs(): void {
    this.api.get('http://localhost:8080/api/phenomenon').subscribe(
      (res) => {
        if (res) {
          this.phenomenals = res;
        }
      },
      (error) => {
        this.toastr.error(error.message, 'Thông báo');
      }
    );
  }

  public addBieuHien(bieuHien: any): void {
    let check = this.phenomenalSelected.find((item: any) => item.id == bieuHien?.id)
    if(check) {
      // let index = this.phenomenalSelected.findIndex(item => item.id = bieuHien.id)
      this.phenomenalSelected = this.phenomenalSelected.filter((item: any) => item.id != bieuHien?.id);
    }else {
      this.phenomenalSelected.push(bieuHien);
    }
  }

  collectData() {
    let me = this;
    let items = this.phenomenalSelected;
    let arr = [];
    for(let i = 0; i< items.length; i++) {
        arr.push(items[i].symptoms)
    }
    let query = arr.join(";");
    return query
  }

  public doSent() {
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
