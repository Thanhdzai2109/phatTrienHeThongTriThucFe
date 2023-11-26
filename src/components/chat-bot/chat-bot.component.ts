import {Component} from '@angular/core';
import {GptService} from "../../app/common/chat/gpt.service";
import {ToastrService} from "ngx-toastr";
import {FethApiService} from "../../app/common/api/feth-api.service";
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.scss']
})
export class ChatBotComponent {
  messages: any = [];
  newMessage: string = '';

  constructor(private chatbotService: GptService, private toastr: ToastrService,
              private api: FethApiService,private sanitized: DomSanitizer) {

  }

  showChat = false;

  onSubmit = () => {
    if (this.newMessage) {
      this.messages.push({ author: "you", message: this.newMessage });
      this.chatbotService.callGPT(this.newMessage).subscribe((response: any) => {
        this.messages.push({ author: "bot", message: this.sanitized.bypassSecurityTrustHtml(response) });
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
