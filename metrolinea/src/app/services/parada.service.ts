import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Parada } from '../models/parada';
import { NgForm } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class ParadasService {

  busquedaParadas: Parada[] = [];
  selectedParada: Parada;
  // parada: Parada[];
  public paradas: Parada[];
  readonly URL_API = '/api/paradas';

  constructor(private http: HttpClient) {
    this.selectedParada = new Parada();
    console.log('Servicio parada listo para usarse');
  }

  getParada() {
    return this.http.get(this.URL_API);
  }

  // tslint:disable-next-line:no-shadowed-variable
  postParada(parada: Parada) {
    return this.http.post(this.URL_API, parada);
  }

  putParada(parada: Parada) {
    return this.http.put(this.URL_API + `/${ parada._id }`, parada);
  }

  // tslint:disable-next-line:variable-name
  deleteParada(_id: string) {
    return this.http.delete(this.URL_API + `/${ _id }`);
  }

  // ************************************************************

  // devuelve un array de paradas
  getParadas2(): Parada[] {
    this.getParadas();
    return this.paradas;
  }

  // Actualiza la variable local paradas con las paradas de la base de datos
  getParadas() {
    this.getParada()
    .subscribe(res => {
      this.paradas = res as Parada[];
      this.busquedaParadas = res as Parada[];
    });
  }

  // Obtener una parada por el nombre
  getParadaByPlaca(termino: string) {
    for (const parada of this.paradas) {
        if (parada.nombre === termino) {
            return parada;
        }
      }
  }

  // Obtener una parada por el ID
  // tslint:disable-next-line:variable-name
  getParadaById(_id: string) {
    for (const parada of this.paradas) {
        if (parada._id === _id) {
            return parada;
        }
      }
  }

  // Obtiene todas las paradas que tengan a 'nombreRuta' como una de sus Rutas
  getParadaByRuta(nombreRuta: string): Parada[] {
    const array: Parada[] = [];
    for (const parada of this.paradas) {
      for (const nombreParada of parada.rutasAsociadas) {
        if (nombreParada === nombreRuta) {
          array.push(parada);
          break;
        }
      }
    }
    return array;
  }

  // obtiene un array con las paradas que tengan el termino en su nombre
  buscarParadas( termino: string) {

  const paradasArr: Parada[] = [];
  termino = termino.toLowerCase();
  for ( const parada of this.paradas ) {
    const placa: string = parada.nombre.toLowerCase();
    if (placa.indexOf(termino) >= 0) {
        paradasArr.push(parada);
    }
  }
  this.busquedaParadas = paradasArr;
  return paradasArr;
  }

  // devuelve un array con las paradas asociadas a un nombre de ruta
  paradasPorRuta(nombreRuta: string): Parada[] {
    this.getParadas();
    const paradasAsociadasRuta: Parada[] = [];
    for (const parada of this.paradas) {
        for (const nombreRutaParada of parada.rutasAsociadas) {
          if (nombreRutaParada === nombreRuta) {
            paradasAsociadasRuta.push(parada);
          }
        }
    }
    return paradasAsociadasRuta;
  }

 // **************************************************************

  editParada(parada: Parada) {
    this.getParadas();
    this.selectedParada = parada;
  }

  addParada(form: NgForm) {

    if (form.value._id) {
        this.putParada(form.value)
        .subscribe(res => {
          console.log('Parada actualizada satisfactoriamente');
          this.getParadas();
      });
    } else {
        this.postParada(form.value)
        .subscribe(res => {
          console.log('Parada Guardada satisfactoriamente');
          this.getParadas();
      });
    }
  }

  addParada2(parada: Parada) {

    if (parada._id) {

      this.putParada(parada)
      .subscribe(res => {
        console.log('parada2 actualizado satisfactoriamente');
        this.getParadas();
      });
    }
  }

  // tslint:disable-next-line:variable-name
  borrarParada(_id: string) {

    this.selectedParada = this.getParadaById(_id);

    this.deleteParada(_id).subscribe( res => {
      this.getParadas();
      console.log('Eliminado satisfactoriamente');
    });
    this.selectedParada = new Parada();
  }

}
