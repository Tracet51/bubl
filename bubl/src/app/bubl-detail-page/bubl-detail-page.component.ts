import { Component, OnInit } from '@angular/core';
import { BublData } from "src/app/data/bubl-data";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'bubl-detail-page',
  templateUrl: './bubl-detail-page.component.html',
  styleUrls: ['./bubl-detail-page.component.css']
})
export class BublDetailPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
