import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../Class/marcador.class';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import { MapaEditarComponent } from './mapa-editar.component';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

 marcadores: Marcador[] = [];
 lat = 7.13707729242462 ;
 lng = -73.11724761399356;
 lat1;
 lng1;
 public transitOptions: any = { modes: ['BUS'], };

  public origin: any;
  public destination: any;
  waypoints: any = [];

  constructor(private snackBar: MatSnackBar, public dialog: MatDialog) {
    this.getDirection();


    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition( async ( datos ) => {
        this.lat = datos.coords.latitude;
        this.lng = datos.coords.longitude;
      });
    }
    console.log(this.lat , this.lng);
    // const nuevoMarcador = new Marcador(this.lat, this.lng);
    // this.marcadores.push(nuevoMarcador);
  //   if (navigator.geolocation) {
  //     navigator.geolocation.watchPosition( async ( datos ) => {
  //       // await console.log(datos.coords.latitude, 'asdasdasdasd3');
  //       // await console.log(datos.coords.longitude, 'asdasdasdasd4');
  //       this.lat1 = datos.coords.latitude;
  //       this.lng1 = datos.coords.longitude;
  //       console.log(this.lat1, ' ZZZZZZ ', this.lng1);

  //     },
  //      () => { console.log('No esta activado el gps'); });
  // } else {
  //   this.lat1 = 7.11392;
  //   this.lng1 = -73.1198;
  // }
    if (localStorage.getItem('marcadores')) {
        this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    }
  }

  ngOnInit() {
    this.getDirection();
  }

  getDirection() {
    this.origin = 'Bucaramanga Estacion San Mateo N-s'; // A
    this.destination = 'Bucaramanga Estacion Chorreras N-s'; // D
    // this.waypoints = [
    //  {location: { lat: 7.13392, lng: -73.1398 }}, // C
    //  {location: { lat: 7.14392, lng: -73.1498 }} // B
    // ];
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition( async ( datos ) => {
        this.lat = datos.coords.latitude;
        this.lng = datos.coords.longitude;
        console.log(this.lat , this.lng, 'YY');
      });
    }
    console.log(this.lat , this.lng, 'XX');
  }

  moverMapa(evento) {
    console.log('it changed');
    this.lat = this.lat1;
    this.lng = this.lng1;
  }

  agregarMarcador(evento) {

    const coords: {lat: number, lng: number} = evento.coords;
    console.log(coords.lat, ' YYYYY ', coords.lng);
    // const nuevoMarcador = new Marcador(coords.lat, coords.lng);
    // this.marcadores.push(nuevoMarcador);
    this.guardarStorage();
  }

  guardarStorage() {
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
    this.snackBar.open(' Marcador agregado ', 'Cerrar', {duration: 3000});
  }

  editarMarcador(marcador: Marcador): void {
    const dialogRef = this.dialog.open(MapaEditarComponent, {
      width: '250px',
    //  data: {nombre: marcador.nombre, ruta: marcador.ruta}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if ( !result ) {
        return;
      }
     // marcador.nombre = result.nombre;
      marcador.ruta = result.ruta;

      this.guardarStorage();
      this.snackBar.open(' Marcador actualizado ', 'Cerrar', {duration: 3000});
    });
  }


  borrarMarcador(i: number) {
    this.marcadores.splice( i , 1 );
    this.guardarStorage();
    this.snackBar.open(' Marcador borrado ', 'Cerrar', {duration: 3000});
  }
}
