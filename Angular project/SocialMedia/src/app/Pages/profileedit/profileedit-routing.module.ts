import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileeditComponent} from './profileedit.component';

const routes: Routes = [{ path: '', component: ProfileeditComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileeditRoutingModule { }
