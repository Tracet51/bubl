import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bubl-detail',
  templateUrl: './bubl-detail.component.html',
  styleUrls: ['./bubl-detail.component.css']
})
export class BublDetailComponent implements OnInit {
  @Input() yesVote = 0;  // makes it bindable
  @Input() noVote = 0;
  @Input() total = 0;
  @Input() daysRemaining = 0;
  @Input() summary = "";
  @Input() description = "";
  @Input() simple = "";

  constructor() { 
  }

  ngOnInit() {
    console.log(this.simple);
  }

}
