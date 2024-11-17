import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { FormComponent } from './form/form.component';
import { BuclesComponent } from './bucles/bucles.component';
import { SwitchComponent } from './switch/switch.component';
import { Form2Component } from './form2/form2.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { ChildrenComponent } from './children/children.component';
import { AddMessageComponent } from './add-message/add-message.component';
import { ListMessagesComponent } from './list-messages/list-messages.component';


@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    ButtonsComponent,
    FormComponent,
    BuclesComponent,
    SwitchComponent,
    Form2Component,
    FormReactiveComponent,
    ChildrenComponent,
    AddMessageComponent,
    ListMessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
