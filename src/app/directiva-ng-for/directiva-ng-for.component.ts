import { Component, OnInit } from '@angular/core';
import { Proveedor } from '../models/proveedor.model';

@Component({
  selector: 'app-directiva-ng-for',
  templateUrl: './directiva-ng-for.component.html',
  styleUrls: ['./directiva-ng-for.component.css']
})
export class DirectivaNgForComponent implements OnInit {

  proveedores: Proveedor[] = [
    new Proveedor('Gas Natural','A12345566'),
    new Proveedor('Telfónica','A87654312'),
    new Proveedor('Jazztel','A76287612'),
  ]

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.proveedores.push(new Proveedor('Iberdrola','A23456718'))
    }, 2000)
  }

}
