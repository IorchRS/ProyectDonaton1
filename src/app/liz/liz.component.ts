import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liz',
  templateUrl: './liz.component.html',
  styleUrls: ['./liz.component.scss']
})
export class LizComponent implements OnInit {
  itemCount:number=0;
  Text: string = 'aqui puedes subir lo que donaras'
  lista: string = 'tu caja de donacion tiene una lista de '
  btnText: string = 'agregar'; 
  ponleMas: string="ponle UN TEXTITO";
  goalText: string = ''; 
  botonColor: string = "btn1";
  goals=[];
  constructor() { }

  ngOnInit() {
    this.itemCount = this.goals.length;
  }


  addItem() {
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goals.length;
  }


}
