import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OtpComponent} from "./otp.component";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {FlexModule} from "@angular/flex-layout";
import {NgOtpInputModule} from "ng-otp-input";
import {OtpRoutingModule} from "./otp-routing.module";

@NgModule({
  declarations: [
    OtpComponent
  ],
  imports: [
    CommonModule,
    OtpRoutingModule,
    MatCardModule,
    MatButtonModule,
    FlexModule,
    NgOtpInputModule
  ]
})
export class OtpModule { }
