import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {
  public isEdit: Boolean = false
  public user: any = {
    username: 'loi',
    email: 'loi',

  }
}
