import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileeditRoutingModule } from './profileedit-routing.module';
import { ProfileeditComponent } from './profileedit.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {FlexLayoutModule, FlexModule} from "@angular/flex-layout";
import {MatChipsModule} from "@angular/material/chips";
import {MatListModule} from "@angular/material/list";
import {SharedPipeModule} from "../../Shared/shared-pipe/shared-pipe.module";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    ProfileeditComponent
  ],
  imports: [
    CommonModule,
    ProfileeditRoutingModule,
    MatGridListModule,
    FlexModule,
    MatChipsModule,
    SharedPipeModule,
    FlexLayoutModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class ProfileeditModule { }
