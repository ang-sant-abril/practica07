import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-ng-style',
  templateUrl: './directiva-ng-style.component.html',
  styleUrls: ['./directiva-ng-style.component.css']
})
export class DirectivaNgStyleComponent implements OnInit {

  puntuacion: number;

  constructor() { }

  ngOnInit(): void {
  }

  getColor(): string {
    if (this.puntuacion >= 7) {
      return 'green';
    } else if(this.puntuacion >= 5) {
      return 'yellow';
    } else {
      return 'red';
    }
  }

}
