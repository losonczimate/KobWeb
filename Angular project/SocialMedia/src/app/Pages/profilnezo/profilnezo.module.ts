import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilnezoRoutingModule } from './profilnezo-routing.module';
import { ProfilnezoComponent } from './profilnezo.component';


@NgModule({
  declarations: [
    ProfilnezoComponent
  ],
  imports: [
    CommonModule,
    ProfilnezoRoutingModule
  ]
})
export class ProfilnezoModule { }
