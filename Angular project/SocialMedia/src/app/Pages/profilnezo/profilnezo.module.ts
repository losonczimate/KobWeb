import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilnezoRoutingModule } from './profilnezo-routing.module';
import { ProfilnezoComponent } from './profilnezo.component';
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatChipsModule} from "@angular/material/chips";
import {FlexLayoutModule, FlexModule} from "@angular/flex-layout";
import {SharedPipeModule} from "../../Shared/shared-pipe/shared-pipe.module";


@NgModule({
  declarations: [
    ProfilnezoComponent
  ],
  imports: [
    CommonModule,
    ProfilnezoRoutingModule,
    MatCardModule,
    MatListModule,
    MatChipsModule,
    FlexModule,
    FlexLayoutModule,
    SharedPipeModule
  ]
})
export class ProfilnezoModule { }
