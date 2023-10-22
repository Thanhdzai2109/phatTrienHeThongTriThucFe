import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HealthCareComponent } from './health-care.component';
import { ChatbotModule } from '@acpaas-ui-widgets/ngx-chatbot';


@NgModule({
  declarations: [HealthCareComponent],
  imports: [
    CommonModule,
  ]
})
export class HealthCareModule { }
