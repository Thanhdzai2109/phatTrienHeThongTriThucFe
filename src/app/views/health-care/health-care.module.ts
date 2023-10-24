import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocsComponentsModule } from './../../../components'

import { HealthCareComponent } from './health-care.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatModule } from '@progress/kendo-angular-conversational-ui';


@NgModule({
  declarations: [HealthCareComponent],
  imports: [
    CommonModule,
    ChatModule,
    BrowserAnimationsModule,
    BrowserModule,
    DocsComponentsModule
  ]
})
export class HealthCareModule { }
