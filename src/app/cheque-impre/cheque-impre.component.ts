import { Component, OnInit } from '@angular/core';
import { chequeE } from './chequeE.modelo';
import { ChequeModelo } from './ModeloCheque';
@Component({
  selector: 'app-cheque-impre',
  templateUrl: './cheque-impre.component.html',
  styleUrls: ['./cheque-impre.component.css']
})
export class ChequeImpreComponent implements OnInit {
	chequeU = null;
	
  	//chequeU = null;

	constructor() 
	{ 
		let array = {
			id_prestamo: 2,
			no_contrato: 5,
			no_cheque: 2030,
			contrasenia: '12345',
			liquido_formateado: '67',
			liquido_numeros: 80,
			liquido_letras: 'sesenta y siete',
			nombre_deudor: 'Christopher Lopez',
			fecha_numeros: '26-03-2019',
			fecha_letras: '26 de Marzo del 2019',
		  }
		  this.chequeU = new ChequeModelo(array);
	}

  	ngOnInit() {
  	}
  
}
