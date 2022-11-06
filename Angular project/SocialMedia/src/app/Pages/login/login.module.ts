import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {CustomDatePipe} from "../../Shared/Pipes/customdate.pipe";



@NgModule({
  declarations: [
    LoginComponent,
    CustomDatePipe
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
