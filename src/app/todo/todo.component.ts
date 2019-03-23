import { Component, OnInit } from "@angular/core";

interface elementToDo {
  nazwa: string;
  wykonane: boolean;
  kiedyWykonane: Date;
}

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.less"]
})
export class TodoComponent implements OnInit {
  lista: Array<elementToDo> = [];
  listaDoWykonania: Array<elementToDo>;

  inputTekst: string;
  wyszukaj: string = "";

  addToDo() {
    let nowyelement: elementToDo = {
      nazwa: this.inputTekst,
      wykonane: false,
      kiedyWykonane: null
    };
    this.lista.push(nowyelement);
    this.inputTekst = '';
    this.szukaj(this.wyszukaj);
  }

  szukaj(coSzukac: string) {
    if (coSzukac && coSzukac == '')
      this.listaDoWykonania = this.lista.filter(e => !e.wykonane);
    else
      this.listaDoWykonania = this.lista.filter(
        e =>
          e.nazwa
            .toLowerCase()
            .trim()
            .includes(coSzukac.toLowerCase()) && !e.wykonane
      );
  }

  usun(item) {
    this.lista = this.lista.filter(e => e != item);
    this.szukaj(this.wyszukaj);
  }

  constructor() {}

  ngOnInit() {
    this.szukaj(this.wyszukaj);

  }
}
