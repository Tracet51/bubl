import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'bubl-row',
  templateUrl: './bubl-row.component.html',
  styleUrls: ['./bubl-row.component.css']
})
export class BublRowComponent implements OnInit {
  @Input() yesVote = 0;  // makes it bindable
  @Input() noVote = 0;
  @Input() total = 0;
  @Input() daysRemaining = 0;
  @Input() summary = "";
  @Input() description = "";
  @Input() id = 0;
  yesPercent = 0;
  noPercent = 0;

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.noPercent = (this.noVote/(this.noVote+this.yesVote))*100;
    this.yesPercent = (this.yesVote/(this.noVote + this.yesVote))*100;
  }

  rowClick() {
    // console.log(this.summary);
    // this.router.navigate(['/bubl-detail-page', {id: "something simple"}]);

  }
}
