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
        MatButtonModule
    ]
})
export class FeedModule { }
