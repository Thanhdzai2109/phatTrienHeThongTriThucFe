import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificateComponent } from './certificate/certificate.component';
import{CertificateRoutingModule} from'./certificate-routing.module'
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    CertificateComponent
  ],
  imports: [
    CommonModule,
    CertificateRoutingModule,
    ToastrModule.forRoot(),
  ]
})
export class CertificateModule { }
