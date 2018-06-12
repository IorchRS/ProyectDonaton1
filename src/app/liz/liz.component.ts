import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import {Observable} from 'rxjs';
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
  nombre:string;
  donacion: string;
  correo: string;
  telefono: number;
  confirmacion: string;
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
  selector: 'app-liz',
  templateUrl: './liz.component.html',
  styleUrls: ['./liz.component.scss']
})
export class LizComponent implements OnInit {
  itemCount:number=0;
  Text: string = 'Aquí puedes subir lo que donaras'
  lista: string = 'Tú caja de donacion tiene una lista de '
  btnText: string = 'Agregar'; 
  ponleMas: string="ponle UN TEXTITO";
  goalText: string = ''; 
  botonColor: string = "btn1";
  goals=[];
  
/**lo de firebase */
postDoc: AngularFirestoreDocument<Post>;
  post: Observable<Post>;
  nombre: string;
  correo: string;
  donacion: string;
  telefono:number;
  confirmacion: string;

  postsCol: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;
  
  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.itemCount = this.goals.length;
    /**lo de firebase */
    this.postsCol = this.afs.collection('posts');
    this.posts = this.postsCol.valueChanges();
    
  }
 
  addPost() {
    this.donacion = this.goals.toString();
    this.afs.collection('posts').add({'nombre': this.nombre,'telefono': this.telefono,'email': this.correo, 'donacion': this.donacion});
  }
  addItem() {
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goals.length;
  }


}
