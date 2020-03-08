import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RutasService } from '../../services/rutas.service';
import { BusService } from '../../services/bus.service';
import { Bus } from 'src/app/models/bus';
import { MatDialog } from '@angular/material/dialog';
import { Marcador } from '../../Class/marcador.class';
import { MapaEditarComponent } from '../mapa/mapa-editar.component';
import { ParadasService } from '../../services/parada.service';
import { Parada } from 'src/app/models/parada';


@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent implements OnDestroy, OnInit {

  ruta: any = {};
  MysetInterval: any;

  paradasRuta: Parada[] = [];

  BusesAsociadosRuta: Bus[];

  marcadores: Marcador[] = [];
  latCentroMapa = 7.11392;
  lngCentroMapa = -73.1198;
  latUsuario: number;
  lngUsuario: number;
  // Datos utilizados para dibujar la 'ruta' de la ruta seleccionada en el mapa
  origin: any;
  destination: any;
  waypoints: any;

  constructor( private activatedRoute: ActivatedRoute, private rutasService: RutasService, private busService: BusService,
               public dialog: MatDialog, public paradasService: ParadasService) {
                this.getDirection();
                if (navigator.geolocation) {
                       navigator.geolocation.getCurrentPosition( async ( datos ) => {
                         this.latCentroMapa = datos.coords.latitude;
                         this.lngCentroMapa = datos.coords.longitude;
                         this.latUsuario = datos.coords.latitude;
                         this.lngUsuario = datos.coords.longitude;
                       },
                        () => { console.log('No esta activado el gps'); });
                }
                this.activatedRoute.params.subscribe(params => {
                    this.ruta = this.rutasService.getRuta( params.termino);
                });
                this.busService.getBuses();
                // this.paradasService.getParadas();
                this.BusesAsociadosRuta = this.busService.busesPorRuta(this.ruta.nombre);
                this.Watcher();
  }

  ngOnInit() {
    this.paradasService.getParadas();
    this.paradasService.getParada()
    .subscribe( () => {
      this.obtenerParadasdeRuta();
      // this.getDirection();
    });
  }

  ngOnDestroy(): void {
    if (this.MysetInterval) {
      clearInterval(this.MysetInterval);
    }
  }

  UbicarEnMapa(latitud: number, longitud: number, sentido: number) {
    console.log(latitud, ',', longitud, ',', sentido);
    this.latCentroMapa = latitud;
    this.lngCentroMapa = longitud;
  }

  // Se encarga de actualizar cada 3 segundos la posicion de los buses en todos los usuarios (en base de datos)
  Watcher() {
    this.MysetInterval = setInterval( () => {
      // console.log(2);
      this.BusesAsociadosRuta = this.busService.busesPorRuta(this.ruta.nombre);
      this.crearMarcadoresPorRuta();
    }, 3000);
  }

  // recorre los buses asociados a la ruta y por cada uno que su conductorAsociado tenga estado true
  // crea un marcador para mostrar en el mapa
  crearMarcadoresPorRuta() {
    this.marcadores = [];
    for (const bus of this.BusesAsociadosRuta) {
      if (bus.ConductorAsociado.estado === true) {
        const nuevoMarcador = new Marcador(bus);
        this.marcadores.push(nuevoMarcador);
      }
    }
  }

  CuadroDialogo(marcador: Marcador): void {
    const dialogRef = this.dialog.open(MapaEditarComponent, {
      width: '250px',
      data: {placa: marcador.placa, ruta: marcador.ruta}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // aqui podemos actuliazar la posicion del bus cada vez que sea cerrado el dialogo
      // this.snackBar.open(' Marcador actualizado ', 'Cerrar', {duration: 3000});
    });
  }

  // Obtiene las paradas asociadas a la ruta seleccionada
  obtenerParadasdeRuta() {
    // console.log(this.paradasService.paradas, 'WWW');
    this.paradasRuta = this.paradasService.getParadaByRuta(this.ruta.nombre);
    // console.log(this.paradasRuta, 'XXX');
    this.getDirection();
  }

  getDirection() {

    this.origin = { lat: 7.157089498267445 , lng: -73.15899185180664, stopover: true  }; // A
    this.destination = { lat: 7.137089498267445, lng: -73.11899185180664, stopover: true  }; // D
    let index = 0;
    this.waypoints = [];
    console.log(this.paradasRuta.length);
    for (const parada of this.paradasRuta) {
      console.log('index=', index , 'lenght=', this.paradasRuta.length);
      if (index === 0) {
        this.origin = { lat: parada.latitud , lng: parada.longitud, stopover: true  }; // A
      } else {
              if (this.paradasRuta.length === index + 1) {
                this.destination = { lat: parada.latitud, lng: parada.longitud, stopover: true  }; // D
              } else {
                      this.waypoints.push({location: { lat: parada.latitud, lng: parada.longitud, stopover: false  }});
                     }
      }
      index++;
    }
    console.log(this.waypoints, 'CC', this.origin, 'origin', this.destination, 'destination' );
  }

}
