import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LizComponent } from './liz/liz.component';
import { FooterDonatonComponent } from './footer-donaton/footer-donaton.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LizComponent,
    FooterDonatonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  
  

  providers: [],
  bootstrap: [AppComponent]
})

              // Add the FormsModule here

export class AppModule { }
