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
    MatListModule
  ]
})
export class ProfileeditModule { }
