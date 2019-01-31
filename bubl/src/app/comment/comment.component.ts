import { Component, OnInit, Input } from '@angular/core';
import { BublComment } from '../DTOs/BublComment';
import { BublData } from '../data/bubl-data';
import { FinData } from '../data/fin-data';
import { Fin } from '../DTOs/Fin';

@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment: BublComment = {
    id: 0,
    comment: "",
    date: new Date(),
    finID: 0,
    bublID: 0
  }
  currentFin: Fin = {
    id: 0,
    firstName: "",
    lastName: "",
    officeName: "",
    picture: "",
  }

  constructor() {

  }

  ngOnInit() {
    this.currentFin = FinData.find((fin) => {
      return fin.id === this.comment.finID
    })
    console.log(this.currentFin)
  }
}