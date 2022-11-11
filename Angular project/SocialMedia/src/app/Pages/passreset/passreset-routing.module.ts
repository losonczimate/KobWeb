import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PassresetComponent } from './passreset.component';

const routes: Routes = [{ path: '', component: PassresetComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PassresetRoutingModule { }
