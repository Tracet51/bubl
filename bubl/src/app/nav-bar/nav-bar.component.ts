import { Component, OnInit } from '@angular/core';
import { FinData } from "src/app/data/fin-data";
import { Fin } from "src/app/DTOs/Fin";

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  officeName: string;
  fin: Fin = {
    firstName: "",
    lastName: "",
    id: 0,
    officeName: "",
    picture: ""
  };

  constructor() { 
    this.fin = FinData[1];
    this.officeName = this.fin.officeName;
  }

  ngOnInit() {
  }

  /* Set the width of the side navigation to 250px */
  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

}
