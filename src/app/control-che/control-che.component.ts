import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control-che',
  templateUrl: './control-che.component.html',
  styleUrls: ['./control-che.component.css']
})
export class ControlCheComponent implements OnInit {
  numeros = [
    { n: 1 },{ n: 2 },{ n: 3 },{ n: 4 },{ n: 5 },
    { n: 6 },{ n: 7 },{ n: 8 },{ n: 9 },{ n: 10 },
    { n: 11 },{ n: 12 },{ n: 13 },{ n: 14 },{ n: 15 },
    { n: 16 },{ n: 17 },{ n: 18 },{ n: 19 },{ n: 20 },
    { n: 21 },{ n: 22 },{ n: 23 },{ n: 24 },{ n: 25 },
    { n: 26 },{ n: 27 },{ n: 28 },{ n: 29 },{ n: 30 },
    { n: 31 },{ n: 32 },{ n: 33 },{ n: 34 },{ n: 35 }
  ];
  numerosT2 =[
    { n: 1 },{ n: 2 },{ n: 3 },{ n: 4 },{ n: 5 }
  ]
  constructor() { }

  ngOnInit() {
  }

}
