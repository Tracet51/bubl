import { Component, OnInit } from '@angular/core';
import { Bubl } from "src/app/DTOs/Bubl";
import { BublData } from "src/app/data/bubl-data"
import { Router } from "@angular/router";

@Component({
  selector: 'create-bubl-form',
  templateUrl: './create-bubl-form.component.html',
  styleUrls: ['./create-bubl-form.component.css']
})
export class CreateBublFormComponent implements OnInit {
  summary = "";
  description = "";
  dueDate = "";

  constructor(private router: Router) {
  }

  ngOnInit() {

  }

  createBubl(){

    const oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
    const todayDate = new Date();
    let daysRemaining = Math.round(Date.parse(this.dueDate) - todayDate.getTime()/(oneDay));
    daysRemaining += 1; 

    if (daysRemaining > 91 || daysRemaining < 1) {
      alert("Date needs to be between 1 and 90 days from now")
    }
    else {

      let newBubl: Bubl = {
        id: Math.floor(Math.random()*100),
        summary: this.summary,
        description: this.description,
        daysRemaining: daysRemaining,
        no: 0,
        yes: 0,
        total: 100,
        comments: []
      };
  
      BublData.push(newBubl);
      this.router.navigateByUrl('/bubl-feed-page');
    }
    }

}
