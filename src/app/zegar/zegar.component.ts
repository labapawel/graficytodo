import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-zegar",
  templateUrl: "./zegar.component.html",
  styleUrls: ["./zegar.component.less"]
})
export class ZegarComponent implements OnInit {
  constructor() {}
  godzina = 0;

  Godzina() {
    console.log(this.godzina);
    this.godzina++;
    if (this.godzina > 11) {
      this.godzina = 0;
    }

   // return this.godzina * 30;
  }

  ngOnInit() {
    setInterval((ts) => {
      this.Godzina();
    }, 1000);
  }
}
