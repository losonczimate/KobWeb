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
import {CustomDatePipe} from "../../Shared/Pipes/customdate.pipe";
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    FeedComponent,
    CustomDatePipe
  ],
    imports: [
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
