import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RutasService } from '../../services/rutas.service';
import { BusService } from '../../services/bus.service';
import { Bus } from 'src/app/models/bus';
import { MatDialog } from '@angular/material/dialog';
import { Marcador } from '../../Class/marcador.class';
import { MapaEditarComponent } from '../mapa/mapa-editar.component';


@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent implements OnDestroy {

  ruta: any = {};
  MysetInterval: any;

  BusesAsociadosRuta: Bus[];

  marcadores: Marcador[] = [];
  latCentroMapa = 7.11392;
  lngCentroMapa = -73.1198;

  public lat = 24.799448;
  public lng = 120.979021;

  public origin: any;
  public destination: any;

  constructor( private activatedRoute: ActivatedRoute,
               private rutasService: RutasService, private busService: BusService,
               public dialog: MatDialog) {
                this.getDirection();
                if (navigator.geolocation) {
                       navigator.geolocation.getCurrentPosition( async ( datos ) => {
                         this.latCentroMapa = datos.coords.latitude;
                         this.lngCentroMapa = datos.coords.longitude;
                       },
                        () => { console.log('No esta activado el gps'); });
                }

                this.activatedRoute.params.subscribe(params => {
                    this.ruta = this.rutasService.getRuta( params.termino);
                });
                this.busService.getBuses();
                this.BusesAsociadosRuta = this.busService.busesPorRuta(this.ruta.nombre);
                this.Watcher();
  }


  getDirection() {
    this.origin = { lat: 7.11392, lng: -73.1198 } ;
    this.destination = { lat: 7.11392, lng: -73.1298 } ;

    // this.origin = 'Taipei Main Station'
    // this.destination = 'Taiwan Presidential Office'
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

}
