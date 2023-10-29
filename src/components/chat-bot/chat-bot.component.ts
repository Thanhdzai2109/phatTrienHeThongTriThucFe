import {Component} from '@angular/core';
import {GptService} from "../../app/common/chat/gpt.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.scss']
})
export class ChatBotComponent {
  messages: string[] = [];
  newMessage: string = '';

  constructor(private chatbotService: GptService, private toastr: ToastrService,) {

  }

  showChat = false;

  onSubmit = () => {
    if (this.newMessage) {
      this.messages.push(`You: ${this.newMessage}`);
      this.chatbotService.callGPT(this.newMessage).subscribe((response: any) => {
        this.messages.push(`Chatbot: ${response.message}`);
        this.newMessage = '';
      }, error => {
        this.toastr.error(error.message,'Thông báo')
      });
    }
  }

  show = (e?: any) => {
    this.showChat = true;
  }

  close = (e?: any) => {
    this.showChat = false;
  }

}
