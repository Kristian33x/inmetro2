// import { Marcador } from '../Class/marcador.class';
export class Ruta {

    // tslint:disable-next-line:variable-name
    constructor(_id = '', nombre = '', descripcion = '', imagenBus = '', Fecha  = '', imagenTipoBus = '',
                NumBusesAsociados = 0, origen = '', destino = ''  ) {
        this._id = _id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagenBus = imagenBus;
        this.Fecha = Fecha;
        this.imagenTipoBus = imagenTipoBus;
        this.NumBusesAsociados = NumBusesAsociados;
        this.origen = origen;
        this.destino = destino;

    }

    // tslint:disable-next-line:variable-name
    _id: string;
    nombre: string;
    descripcion: string;
    imagenBus: string;
    Fecha: string;
    imagenTipoBus: string;
    NumBusesAsociados: number;
    origen: string;
    destino: string;
}
