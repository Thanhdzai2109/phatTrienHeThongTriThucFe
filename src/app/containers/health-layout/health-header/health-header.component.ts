import { Component, Input } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import {AuthService} from "../../../common/auth/auth.service";

@Component({
  selector: 'app-health-header',
  templateUrl: './health-header.component.html',
  styleUrls: ['./health-header.component.scss']
})
export class HealthHeaderComponent extends HeaderComponent {
  @Input() sidebarId: string = "sidebar";

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)

  constructor(private classToggler: ClassToggleService,
              private auth: AuthService,
              ) {
    super();
  }
  public lockOut(){
    this.auth.removeToken();
  }
}
