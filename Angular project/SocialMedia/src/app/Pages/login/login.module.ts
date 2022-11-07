import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { SharedPipeModule } from 'src/app/Shared/shared-pipe/shared-pipe.module';



@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    SharedPipeModule,
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
