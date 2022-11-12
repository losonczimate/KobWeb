import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KovetokComponent } from './kovetok.component';

const routes: Routes = [{ path: ':searched', component: KovetokComponent },{ path: '', component: KovetokComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KovetokRoutingModule { }
