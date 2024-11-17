import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {

  textColor: string = '';

  changeColor(color: string):void {
    this.textColor =  color;
  }

  buttonDisabled: boolean = false;

}
