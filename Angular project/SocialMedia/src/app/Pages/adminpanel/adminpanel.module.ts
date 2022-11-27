import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminpanelComponent} from "./adminpanel.component";
import {FlexModule} from "@angular/flex-layout";
import {MatCardModule} from "@angular/material/card";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {AdminpanelRoutingModule} from "./adminpanel-routing.module";
import {MatChipsModule} from "@angular/material/chips";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    AdminpanelComponent
  ],
  imports: [
    CommonModule,
    FlexModule,
    MatCardModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    AdminpanelRoutingModule,
    MatChipsModule,
    MatListModule,
    MatIconModule
  ]
})
export class AdminpanelModule { }
