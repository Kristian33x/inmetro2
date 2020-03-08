import { Component, OnInit } from '@angular/core';
import { RutasService } from '../../services/rutas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ParadasService } from '../../services/parada.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  rutasSearch: any[] = [];
  termino: string ;

  constructor(private activatedRoute: ActivatedRoute, private rutasServices: RutasService,
              private router: Router, private paradasService: ParadasService) {}

  ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
          // this.rutasSearch = this.rutasServices.buscarRutas( params.termino); // buscar por nombre bus
          const arrayConNombreRutas = this.paradasService.buscarRutasPorNombreParada(params.termino);
          this.rutasSearch = this.rutasServices.buscarRutasPorArraydeTerminos(arrayConNombreRutas);
          this.termino = params.termino;
          // console.log(this.termino, '222', params);
        } );
        }

        irRutas() {
          this.router.navigate(['/buses']);
        }
}
