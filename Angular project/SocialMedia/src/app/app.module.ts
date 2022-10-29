import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { MenuComponent } from './Shared/menu/menu.component';
import { AdvertisementComponent } from './Shared/advertisement/advertisement.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SupportModule} from "./Pages/support/support.module";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AdvertisementComponent
  ],
  imports: [
    BrowserModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    BrowserAnimationsModule,
    SupportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
