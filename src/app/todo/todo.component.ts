import { Component, OnInit } from '@angular/core';

interface elementToDo {
  nazwa: string;
  wykonane: boolean;
  kiedyWykonane: Date;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.less']
})
export class TodoComponent implements OnInit {

  lista = [];
  inputTekst: string;

  addToDo()
  {
     this.lista.push(this.inputTekst);

     this.lista = this.lista.filter(e => e != 'aa');

     this.inputTekst  = '';
  }

  constructor() { }

  ngOnInit() {
  }

}
