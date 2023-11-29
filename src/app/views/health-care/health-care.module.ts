import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocsComponentsModule } from './../../../components'

import { HealthCareComponent } from './health-care.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatModule } from '@progress/kendo-angular-conversational-ui';
import { FormsModule } from '@angular/forms';

import {
  AvatarModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  FormModule,
  GridModule,
  NavModule,
  ProgressModule,
  TableModule,
  TabsModule,
  ModalModule
} from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ChartjsModule } from '@coreui/angular-chartjs';
import {MatCheckboxModule} from "@angular/material/checkbox";


@NgModule({
  declarations: [HealthCareComponent],
    imports: [
        CommonModule,
        ChatModule,
        BrowserAnimationsModule,
        BrowserModule,
        DocsComponentsModule,
        AvatarModule,
        ButtonModule,
        CardModule,
        FormModule,
        GridModule,
        NavModule,
        TableModule,
        TabsModule,
        ModalModule,
        FormsModule,
        MatCheckboxModule
    ]
})
export class HealthCareModule { }
