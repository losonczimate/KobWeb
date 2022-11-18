import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginphonenumberComponent} from "./loginphonenumber.component";
import {MatCardModule} from "@angular/material/card";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {FlexModule} from "@angular/flex-layout";
import {LoginphonenumberRoutingModule} from "./loginphonenumber-routing.module"


@NgModule({
  declarations: [
    LoginphonenumberComponent
  ],
  imports: [
    LoginphonenumberRoutingModule,
    CommonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    FlexModule
  ]
})
export class LoginphonenumberModule { }
