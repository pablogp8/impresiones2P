import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.css']
})
export class EjemploComponent implements OnInit {
  hola = [
    { n:1 },
    { n:2 },
    { n:3 },
    { n:4 },
  ];
  constructor() { }

  ngOnInit() {
  }

}
