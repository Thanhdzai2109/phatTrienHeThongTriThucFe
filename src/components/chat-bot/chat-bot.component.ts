import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.scss']
})
export class ChatBotComponent {

  constructor() {
    
  }

  showChat = false;

  onSubmit = (e: any) => {
    
  }

  show = (e?: any) => {
    this.showChat = true;
  }

  close = (e?: any) => {
    this.showChat = false;
  }

}
