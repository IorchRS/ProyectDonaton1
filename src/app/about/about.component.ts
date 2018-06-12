import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import {Observable, EMPTY} from 'rxjs';
import {map} from 'rxjs/operators';

var firebaseConfig  = {
  apiKey: "AIzaSyB_qRYAy26x0TWcSADRf0qZklbbiFnpEMc",
  authDomain: "subirhoy.firebaseapp.com",
  databaseURL: "https://subirhoy.firebaseio.com",
  projectId: "subirhoy",
  storageBucket: "subirhoy.appspot.com",
  messagingSenderId: "460600588442"
};

interface Post {
  nombre: string;
  telefono: number;
direccion: string;
  correo: string;
email: string;
ciudad: string;
estado: string;
}
interface PostId extends Post { 
  id: string; 
  posts: any;
}
@NgModule({
  declarations: [
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    
    AngularFireModule.initializeApp(firebaseConfig),  // Add this
    AngularFirestoreModule,  
  ],
  
  

  providers: [],

})

              // Add the FormsModule here

export class AppModule { }

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  nombre: string="";
  telefono: number;
direccion: string="";
  
email: string="";
ciudad: string="";
estado: string="";

  postsCol: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;
  constructor(private route: ActivatedRoute, private afs: AngularFirestore) {
    this.route.params.subscribe(res => console.log(res.id));
   }

   ngOnInit() { 
    this.postsCol = this.afs.collection('personas');
    this.posts = this.postsCol.valueChanges();
    
  }
 
 
  addPost() {
    this.afs.collection('personas').add({'nombre': this.nombre, 'telefono': this.telefono,'direccion': this.direccion,'email': this.email,'ciudad': this.ciudad,'estado': this.estado});
  }

}
