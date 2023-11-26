import {Component} from '@angular/core';
import {GptService} from "../../app/common/chat/gpt.service";
import {ToastrService} from "ngx-toastr";
import {FethApiService} from "../../app/common/api/feth-api.service";
import { DomSanitizer } from '@angular/platform-browser'
import * as $ from 'jquery';
import { forEach } from 'lodash-es';

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

  onSubmit = (text: any) => {
    if (text) {
      this.messages.push({ author: "you", message: text });
      this.chatbotService.callGPT(text).subscribe((response: any) => {
        this.messages.push({ author: "bot", message: this.sanitized.bypassSecurityTrustHtml(response) });
        if(text == 'help'){
          setTimeout(() => {
            this.afterRenderHelp();
          })
        }
        this.newMessage = '';
      }, error => {
        this.toastr.error(error.message,'Thông báo')
      });
    }
  }

  afterRenderHelp = () => {
    let chatBodyEl = $('#chatbot');
    let buttons = chatBodyEl.find('button');
    for(let i = 0; i<= buttons.length; i++){
      let btn = $(buttons[i]);
      let text = btn.find('text').text();
      btn.on('click', () => {
        this.onClickButton(text);
      })
    }
  }

  show = (e?: any) => {
    this.showChat = true;
  }

  close = (e?: any) => {
    this.showChat = false;
  }

  onClickButton = (text: any) => {
    this.onSubmit(`${text}`);
  }

}
