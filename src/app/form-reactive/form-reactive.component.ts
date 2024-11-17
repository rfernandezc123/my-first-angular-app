import { Component } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.scss']
})
export class FormReactiveComponent {

  constructor(private fb: FormBuilder){

  }

  get name(){
    return this.form.get('name') as FormControl;
  }
  get email(){
    return this.form.get('email') as FormControl;
  }

  form = this.fb.group({
    'name': ['', Validators.required],
    'email': ['', [Validators.required, Validators.email]]
  });
  
  onSubmit(){
    console.log(this.form.value);
  }
}
