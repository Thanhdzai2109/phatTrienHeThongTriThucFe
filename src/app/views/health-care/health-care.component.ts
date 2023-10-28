import { Component } from '@angular/core';


@Component({
  selector: 'app-health-care',
  templateUrl: './health-care.component.html',
  styleUrls: ['./health-care.component.scss'],
})
export class HealthCareComponent {
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
}
