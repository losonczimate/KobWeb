import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { FeedComponent } from './feed.component';
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    FeedComponent
  ],
    imports: [
        CommonModule,
        FeedRoutingModule,
        MatIconModule
    ]
})
export class FeedModule { }
