import { Component } from '@angular/core';
import { Bubl } from "./DTOs/Bubl";
import { BublData } from "./data/bubl-data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'bubl';
  numberOfRows: string[];
  bublData: Array<Bubl>;

  constructor() {
    this.bublData = BublData;
  }

  rowClick(row: Object) {
    console.log(row);
  }
}