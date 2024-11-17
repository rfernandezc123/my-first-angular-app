import { Component } from '@angular/core';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss']
})
export class Form2Component {
  person = {
    name: '',
    age: ''
  };

  submit() {
    console.log('Person:', this.person);
  }
}
