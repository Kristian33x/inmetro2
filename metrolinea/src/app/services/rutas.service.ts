
import { Injectable } from '@angular/core';
import { Ruta } from '../models/ruta';
import { RutaService } from './ruta.service';

@Injectable()
export class RutasService {

  private rutas: Ruta[];


  constructor(public rutaService: RutaService) {
      console.log('Servicio listo para usarse');
  }

  // Actualiza la variable 'rutas' y retorna este array
  getRutas2(): Ruta[] {
      this.getRutas();
      return this.rutas;
  }

  // Obtener rutas de la base de datos y guardarlos en la variable 'rutas'
  // tambien podria decirse que este metodo actualiza la variable 'rutas'
  getRutas() {
    this.rutaService.getRuta()
    .subscribe(res => {
      this.rutas = res as Ruta[];
    });
  }

  // Obtiene las rutas dependiendo del tipo de bus que tengan (padron, articulado o alimentador)
  getRutasByTipoBus(tipoRuta: string): Ruta[] {
    const rutasPorTipo: Ruta[] = [];
    if (this.rutas !== null) {
    for (const ruta of this.rutas) {
      if (ruta.imagenTipoBus === tipoRuta) {
        rutasPorTipo.push(ruta);
      }
    }
  }
    return rutasPorTipo;
  }

  // Obtener una ruta por nombre
  getRuta(termino: string) {
    for (const ruta of this.rutas) {
      // console.log(ruta.nombre , '===', termino);
      if (ruta.nombre.toLowerCase() === termino) {
        return ruta;
      }
    }
  }

  // tslint:disable-next-line:variable-name
  getRutaById(_id: string) {
    for (const ruta of this.rutas) {
      if (ruta._id === _id) {
        return ruta;
      }
    }
  }

  // Obtener lista de rutas por nombre.. se usa en filtrar
  buscarRutas( termino: string) {
    const RutasArr: Ruta[] = [];
    this.rutaService.getRuta()
    .subscribe(res => {
      this.rutas = res as Ruta[];
      termino = termino.toLowerCase();
      for ( const ruta of this.rutas) {
        const nombre: string = ruta.nombre.toLowerCase();
        if (nombre.indexOf(termino) >= 0) {

          RutasArr.push(ruta);
        }
      }
      });
    return RutasArr;
  }

  buscarRutasPorArraydeTerminos( terminos: string[]) {
    const RutasArr: Ruta[] = [];
    this.rutaService.getRuta()
    .subscribe(res => {
      this.rutas = res as Ruta[];
      for (let termino of terminos) {
        termino = termino.toLowerCase();
        RutasArr.push(this.getRuta(termino));
    }
      });
    return RutasArr;
  }

}

