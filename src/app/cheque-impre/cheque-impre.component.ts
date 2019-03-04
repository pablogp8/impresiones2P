import { Component, OnInit } from '@angular/core';
import { chequeE } from './chequeE.modelo';
@Component({
  selector: 'app-cheque-impre',
  templateUrl: './cheque-impre.component.html',
  styleUrls: ['./cheque-impre.component.css']
})
export class ChequeImpreComponent implements OnInit {
 chequeU= new chequeE();
  constructor() { }

  ngOnInit() {
  }

}
