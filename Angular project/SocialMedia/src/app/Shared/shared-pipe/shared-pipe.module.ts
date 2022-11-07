import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDatePipe } from '../Pipes/customdate.pipe';



@NgModule({
  declarations: [CustomDatePipe],
  exports: [CustomDatePipe],
  imports: [
    CommonModule,
  ]
})
export class SharedPipeModule { }
