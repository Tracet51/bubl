import { Component, OnInit, Input } from '@angular/core';

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

  constructor() {

  }

  ngOnInit() {
  }

}
