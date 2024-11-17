import { Component } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.scss']
})
export class AddMessageComponent {

  constructor(public messagesService: MessagesService) { }

  message: string = '';

  addMessage(): void {
    if(!this.message) return;
    this.messagesService.add(this.message);
    this.message = '';
  }
}
