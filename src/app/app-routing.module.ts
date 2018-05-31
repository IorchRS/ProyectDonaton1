import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';     // Add this
import { AboutComponent } from './about/about.component'; 
import { LizComponent } from './liz/liz.component';  // Add this
import { CaratulaDComponent } from './caratula-d/caratula-d.component';
const routes: Routes = [ 
 
 
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'caratula',
    component: CaratulaDComponent
  },
  {
    path: 'about/:id',
    component: AboutComponent
  },

  {
    path: 'liz',
    component: LizComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
