import { Component, OnInit } from '@angular/core';
import { BublData } from 'src/app/data/bubl-data'
import { Bubl } from "src/app/DTOs/Bubl";

@Component({
  selector: 'bubl-feed',
  templateUrl: './bubl-feed.component.html',
  styleUrls: ['./bubl-feed.component.css']
})
export class BublFeedComponent implements OnInit {
  title: string = 'bubl';
  numberOfRows: string[];
  bublData: Bubl[];

  constructor() { 
    this.numberOfRows = ["x","3", "jfh"];
    this.bublData = BublData;
  }

  ngOnInit() {
  }

}
