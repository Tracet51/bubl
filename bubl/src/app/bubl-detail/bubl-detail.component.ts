import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BublData, defaultComments } from '../data/bubl-data';
import { Bubl } from '../DTOs/Bubl';
import { BublComment } from '../DTOs/BublComment';

@Component({
  selector: 'bubl-detail',
  templateUrl: './bubl-detail.component.html',
  styleUrls: ['./bubl-detail.component.css']
})
export class BublDetailComponent implements OnInit {
  bubl: Bubl;
  id: number;
  currentFinID: number = 3;
  commentString = "";

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.getBublDetails(this.id);
  }

  getBublDetails(id: number) {
    var result = BublData.find((bubl) => {
      return bubl.id === this.id;
    })

    this.bubl = result;
  }

  upVote() {
    this.bubl.yes += 1
  }

  downVote(){
    this.bubl.no += 1
  }

  createNewComment() {
    let newComment: BublComment = {
      comment: this.commentString,
      id: Math.floor(Math.random()*10000),
      date: new Date(),
      finID: this.currentFinID,
      bublID: this.bubl.id
    };

    defaultComments.push(newComment);
    this.bubl.comments.push(newComment);
    this.commentString = ""

  }

}
