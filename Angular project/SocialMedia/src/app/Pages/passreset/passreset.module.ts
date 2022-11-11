import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassresetComponent } from './passreset.component';
import {MatCardModule} from "@angular/material/card";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {PassresetRoutingModule} from "./passreset-routing.module";



@NgModule({
  declarations: [
    PassresetComponent
  ],
  imports: [
    CommonModule,
    PassresetRoutingModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
  ]
})
export class PassresetModule { }
