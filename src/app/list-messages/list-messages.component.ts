import { Component } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-list-messages',
  templateUrl: './list-messages.component.html',
  styleUrls: ['./list-messages.component.scss']
})
export class ListMessagesComponent {

  constructor(public messagesService: MessagesService) { }

  messages: string[] = this.messagesService.messages;
  
}
