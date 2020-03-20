import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ParadasService } from '../../services/parada.service';
import { NgForm } from '@angular/forms';
import { Parada } from 'src/app/models/parada';
import { RutasService } from '../../services/rutas.service';
import { Ruta } from 'src/app/models/ruta';

@Component({
  selector: 'app-paradas',
  templateUrl: './paradas.component.html',
  styleUrls: ['./paradas.component.css']
})
export class ParadasComponent implements OnInit {


  Rutas: Ruta[];
  RutasSinParada: string[] = [];

  constructor(public paradaServices: ParadasService, public rutasService: RutasService) {
   }

  ngOnInit() {
    this.cargarBaseDatos();
  }


  async cargarBaseDatos() {
    this.rutasService.getRutas();
    this.paradaServices.getParadas();
    this.Rutas = this.rutasService.getRutas2();
  }

  obtenerRutasSinParada() {
    this.RutasSinParada = [];
    let agregar: boolean;
    const array = this.paradaServices.selectedParada.rutasAsociadas;
    for (const ruta of this.rutasService.getRutas2()) {
      agregar = true;
      for (const nombreRutaParada of array) {
        if (nombreRutaParada === ruta.nombre) {
          agregar = false;
          break;
        } else { agregar = true; }
      }
      if ( agregar ) { this.RutasSinParada.push(ruta.nombre); }
    }
  }

  resetForm() {

    this.paradaServices.selectedParada = new Parada();
    this.paradaServices.getParadas();
    // this.cargarBaseDatos();
  }

  asignarRutaParada(form: NgForm) {
    // console.log(form.value.rutap);
    // console.log(this.paradaServices.selectedParada.rutasAsociadas, '1x');
    this.paradaServices.selectedParada.rutasAsociadas.push(form.value.rutap);
    // console.log(this.paradaServices.selectedParada.rutasAsociadas, '2x');
    this.paradaServices.addParada2(this.paradaServices.selectedParada);
  }

  asignarRutaParada2(rutaNombre: string) {
    // console.log(rutaNombre);
    // console.log(this.paradaServices.selectedParada.rutasAsociadas, '1x');
    this.paradaServices.selectedParada.rutasAsociadas.push(rutaNombre);
    // console.log(this.paradaServices.selectedParada.rutasAsociadas, '2x');
    this.paradaServices.addParada2(this.paradaServices.selectedParada);
    this.obtenerRutasSinParada();
  }

  removerRutaParada(NombreRuta: string) {
    const i = this.paradaServices.selectedParada.rutasAsociadas.indexOf( NombreRuta );
    // console.log(this.paradaServices.selectedParada.rutasAsociadas, '11');
    this.paradaServices.selectedParada.rutasAsociadas.splice(i, 1);
    // console.log(this.paradaServices.selectedParada.rutasAsociadas, '22');
    this.paradaServices.addParada2(this.paradaServices.selectedParada);
    this.obtenerRutasSinParada();
  }

}
