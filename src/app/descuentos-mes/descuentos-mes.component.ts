import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-descuentos-mes',
  templateUrl: './descuentos-mes.component.html',
  styleUrls: ['./descuentos-mes.component.css']
})
export class DescuentosMesComponent implements OnInit {
  numerosT2 =[
    { n: 1 },{ n: 2 },{ n: 3 },{ n: 4 },{ n: 5 }
  ]
  constructor() { }

  ngOnInit() {
  }

}
