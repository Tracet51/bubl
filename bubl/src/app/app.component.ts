import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'bubl';
  numberOfRows: string[];
  bublData: { "yes": number; "no": number; "total": number; "daysRemaining": number; "summary": string; "description": string; }[];
  
  constructor(){
    this.numberOfRows = ["x","3", "jfh"];
    this.bublData = [
      {
        "yes": 10,
        "no": 50,
        "total": 100,
        "daysRemaining": 90,
        "summary": "This is a summary",
        "description": "Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum."
      },
      {
        "yes": 10,
        "no": 20,
        "total": 40,
        "daysRemaining": 33,
        "summary": "No Nachos @ Work",
        "description": "Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum."
      }
    ]
  }
}
