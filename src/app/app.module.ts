import {NgModule} from '@angular/core';
import {
  HashLocationStrategy,
  LocationStrategy,
  PathLocationStrategy,
} from '@angular/common';
import {BrowserModule, Title} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {NgScrollbarModule} from 'ngx-scrollbar';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {ToastrModule} from 'ngx-toastr';
import {AppComponent} from './app.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
} from './containers';

import {
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FooterModule,
  FormModule,
  GridModule,
  HeaderModule,
  ListGroupModule,
  NavModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  TabsModule,
  UtilitiesModule,
  ModalModule
} from '@coreui/angular';

import {IconModule, IconSetService} from '@coreui/icons-angular';
import {CertificateModule} from './views/certificate/certificate.module';
import {HealthLayoutComponent} from './containers/health-layout/health-layout.component';
import {HealthHeaderComponent} from './containers/health-layout/health-header/health-header.component';
import {AuthService} from "./common/auth/auth.service";
import { UserProfileComponent } from './views/user-profile/user-profile.component';


const APP_CONTAINERS = [
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
];

@NgModule({
  declarations: [AppComponent, ...APP_CONTAINERS, HealthLayoutComponent, HealthHeaderComponent, UserProfileComponent,],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AvatarModule,
    BreadcrumbModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    FooterModule,
    DropdownModule,
    GridModule,
    HeaderModule,
    SidebarModule,
    IconModule,
    HttpClientModule,
    NavModule,
    ButtonModule,
    FormModule,
    UtilitiesModule,
    ButtonGroupModule,
    ReactiveFormsModule,
    SidebarModule,
    SharedModule,
    TabsModule,
    ToastrModule.forRoot(),
    ListGroupModule,
    ProgressModule,
    BadgeModule,
    ListGroupModule,
    CardModule,
    NgScrollbarModule,
    CertificateModule,
    ModalModule,
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthService,
      multi: true,
    },
    IconSetService,
    Title,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {
}
