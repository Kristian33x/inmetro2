
// esta clase es llamada conductor pero hace referencia a Bus.. que por errores a la hora del diseno se
// nombr[o conductor.. se debe cambiar a bus al final.
export class Parada {

    // tslint:disable-next-line:variable-name
    constructor(_id = '', nombre  = '', rutasAsociadas = [], direccion= '',
                latitud = 0, longitud = 0, tipoParada = '' ) {

        this._id = _id;
        this.nombre = nombre;
        this.rutasAsociadas = rutasAsociadas;
        this.tipoParada = tipoParada;
        this.direccion = direccion;
        this.latitud = latitud;
        this.longitud = longitud;
    }

    // tslint:disable-next-line:variable-name
    _id: string;
    nombre: string;
    rutasAsociadas: string[];
    direccion: string;
    latitud: number;
    longitud: number;
    tipoParada: string;
}
