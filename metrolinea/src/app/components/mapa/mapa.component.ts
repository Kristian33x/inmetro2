import { Component, OnInit } from '@angular/core';
import { GoogleAnalyticsService } from '../../services/google-analytics.service';

declare var gtag;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {


  latUsuario = 7.13707729242462;
  lngUsuario = -73.11724761399356;

  public origin: any;
  public destination: any;
  public isDirectionActive = false;

  constructor(public googleAnalyticsServices: GoogleAnalyticsService) {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition( async ( datos ) => {
        this.latUsuario = datos.coords.latitude;
        this.lngUsuario = datos.coords.longitude;
      });
    }
  }

  ngOnInit() {
  }

  getDirection(direccion: string) {
    this.isDirectionActive = true;
    direccion = direccion + ' Bucaramanga Colombia';
    this.origin = {location: { lat: this.latUsuario, lng: this.lngUsuario }};
    this.destination = direccion;
  }

  setIsDirection() {
    this.isDirectionActive = false;
  }

  SendAddToCartEvent1(busqueda: string) {
    gtag('send', busqueda, 'A donde Van?', 'Busqueda de Rutas' );
    console.log('hola');
  }

  SendAddToCartEvent(busqueda: string) {
    this.googleAnalyticsServices.eventEmitter('add_to_cart', busqueda, 'cart', 'click', 10);
    // history.pushState(null, '', `inicio/busqueda?k=${busqueda}`);
  }




//  marcadores: Marcador[] = [];
//  public transitOptions: any = { modes: ['BUS'], };


  // getDirection(direccion: string) {
  //   this.isDirectionActive = true;
  //   direccion = direccion + ' Bucaramanga Colombia';
  //   // this.origin = 'Bucaramanga Estacion San Mateo N-s'; // A
  //   // this.destination = 'Bucaramanga Estacion Chorreras N-s'; // D
  //   // this.waypoints = [
  //   //  {location: { lat: 7.13392, lng: -73.1398 }}, // C
  //   //  {location: { lat: 7.14392, lng: -73.1498 }} // B
  //   // ];
  //   this.origin = {location: { lat: this.latUsuario, lng: this.lngUsuario }};
  //   this.destination = direccion;
  //   // console.log(this.origin , this.destination, );
  // }

    // console.log(this.latUsuario , this.lngUsuario, 'RRR');
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
    // if (localStorage.getItem('marcadores')) {
    //     this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    // }

  // moverMapa(evento) {
  //   console.log('it changed');
  //   this.lat = this.lat1;
  //   this.lng = this.lng1;
  // }

  // agregarMarcador(evento) {

  //   const coords: {lat: number, lng: number} = evento.coords;
  //   console.log(coords.lat, ' YYYYY ', coords.lng);
  //   // const nuevoMarcador = new Marcador(coords.lat, coords.lng);
  //   // this.marcadores.push(nuevoMarcador);
  //   this.guardarStorage();
  // }

  // guardarStorage() {
  //   localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  //   this.snackBar.open(' Marcador agregado ', 'Cerrar', {duration: 3000});
  // }

  // editarMarcador(marcador: Marcador): void {
  //   const dialogRef = this.dialog.open(MapaEditarComponent, {
  //     width: '250px',
  //   //  data: {nombre: marcador.nombre, ruta: marcador.ruta}
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     if ( !result ) {
  //       return;
  //     }
  //    // marcador.nombre = result.nombre;
  //     marcador.ruta = result.ruta;

  //     this.guardarStorage();
  //     this.snackBar.open(' Marcador actualizado ', 'Cerrar', {duration: 3000});
  //   });
  // }


  // borrarMarcador(i: number) {
  //   this.marcadores.splice( i , 1 );
  //   this.guardarStorage();
  //   this.snackBar.open(' Marcador borrado ', 'Cerrar', {duration: 3000});
  // }
}
