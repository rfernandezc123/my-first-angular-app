import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  showAlert: boolean = false;
  showInConsole(value: string) {
    console.log(value);
    this.showAlert = true;
  }
}
