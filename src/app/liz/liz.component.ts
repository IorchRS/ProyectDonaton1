import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liz',
  templateUrl: './liz.component.html',
  styleUrls: ['./liz.component.scss']
})
export class LizComponent implements OnInit {
  itemCount:number=4;
  Text: string = 'Agrga un Item'
  lista: string = 'tu caja tiene una lista de '
  btnText: string = 'ponle algo'; 
  ponleMas: string="ponle UN TEXTITO";
  goalText: string = 'My first life goal'; 
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
  addTextito(){
this.goals.push("un textito")
this.goalText='';
this.itemCount=this.goals.length;

  }

}
