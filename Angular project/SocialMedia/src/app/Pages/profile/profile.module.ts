import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {FlexLayoutModule, FlexModule} from "@angular/flex-layout";
import {MatChipsModule} from "@angular/material/chips";
import {MatListModule} from "@angular/material/list";
import {SharedPipeModule} from "../../Shared/shared-pipe/shared-pipe.module";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MatGridListModule,
    FlexModule,
    MatChipsModule,
    MatListModule,
    SharedPipeModule,
    FlexLayoutModule,
    MatCardModule
  ]
})
export class ProfileModule { }
