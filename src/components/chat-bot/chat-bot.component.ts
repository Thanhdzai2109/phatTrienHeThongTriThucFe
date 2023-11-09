import {Component} from '@angular/core';
import {GptService} from "../../app/common/chat/gpt.service";
import {ToastrService} from "ngx-toastr";
import {FethApiService} from "../../app/common/api/feth-api.service";

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.scss']
})
export class ChatBotComponent {
  messages: string[] = [];
  newMessage: string = '';

  constructor(private chatbotService: GptService, private toastr: ToastrService,
              private api: FethApiService,) {

  }

  showChat = false;

  onSubmit = () => {
    if (this.newMessage) {
      debugger
      this.messages.push(`You: ${this.newMessage}`);
      this.chatbotService.callGPT(this.newMessage).subscribe((response: any) => {
        this.messages.push(`Chatbot: ${response}`);
        this.newMessage = '';
        console.log("dâ",response)

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
