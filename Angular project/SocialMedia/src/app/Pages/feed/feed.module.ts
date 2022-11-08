import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { FeedComponent } from './feed.component';
import {MatIconModule} from "@angular/material/icon";
import {FlexModule} from "@angular/flex-layout";
import {MatChipsModule} from "@angular/material/chips";
import {MatListModule} from "@angular/material/list";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from '@angular/material/button';
import { SharedPipeModule } from '../../Shared/shared-pipe/shared-pipe.module';
import {AdvertModule} from "../advert/advert.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatExpansionModule} from '@angular/material/expansion';
import {PostModule} from "../post/post.module";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    FeedComponent,
  ],
  imports: [
    SharedPipeModule,
    CommonModule,
    FeedRoutingModule,
    MatIconModule,
    MatGridListModule,
    FlexModule,
    MatChipsModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    AdvertModule,
    MatFormFieldModule,
    MatExpansionModule,
    PostModule,
    MatInputModule
  ]
})
export class FeedModule { }
