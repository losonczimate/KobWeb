import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatListModule} from "@angular/material/list";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    PostComponent
  ],
  exports: [
    PostComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    MatFormFieldModule,
    MatListModule,
    MatExpansionModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule,
    MatInputModule
  ]
})
export class PostModule { }
