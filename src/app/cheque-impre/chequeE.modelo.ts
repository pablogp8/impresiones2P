export class chequeE {
  datos: Datos = {
    id_prestamo: 0,
    no_contrato: 0,
    no_cheque: 0,
    contrasenia: '',
    liquido_formateado: '',
    liquido_numeros: 0,
    liquido_letras: '',
    nombre_deudor: 'Alexander',
    fecha_numeros: '',
    fecha_letras: '',
  };

  uno: CuentaA = {
    codigo_superior: 0,
    nombre_superior: '',
    subcuentas: {
      uno: {
        codigo: 0,
        nombre: '',
        comentario: '',
        contrasenia: '',
        debe: '',
        haber: '',
      },
    }
  };

  dos: CuentaB = {
    codigo_superior: 0,
    nombre_superior: '',
    subcuentas: {
      uno: {
        codigo: 0,
        nombre: '',
        comentario: '',
        debe: '',
        haber: '',
      }
    }
  };

  tres: CuentaB = {
    codigo_superior: 0,
    nombre_superior: '',
    subcuentas: {
      uno: {
        codigo: 0,
        nombre: '',
        comentario: '',
        debe: '',
        haber: '',
      }
    }
  };

  cuatro: CuentasC = {
    codigo_superior: 0,
    nombre_superior: '',
    subcuentas: {
      uno: {
        codigo: 0,
        nombre: '',
        comentario: '',
        debe: '',
        haber: '',
      },
      dos: {
        codigo: 0,
        nombre: '',
        comentario: '',
        debe: '',
        haber: '',
      }
    }
  };

} 
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
  
  export interface CuentaA {
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
  
  export interface CuentaB {
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
  
  export interface CuentasC {
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
    };
  }
  
  export interface CuentasA {
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
  