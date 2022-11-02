import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvertRoutingModule } from './advert-routing.module';
import { AdvertComponent } from './advert.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {ExtendedModule} from "@angular/flex-layout";


@NgModule({
  declarations: [
    AdvertComponent
  ],
  exports: [
    AdvertComponent
  ],
  imports: [
    CommonModule,
    AdvertRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    ExtendedModule
  ]
})
export class AdvertModule { }
