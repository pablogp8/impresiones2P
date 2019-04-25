import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
export class ChequeModelo{
	
	datos : Datos;
	cuentas = new Array<any>();
	filas_texto: number = 22;    
	columnas_texto : number = 97;
	paginas : any = null;

    constructor(arr)
    {
		let datos : Datos = {
			id_prestamo : arr.id_prestamo,
			no_contrato : arr.no_contrato,
			no_cheque : arr.no_cheque,
			contrasenia : arr.contrasenia,
			liquido_formateado : arr.liquido_formateado,
			liquido_numeros : arr.liquido_numeros,
			liquido_letras : arr.liquido_letras,
			nombre_deudor : arr.nombre_deudor,
			fecha_numeros : arr.fecha_numeros,
			fecha_letras : arr.fecha_letras
		};
		this.datos = datos;
		this.ejemploCuentas();			//Insertar cuentas en cheque
		this.espacioCuenta();

	}

	public espacioCuenta(){
		let paginas = new Array<any>();
		let pagina = new Array<any>();
		let filas : number = this.filas_texto;
		let espacio : number = 0;
		let total_debe:number = 0;
		let total_haber:number = 0;
		let tipo_cuenta = "";
		for(let x = 0 ; x < this.cuentas.length; x++){
        let cuenta = this.cuentas[x];
				if(cuenta.tipo ==  "CuentaA"){
					espacio = this.lineasCuentaA(cuenta.cuenta);
					let valores = this.totalesCuentaA(cuenta.cuenta);
					total_debe  += valores.debe;
					total_haber += valores.haber;
					
				}else if(cuenta.tipo ==  "CuentaB"){
					espacio = this.lineasCuentaB(cuenta.cuenta);
					let valores = this.totalesCuentaB(cuenta.cuenta);
					total_debe  += valores.debe;
					total_haber += valores.haber;
					
				}else if(cuenta.tipo ==  "CuentasC"){
					espacio = this.lineasCuentasC(cuenta.cuenta);
					let valores= this.totalesCuentasC(cuenta.cuenta);
					total_debe  += valores.debe;
					total_haber += valores.haber;
					
				}else if(cuenta.tipo ==  "CuentasA"){
					espacio = this.lineasCuentasA(cuenta.cuenta);
					let valores = this.totalesCuentasA(cuenta.cuenta);
					total_debe  += valores.debe;
					total_haber += valores.haber;
					
				}
				filas -= espacio;
				if(filas > 0){
					pagina.push(cuenta);
				}else{
					let pagina_cheque = {
						pagina : pagina,
						debe : total_debe,
						haber : total_haber,
					};
					paginas.push(pagina_cheque);
					filas = this.filas_texto;
					pagina = new Array<any>();
					pagina.push(cuenta);
				}
    	}
    	let pagina_cheque = {
			pagina : pagina,
			debe : total_debe,
			haber : total_haber,
		};
	  	paginas.push(pagina_cheque);
		this.paginas = paginas;
	}

	public lineasCuentaA(cuenta:CuentaA){
		let lineas : number = 3;
		let comentario : string = cuenta.subcuentas.uno.comentario;
		lineas += comentario.length / this.columnas_texto;
		return lineas;
	}

	public lineasCuentaB(cuenta:CuentaB){
		let lineas : number = 3;
		let comentario = cuenta.subcuentas.uno.comentario;
		lineas += comentario.length / this.columnas_texto;
		return lineas;
	}

	public lineasCuentasC(cuenta:CuentasC){
		let lineas : number = 4;
		let longitud : number = cuenta.subcuentas.uno.comentario.length;
		longitud += cuenta.subcuentas.dos.comentario.length;
		lineas   += longitud/this.columnas_texto;
		return lineas;
	}

	public lineasCuentasA(cuenta:CuentasA){
		let lineas : number = 10;
		let longitud : number = cuenta.voucher.uno.subcuentas.uno.comentario.length;
		longitud += cuenta.voucher.dos.subcuentas.uno.comentario.length;
		longitud += cuenta.voucher.tres.subcuentas.uno.comentario.length;
		longitud += cuenta.voucher.cuatro.subcuentas.uno.comentario.length;
		longitud += cuenta.voucher.cuatro.subcuentas.dos.comentario.length;
		lineas += longitud/this.columnas_texto;
		return lineas;
	}
	
	//------- MANEJO DE CUENTAS --------
  	//Agregar cuentaA
  	public addCuenta(cuenta:any)
  	{
    	this.cuentas.push(cuenta);
	}

  	//Obtener Cuenta 
  	public getCuenta(index:number)
  	{
    	return this.cuentas[index];
  	}

	//-------- MANEJO DE TOTAL ---------
  	public totalesCuentaA(cuenta:CuentaA) : any{
		let debe = Number(cuenta.subcuentas.uno.debe);
		let haber = Number(cuenta.subcuentas.uno.haber);
		return { debe: debe, haber:haber};
	}
	  
	public totalesCuentaB(cuenta:CuentaB) : any{
		let debe = Number(cuenta.subcuentas.uno.debe);
		let haber = Number(cuenta.subcuentas.uno.haber);
		return { debe: debe, haber:haber};
	}

	public totalesCuentasC(cuenta:CuentasC) : any{
		let debe = Number(cuenta.subcuentas.uno.debe);
		debe += Number(cuenta.subcuentas.dos.debe);
		let haber = Number(cuenta.subcuentas.uno.haber);
		haber += Number(cuenta.subcuentas.dos.haber);
		return {debe:debe , haber:haber};
	}

	public totalesCuentasA(cuenta:CuentasA) : any{
		let debe = 0
		debe += Number(cuenta.voucher.uno.subcuentas.uno.debe);
		debe += Number(cuenta.voucher.dos.subcuentas.uno.debe);
		debe += Number(cuenta.voucher.tres.subcuentas.uno.debe);
		debe += Number(cuenta.voucher.tres.subcuentas.uno.debe);
		debe += Number(cuenta.voucher.cuatro.subcuentas.uno.debe);
		debe += Number(cuenta.voucher.cuatro.subcuentas.dos.debe);
		let haber = 0;
		haber += Number(cuenta.voucher.uno.subcuentas.uno.haber);
		haber += Number(cuenta.voucher.dos.subcuentas.uno.haber);
		haber += Number(cuenta.voucher.tres.subcuentas.uno.haber);
		haber += Number(cuenta.voucher.tres.subcuentas.uno.haber);
		haber += Number(cuenta.voucher.cuatro.subcuentas.uno.haber);
		haber += Number(cuenta.voucher.cuatro.subcuentas.dos.haber);
		return {debe:debe, haber:haber};
	}


  public ejemploCuentas()
  {
    const uno: CuentaA = {
      codigo_superior: 1,
      nombre_superior: 'CUENTA UNO',
      subcuentas: {
        uno: {
          codigo: 0,
          nombre: '',
          comentario: '',
          contrasenia: '',
          debe: '300',
          haber: '500',
        },
      }
    };
    this.addCuenta({cuenta:uno,tipo:"CuentaA"});
    const dos: CuentaB = {
      codigo_superior: 2,
      nombre_superior: 'CUENTA DOS',
      subcuentas: {
        uno: {
          codigo: 0,
          nombre: '',
          comentario: '',
          debe: '100',
          haber: '100',
        }
      }
    };
    this.addCuenta({cuenta:dos,tipo:"CuentaB"});
    const tres: CuentaB = {
      codigo_superior: 3,
      nombre_superior: 'CUENTA TRES',
      subcuentas: {
        uno: {
          codigo: 0,
          nombre: '',
          comentario: '',
          debe: '600',
          haber: '400',
        }
      }
    };
    this.addCuenta({cuenta:tres,tipo:"CuentaB"});
    const cuatro: CuentasC = {
      codigo_superior: 4,
      nombre_superior: 'CUENTA CUATRO',
      subcuentas: {
		uno :{
		codigo: 0,
		nombre: '',
		comentario: '',
		debe: '300',
		haber: '500',
	  },
	  dos : {
		codigo: 5,
		nombre: '',
		comentario: '',
		debe: '300',
		haber: '500',
	  } }
    };
    this.addCuenta({cuenta:cuatro,tipo : "CuentasC"});
    const cinco: CuentaB = {
      codigo_superior: 5,
      nombre_superior: 'CUENTA CINCO',
      subcuentas: {
        uno: {
          codigo: 0,
          nombre: '',
          comentario: '',
          debe: '300',
          haber: '500',
        }
      }
    };
    this.addCuenta({cuenta:cinco,tipo:"CuentaB"});
    const seis: CuentaB = {
      codigo_superior: 6,
      nombre_superior: 'CUENTA SEIS',
      subcuentas: {
        uno: {
          codigo: 0,
          nombre: '',
          comentario: '',
          debe: '300',
          haber: '500',
        }
      }
	};
	this.addCuenta({cuenta:seis,tipo:"CuentaB"});
	const siete : CuentaB = {
		codigo_superior : 7,
		nombre_superior : 'CUENTA SIETE',
		subcuentas : {
			uno : {
				codigo : 1,
				nombre : 'Nueva Cuenta',
				comentario : 'Esta cuenta es nueva\n',
				debe: '1000',
				haber: '1000'
			}
		}
	}
	this.addCuenta({cuenta:siete,tipo:"CuentaB"});
	const ocho : CuentaB = {
		codigo_superior : 7,
		nombre_superior : 'CUENTA OCHO',
		subcuentas : {
			uno : {
				codigo : 1,
				nombre : 'Nueva Cuenta',
				comentario : 'Esta cuenta es nueva\n',
				debe: '1000',
				haber: '1000'
			}
		}
	}
	this.addCuenta({cuenta:ocho,tipo:"CuentaB"});
	const nueve : CuentaB = {
		codigo_superior : 7,
		nombre_superior : 'CUENTA NUEVE',
		subcuentas : {
			uno : {
				codigo : 1,
				nombre : 'Nueva Cuenta',
				comentario : 'Esta cuenta es nueva\n',
				debe: '1000',
				haber: '1000'
			}
		}
	}
	this.addCuenta({cuenta:nueve,tipo:"CuentaB"});
	const diez : CuentaB = {
		codigo_superior : 7,
		nombre_superior : 'CUENTA DIEZ',
		subcuentas : {
			uno : {
				codigo : 1,
				nombre : 'Nueva Cuenta',
				comentario : 'Esta cuenta es nueva\n',
				debe: '1000',
				haber: '1000'
			}
		}
	}
	this.addCuenta({cuenta:diez,tipo:"CuentaB"});
	const once : CuentaB = {
		codigo_superior : 7,
		nombre_superior : 'CUENTA ONCE',
		subcuentas : {
			uno : {
				codigo : 1,
				nombre : 'Nueva Cuenta',
				comentario : 'Esta cuenta es nueva\n',
				debe: '1000',
				haber: '1000'
			}
		}
	}
	this.addCuenta({cuenta:once,tipo:"CuentaB"});
	const doce : CuentaB = {
		codigo_superior : 7,
		nombre_superior : 'CUENTA DOCE',
		subcuentas : {
			uno : {
				codigo : 1,
				nombre : 'Nueva Cuenta',
				comentario : 'Esta cuenta es nueva\n',
				debe: '1000',
				haber: '1000'
			}
		}
	}
	this.addCuenta({cuenta:doce,tipo:"CuentaB"});
    
  }
    


}


//Interfaces
export interface Datos {
	id_prestamo: number;
  	no_contrato: number;
  	no_cheque: number;
  	contrasenia: string;
  	liquido_formateado: string;
  	liquido_numeros: number;
 	liquido_letras: string;
  	nombre_deudor: string;
  	fecha_numeros: string;
  	fecha_letras: string;
}
  
  export class CuentaA {
    codigo_superior: number;
    nombre_superior: string;
    subcuentas: {
      uno: {
        codigo: number;
        nombre: string;
        comentario: string;
        contrasenia: string;
        debe: string;
        haber: string;
      },
    };
  }
  
  export class CuentaB {
    codigo_superior: number;
    nombre_superior: string;
    subcuentas: {
      uno: {
        codigo: number;
        nombre: string;
        comentario: string;
        debe: string;
        haber: string;
      }
    };
  }
  
  export class CuentasC {
    codigo_superior: number;
    nombre_superior: string;
    subcuentas: {
		uno : {
        	codigo: number;
        	nombre: string;
        	comentario: string;
        	debe: string;
        	haber: string;
		},
		dos : {
        	codigo: number;
        	nombre: string;
        	comentario: string;
        	debe: string;
        	haber: string;
      	} }
    };
  
  export class CuentasA {
    voucher: {
      uno:  {
        codigo_superior: number;
        nombre_superior: string;
        subcuentas: {
          uno: {
            codigo: number;
            nombre: string;
            comentario: string;
            contrasenia: string;
            debe: string;
            haber: string;
          },
        }
      },
      dos: {
        codigo_superior: number;
        nombre_superior: string;
        subcuentas: {
          uno: {
            codigo: number;
            nombre: string;
            comentario: string;
            debe: string;
            haber: string;
          }
        }
      },
      tres: {
        codigo_superior: number;
        nombre_superior: string;
        subcuentas: {
          uno: {
            codigo: number;
            nombre: string;
            comentario: string;
            debe: string;
            haber: string;
          }
        }
      },
      cuatro: {
        codigo_superior: number;
        nombre_superior: string;
        subcuentas: {
          uno: {
            codigo: number;
            nombre: string;
            comentario: string;
            debe: string;
            haber: string;
          },
          dos: {
            codigo: number;
            nombre: string;
            comentario: string;
            debe: string;
            haber: string;
          }
        }
      },
    };
  }
  
