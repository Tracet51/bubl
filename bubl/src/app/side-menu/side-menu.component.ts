import { Component, OnInit } from '@angular/core';
import { Fin } from "src/app/DTOs/Fin";
import { FinData } from "src/app/data/fin-data";

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  fin: Fin;

  constructor() {
    this.fin = FinData[1];
  }

  ngOnInit() {
  }

  /* Set the width of the side navigation to 0 */
  closeNav() {
    // var grayDiv = document.body.querySelector(".gray-out-background")
    // grayDiv.style.display = "none"
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";

  }

}





