import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FethApiService } from './common/api/feth-api.service';
import { LocalStorageService } from './common/api/local-storage-service.service'
import * as jwtDecode from 'jwt-decode';

import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from './icons/icon-subset';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  title = 'Tư vấn sức khỏe';
  userInfo: any = {}
  user: any = {}

  constructor(
    private apiService: FethApiService,
    private localStorage: LocalStorageService,
    private router: Router,
    private titleService: Title,
    private iconSetService: IconSetService,
  ) {
    titleService.setTitle(this.title);
    // iconSet singleton
    iconSetService.icons = { ...iconSubset };
  }

  token: any = null

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
    });
    this.token = this.localStorage.getItem("token");
    if(this.token) {
      this.userInfo = jwtDecode.default(this.token);
      this.getUser();
    }
  }

  public getUser(): void {
    this.apiService.get('http://localhost:8080/app_user/search/' + this.userInfo.uid).subscribe(
      (res) => {
        if (res) {
          this.localStorage.setItem('user' ,res);
        }
      }
    );
  }
}
