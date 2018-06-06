import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LizComponent } from './liz/liz.component';
import { FooterDonatonComponent } from './footer-donaton/footer-donaton.component';

import { CaratulaDComponent } from './caratula-d/caratula-d.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

var firebaseConfig  = {
  apiKey: "AIzaSyB_qRYAy26x0TWcSADRf0qZklbbiFnpEMc",
  authDomain: "subirhoy.firebaseapp.com",
  databaseURL: "https://subirhoy.firebaseio.com",
  projectId: "subirhoy",
  storageBucket: "subirhoy.appspot.com",
  messagingSenderId: "460600588442"
};


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LizComponent,
    FooterDonatonComponent,
    CaratulaDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),  // Add this
    AngularFirestoreModule,  
  ],
  
  

  providers: [],
  bootstrap: [AppComponent]
})

              // Add the FormsModule here

export class AppModule { }
