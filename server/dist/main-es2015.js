(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar>\n</app-navbar>\n\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>\n\n<!-- //anterior de solo mapa\n\n<mat-toolbar color=\"primary\">\n    <span>Mapa</span>\n</mat-toolbar>\n\n<div class=\"main-container\"> -->\n<!-- <h3>Raised Buttons</h3>\n    <div class=\"example-button-row\">\n        <button mat-raised-button>Basic</button>\n        <button mat-raised-button color=\"primary\">Primary</button>\n        <button mat-raised-button color=\"accent\">Accent</button>\n        <button mat-raised-button color=\"warn\">Warn</button>\n        <button mat-raised-button disabled>Disabled</button>\n        <a mat-raised-button routerLink=\".\">Link</a>\n    </div>\n\n    <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar> -->\n<!-- <app-mapa></app-mapa>\n</div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/bus/bus.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/bus/bus.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"animated fadeIn\">{{ruta.nombre | uppercase}} <small>({{ ruta.Fecha | date:'y' }})</small></h1>\n<hr>\n\n<div class=\"row animated fadeIn fast\">\n\n    <div class=\"col-md-4\">\n\n        <img [src]=\"ruta.imagenBus\" [alt]=\"ruta.nombre\" class=\"img-fluid\">\n        <br><br>\n        <a [routerLink]=\"['/rutas']\" class=\" btn btn-outline-danger btn-block \"> Regresar..</a>\n    </div>\n\n    <div class=\"col-md-8 \">\n        <h3>{{ruta.nombre}}</h3>\n        <hr>\n        <p>\n            {{ruta.descripcion}}\n        </p>\n        <img [src]=\"ruta.imagenTipoBus \" [alt]=\"ruta.imagenTipoBus\" class=\"img-fluid\">\n    </div>\n\n</div>\n\n<div class=\"row animated fadeIn fast\">\n\n    <div class=\"col-md-4\">\n\n    </div>\n\n    <div class=\"col-md-8 \">\n        <h3>Numero de buses asociados a la ruta: {{ruta.NumBusesAsociados}}</h3>\n        <h3>Buses asociados a la ruta:</h3>\n\n        <table class=\"table table-bordered table-striped table-sm\">\n            <thead>\n                <tr>\n                    <th>Placa</th>\n                    <th>coordenadas</th>\n                    <th>Operaciones</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let bus of BusesAsociadosRuta\">\n                    <td>{{bus.placa}}</td>\n                    <!-- GPS Celular -->\n                    <td *ngIf=\"bus.latitud != 0 && bus.sentido != null\"> {{bus.latitud}}, {{bus.longitud}}, {{bus.sentido}}</td>\n\n                    <!-- GPS Desactivado -->\n                    <td *ngIf=\"bus.latitud == 0 && bus.sentido != null\"> - , - , -</td>\n\n                    <!-- GPS por WIFI -->\n                    <td *ngIf=\"bus.latitud != 0 && bus.sentido == null\"> {{bus.latitud}}, {{bus.longitud}}, -</td>\n\n                    <td>\n                        <button *ngIf=\"bus.latitud === 0\" type=\"button\" title=\"Bus no habilitado\" class=\"btn btn-success btn-sm\" disabled=\"true\">\n                            <i class=\"material-icons\">directions_bus</i>\n                        </button>\n                        <button *ngIf=\"bus.latitud !== 0\" (click)=\"UbicarEnMapa(bus.latitud,bus.longitud,bus.sentido);\" type=\"button\" title=\"Ubicar Bus en Mapa\" class=\"btn btn-success btn-sm\" data-toggle=\"modal\" data-target=\"#modalAsignarRutaBus\">\n                        <i class=\"material-icons\">directions_bus</i>\n                    </button>&nbsp;\n                    </td>\n\n                </tr>\n            </tbody>\n        </table>\n    </div>\n\n</div>\n\n<mat-card>\n\n    <mat-card-title>\n        <p style=\"color: darkgreen;\">Mapa</p> <button (click)=\"this.setActivoParadas()\" type=\"button\" title=\"Activar/Desactivar Paradas en Mapa\" class=\"btn btn-outline-danger\"><i class=\"fa fa-search\"></i> Paradas en Mapa</button> &nbsp; <button (click)=\"this.setActivoDirections()\"\n            type=\"button\" title=\"Activar/Desactivar Ruta en Mapa\" class=\"btn btn-outline-info\"><i class=\"fa fa-search\"></i> Ruta en Mapa</button>\n    </mat-card-title>\n\n    <!-- (centerChange)= (zoomChange) -->\n\n    <mat-card-content>\n        <agm-map [latitude]=\"latCentroMapa\" [longitude]=\"lngCentroMapa\" [zoom]=\"15\">\n            <!-- <agm-circle [latitude]=\"lat\" [longitude]=\"lng\" [radius]=\"30\" [fillColor]=\"'red'\" [circleDraggable]=\"true\" [editable]=\"true\">></agm-circle> -->\n            <!-- [waypoints]=\"this.waypoints\" -->\n            <agm-direction *ngIf=\"this.activoDirections\" [transitOptions]=\"{ modes: ['BUS']}\" [travelMode]=\"'TRANSIT'\" [origin]=\"this.origin\" [destination]=\"this.destination\"> </agm-direction>\n\n            <agm-marker [iconUrl]=\"'assets/img/mapaUsuario.png'\" [latitude]=\"latUsuario\" [longitude]=\"lngUsuario\">\n\n                <agm-info-window>\n                    <strong>Aqui Estas!!</strong>\n                </agm-info-window>\n            </agm-marker>\n\n            <agm-marker *ngFor=\"let marcador of marcadores; let i = index\" [iconUrl]=\"'assets/img/mapaBus.png'\" [latitude]=\"marcador.latitud\" [longitude]=\"marcador.longitud\">\n\n                <agm-info-window>\n                    <strong>{{marcador.placa}}</strong>\n                    <p>\n                        {{marcador.ruta.nombre}} , {{marcador.ruta.descripcion}}\n                    </p>\n                    <div>\n                        <button (click)=\"CuadroDialogo(marcador)\" mat-raised-button color=\"primary\">Ver mas...</button>\n                    </div>\n                </agm-info-window>\n\n            </agm-marker>\n\n            <div *ngIf=\"this.activoParadas\">\n                <agm-marker *ngFor=\"let parada of this.paradasRuta\" [latitude]=\"parada.latitud\" [longitude]=\"parada.longitud\"></agm-marker>\n            </div>\n        </agm-map>\n    </mat-card-content>\n\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/buses/buses.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/buses/buses.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"my-5\">RUTAS DE LOS DIFERENTES BUSES DE METROLINEA</h1>\n<hr>\n<div class=\"card-columns\">\n\n    <!-- *ngFor=\"let bus of buses ; let i=index\" -->\n\n    <app-tarjeta-bus [termino]=\"ruta.nombre\" [ruta]=\"ruta\" *ngFor=\"let ruta of rutas ;\"></app-tarjeta-bus>\n    <!-- <app-tarjeta-bus [termino]=\"bus.nombre\" [bus]=\"bus\" *ngFor=\"let bus of busService.buses\"></app-tarjeta-bus> -->\n\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/conductor/conductor.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/conductor/conductor.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid animated fadeIn \">\n    <div class=\"container\">\n        <h1 class=\"display-4\">Compartir Ubicación GPS Para Conductores</h1>\n        <br>\n\n        <h2 *ngIf=\"busAsociadoConductor.RutaAsociada.nombre != null && busAsociadoConductor.RutaAsociada.nombre != ''\">La Ruta Asignada es: {{busAsociadoConductor.RutaAsociada.nombre}} </h2>\n        <h2 *ngIf=\"busAsociadoConductor.placa != null && busAsociadoConductor.placa != ''\">La Placa del Bus Asignado es: {{busAsociadoConductor.placa}} </h2>\n\n        <h2 *ngIf=\"busAsociadoConductor.RutaAsociada.nombre == null || busAsociadoConductor.RutaAsociada.nombre == ''\">Aún no tiene ruta Asignada</h2>\n        <h2 *ngIf=\"busAsociadoConductor.placa == null || busAsociadoConductor.placa == ''\">Aún no tiene Bus Asignado</h2>\n\n\n    </div>\n\n    <!-- <div class=\"main-container\">\n        <h3>Raised Buttons</h3>\n        <div class=\"example-button-row\">\n            <button mat-raised-button>Basic</button>\n            <button mat-raised-button color=\"primary\">Primary</button>\n            <button mat-raised-button color=\"accent\">Accent</button>\n            <button mat-raised-button color=\"warn\">Warn</button>\n            <button mat-raised-button disabled>Disabled</button>\n            <a mat-raised-button routerLink=\".\">Link</a>\n        </div>\n\n        <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n\n    </div> -->\n\n\n\n    <form class=\"user\" #posicionForm=\"ngForm\">\n\n        <br><br><br><br>\n        <label class=\"col-md-4 form-control-label\" for=\"text-input\"></label>\n        <button id=\"mostrarPosicion\" mat-raised-button class=\"col-lg-3\" (click)=\"mostrarPosicion()\" color=\"accent\">Mostrar Posición</button>\n        <!-- <label class=\"col-md-2 form-control-label\" for=\"text-input\"></label> -->\n        <button id=\"noMostrarPosicion\" mat-raised-button class=\"col-lg-3\" (click)=\"noMostrarPosicion()\" color=\"warn\">No Mostrar Posición</button>\n        <br><br><br><br>\n        <!-- <button id=\"mostrarPosicion1\" mat-raised-button class=\"col-lg-3\" (click)=\"mostrarPosicionFalsa()\" color=\"warning\">Test1</button> -->\n        <div class=\"form-group row\">\n            <label class=\"col-md-3 form-control-label\" for=\"text-input\"></label>\n            <label class=\"col-md-3 form-control-label\" for=\"text-input\">Longitud</label>\n            <div class=\"col-md-3\" *ngIf=\"busAsociadoConductor.longitud !== 0 && this.GPSdesactivado === false\">\n                <input class=\"form-control form-control-user\" type=\"text\" name=\"longitud\" #longitud=\"ngModel\" [(ngModel)]=\"busAsociadoConductor.longitud\" placeholder=\"Longitud\">\n            </div>\n            <div class=\"col-md-3\" *ngIf=\"busAsociadoConductor.longitud === 0 && this.GPSdesactivado === false\">\n                <input class=\"form-control form-control-user\" type=\"text\" value=\"-\">\n            </div>\n            <div class=\"col-md-3\" *ngIf=\"this.GPSdesactivado === true\">\n                <input class=\"form-control form-control-user\" type=\"text\" value=\"GPS desactivado\">\n            </div>\n        </div>\n\n        <div class=\"form-group row\">\n            <label class=\"col-md-3 form-control-label\" for=\"text-input\"></label>\n            <label class=\"col-md-3 form-control-label\" for=\"text-input\">Latitud</label>\n            <div class=\"col-md-3\" *ngIf=\"busAsociadoConductor.latitud !== 0 && this.GPSdesactivado === false\">\n                <input class=\"form-control form-control-user\" type=\"text\" name=\"latitud\" #latitud=\"ngModel\" [(ngModel)]=\"busAsociadoConductor.latitud\" placeholder=\"Latitud\">\n            </div>\n            <div class=\"col-md-3\" *ngIf=\"busAsociadoConductor.latitud === 0 && this.GPSdesactivado === false\">\n                <input class=\"form-control form-control-user\" type=\"text\" value=\"-\">\n            </div>\n            <div class=\"col-md-3\" *ngIf=\"this.GPSdesactivado === true\">\n                <input class=\"form-control form-control-user\" type=\"text\" value=\"GPS desactivado\">\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <label class=\"col-md-3 form-control-label\" for=\"text-input\"></label>\n            <label class=\"col-md-3 form-control-label\" for=\"text-input\">Sentido</label>\n            <div class=\"col-md-3\" *ngIf=\"busAsociadoConductor.sentido !== 0 && busAsociadoConductor.sentido !== null && this.GPSdesactivado === false\">\n                <input class=\"form-control form-control-user\" type=\"text\" name=\"sentido\" #sentido=\"ngModel\" [(ngModel)]=\"busAsociadoConductor.sentido\" placeholder=\"Sentido\">\n            </div>\n            <div class=\"col-md-3\" *ngIf=\"busAsociadoConductor.sentido === 0 && this.GPSdesactivado === false\">\n                <input class=\"form-control form-control-user\" type=\"text\" value=\"-\">\n            </div>\n            <div class=\"col-md-3\" *ngIf=\"busAsociadoConductor.sentido === null && busAsociadoConductor.latitud !== 0\">\n                <input class=\"form-control form-control-user\" type=\"text\" value=\"Dispositivo no admite 'Sentido'\">\n            </div>\n            <div class=\"col-md-3\" *ngIf=\"this.GPSdesactivado === true\">\n                <input class=\"form-control form-control-user\" type=\"text\" value=\"GPS desactivado\">\n            </div>\n        </div>\n    </form>\n\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/edit-buses/edit-buses.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/edit-buses/edit-buses.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- COMPILED AND MINIFIED CSS -->\n<!-- <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\"> -->\n<!-- MATERIAL ICONS -->\n<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\n\n\n<div class=\"row\" style=\"align-content: initial\">\n\n    <div class=\"col-lg-12 my-5\">\n\n\n        <!-- Tabla Listado Rutas -->\n        <div class=\"card\">\n            <div class=\"card-header\">\n                <i class=\"fa fa-address-book\"></i> Rutas\n                <button (click)=\"resetForm(busForm)\" type=\"button\" title=\"Crear Ruta\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#modalActualizarRutas\">\n                            <i class=\"material-icons\">add_to_photos</i>&nbsp;Nueva Ruta&nbsp;\n                        </button>\n            </div>\n            <div class=\"card-body\">\n                <div class=\"form-group row\">\n                    <div class=\"col-md-6\">\n                        <div class=\"input-group\" ng-controller=\"ngifctrl\">\n                            <select class=\"form-control col-md-3\" id=\"opcion\" name=\"opcion\">\n                                      <option value=\"nombre\">Nombre</option>\n                                    </select>\n                            <!-- (keyup)=\"buscarBus(buscarTexto.value)\" (keydown.enter)=\"buscarBus(buscarTexto.value)\" -->\n                            <input (keyup)=\"buscarRuta(buscarTexto.value)\" (keydown.enter)=\"buscarRuta(buscarTexto.value)\" type=\"text\" id=\"texto\" name=\"texto\" class=\"form-control\" placeholder=\"Texto a buscar\" #buscarTexto>\n                            <!-- (click)=\"buscarBus(buscarTexto.value)\" -->\n                            <button (click)=\"buscarRuta(buscarTexto.value)\" type=\"button\" title=\"Buscar\" class=\"btn btn-primary\"><i class=\"fa fa-search\"></i> Buscar</button>\n                        </div>\n                    </div>\n                </div>\n                <table class=\"table table-hover table-bordered table-striped table-sm table-responsive\">\n                    <thead>\n                        <tr>\n                            <th width=\"8%\">Nombre</th>\n                            <th width=\"18%\">Descripcion</th>\n                            <th>Imagen Ruta</th>\n                            <th width=\"9%\">#Buses</th>\n                            <th width=\"10%\">Fecha</th>\n                            <th width=\"10%\">Tipo Bus</th>\n                            <th width=\"15%\">Operaciones</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n\n                        <!-- <tr *ngFor=\"let bus of busService.buses\"> -->\n                        <tr *ngFor=\"let ruta of selectedRutas1\">\n\n                            <td>{{ruta.nombre}}</td>\n                            <td>{{ruta.descripcion.substring(0,32)}}</td>\n                            <td width=\"20%\">\n                                <!-- {{bus.imagenBus}} -->\n                                <img src=\"{{ruta.imagenBus}}\" height=\"30%\">\n                            </td>\n                            <td>{{ruta.NumBusesAsociados}}</td>\n                            <td>{{ruta.Fecha}}</td>\n                            <!-- <td>{{bus.imagenTipoBus}}</td> -->\n                            <td *ngIf=\"ruta.imagenTipoBus==='assets/img/padron.png'\">Padron</td>\n                            <td *ngIf=\"ruta.imagenTipoBus==='assets/img/alimentador.png'\">Alimentador</td>\n                            <td *ngIf=\"ruta.imagenTipoBus==='assets/img/articulado.png'\">Articulado</td>\n                            <td>\n                                <!-- <a (click)=\"editBus(bus)\">\n                                    <i class=\"material-icons\">edit</i>\n                                </a>\n                                <a (click)=\"deleteBus(bus._id)\">\n                                    <i class=\"material-icons\">delete</i>\n                                </a> -->\n                                <button (click)=\"editRuta(ruta)\" type=\"button\" title=\"Origen y Destino Ruta\" class=\"btn btn-outline-primary btn-sm\" data-toggle=\"modal\" data-target=\"#modalAsignarOrigenyDestinoRuta\">\n                                        <i class=\"material-icons\">call_split</i>\n                                </button> &nbsp;\n                                <button (click)=\"editRuta(ruta)\" type=\"button\" title=\"Editar Ruta\" class=\"btn btn-warning btn-sm \" data-toggle=\"modal\" data-target=\"#modalActualizarRutas\">\n                                        <i class=\"material-icons\">edit</i>\n                                </button> &nbsp;\n                                <button (click)=\"editRuta(ruta)\" type=\"button\" title=\"Eliminar Ruta\" class=\"btn btn-danger btn-sm\" data-toggle=\"modal\" data-target=\"#modalEliminarRutas\">\n                                        <i class=\"material-icons\">delete</i>\n                                </button>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n                <div class=\"row animated fadeIn fast\" *ngIf=\"selectedRutas1.length==0\">\n                    <div class=\"col-md-12\">\n                        <div class=\"alert alert-info\" role=\"alert\">\n                            No existen resultados pata la busqueda.\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n\n\n<!--Inicio del modal agregar/actualizar Rutas-->\n<div class=\"modal fade\" id=\"modalActualizarRutas\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" style=\"display: none;\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-primary modal-lg\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Agregar Ruta</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                      <span aria-hidden=\"true\">×</span>\n                    </button>\n            </div>\n            <div class=\"modal-body\">\n\n                <form class=\"user\" #rutaForm=\"ngForm\" (ngSubmit)=\"addRuta(rutaForm)\">\n\n                    <div class=\"form-group row\">\n                        <div class=\"col-md-9\">\n                            <input type=\"hidden\" name=\"_id\" #_id=\"ngModel\" [(ngModel)]=\"rutaService.selectedRuta._id\">\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <label class=\"col-md-3 form-control-label\" for=\"text-input\">Nombre</label>\n                        <div class=\"col-md-9\">\n                            <input class=\"form-control form-control-user\" type=\"text\" name=\"nombre\" #nombre=\"ngModel\" [(ngModel)]=\"rutaService.selectedRuta.nombre\" placeholder=\"Nombre\">\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-md-3 form-control-label\" for=\"text-input\">Descripcion</label>\n                        <div class=\"col-md-9\">\n                            <input class=\"form-control form-control-user\" type=\"text\" name=\"descripcion\" #descripcion=\"ngModel\" [(ngModel)]=\"rutaService.selectedRuta.descripcion\" placeholder=\"Descripcion\">\n                        </div>\n                    </div>\n                    <!-- <div class=\"form-group row\">\n                        <label class=\"col-md-3 form-control-label\" for=\"text-input\">ImagenRuta</label>\n                        <div class=\"col-md-9\">\n                            <input class=\"form-control form-control-user\" type=\"text\" name=\"imagenBus\" #imagenBus=\"ngModel\" [(ngModel)]=\"rutaService.selectedRuta.imagenBus\" placeholder=\"ImagenBus\">\n                        </div>\n                    </div> -->\n                    <div class=\"form-group row\">\n                        <label class=\"col-md-3 form-control-label\" for=\"text-input\">Fecha</label>\n                        <div class=\"col-md-9\">\n                            <input class=\"form-control form-control-user\" type=\"text\" name=\"Fecha\" #Fecha=\"ngModel\" [(ngModel)]=\"rutaService.selectedRuta.Fecha\" placeholder=\"Fecha\">\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-md-3 form-control-label\" for=\"text-input\"></label>\n                        <div class=\"col-md-9\">\n                            <input type=\"hidden\" name=\"imagenBus\" #imagenBus=\"ngModel\" [(ngModel)]=\"rutaService.selectedRuta.imagenBus\">\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-md-3 form-control-label\" for=\"text-input\">Tipo de Bus</label>\n                        <div class=\"col-md-9\">\n                            <!-- <input class=\"form-control form-control-user\" type=\"text\" name=\"imagenTipoBus\" #imagenTipoBus=\"ngModel\" [(ngModel)]=\"busService.selectedBus.imagenTipoBus\" placeholder=\"ImagenTipoBus\"> -->\n                            <input type=\"radio\" name=\"imagenTipoBus\" #imagenTipoBus=\"ngModel\" [(ngModel)]=\"rutaService.selectedRuta.imagenTipoBus\" value=\"assets/img/alimentador.png\" checked> <img src=\"assets/img/alimentador.png\" width=\"50%\" height=\"30%\">                            <br>\n                            <input type=\"radio\" name=\"imagenTipoBus\" #imagenTipoBus=\"ngModel\" [(ngModel)]=\"rutaService.selectedRuta.imagenTipoBus\" value=\"assets/img/padron.png\"> <img src=\"assets/img/padron.png\" width=\"50%\" height=\"30%\"><br>\n                            <input type=\"radio\" name=\"imagenTipoBus\" #imagenTipoBus=\"ngModel\" [(ngModel)]=\"rutaService.selectedRuta.imagenTipoBus\" value=\"assets/img/articulado.png\"> <img src=\"assets/img/articulado.png\" width=\"50%\" height=\"30%\">\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <!-- <label class=\"col-md-3 form-control-label\" for=\"text-input\"></label> -->\n                        <div class=\"col-md-9\">\n                            <input type=\"hidden\" name=\"NumBusesAsociados\" #NumBusesAsociados=\"ngModel\" [(ngModel)]=\"rutaService.selectedRuta.NumBusesAsociados\">\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <label class=\"col-md-3 form-control-label\" for=\"text-input\"></label>\n                        <div class=\"col-md-9\">\n                            <input type=\"hidden\" name=\"origen\" #origen=\"ngModel\" [(ngModel)]=\"rutaService.selectedRuta.origen\">\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <label class=\"col-md-3 form-control-label\" for=\"text-input\"></label>\n                        <div class=\"col-md-9\">\n                            <input type=\"hidden\" name=\"destino\" #destino=\"ngModel\" [(ngModel)]=\"rutaService.selectedRuta.destino\">\n                        </div>\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cerrar</button>\n                        <div class=\"card-action\">\n                            <div class=\"input-field\">\n                                <button class=\"btn btn-primary btn-user mce-btn-group\" style=\"margin-right: 7.5px;\" (click)=\"resetForm(rutaForm)\">\n                                                        Limpiar</button>\n                                <button class=\"btn btn-success btn-user mce-btn-group\" (click)=\"addRuta(rutaForm)\" data-dismiss=\"modal\">\n                                                        Guardar</button>\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </form>\n            </div>\n\n        </div>\n    </div>\n</div>\n<!--Fin del modal agregar/actualizar Rutas--->\n\n<!-- Inicio del modal Eliminar Ruta -->\n<div class=\"modal fade\" id=\"modalEliminarRutas\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" style=\"display: none;\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-danger\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Eliminar Ruta {{selectedRuta1.nombre}}</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                      <span aria-hidden=\"true\">×</span>\n                    </button>\n            </div>\n            <div class=\"modal-body\">\n                <p>Estas seguro de eliminar la Ruta?</p>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cerrar</button>\n                <button (click)=\"deleteRuta(selectedRuta1._id)\" type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Eliminar</button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Fin del modal Eliminar Ruta -->\n\n<!-- Inicio del modal Asignar Conductor a Bus -->\n<div class=\"modal fade\" id=\"modalAsignarOrigenyDestinoRuta\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" style=\"display: none;\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-danger\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\">Asignar paradas de Origen y Destino a la Ruta <b>{{selectedRuta1.nombre}}</b>.</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                      <span aria-hidden=\"true\">×</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <h4 class=\"modal-dialog\" *ngIf=\"selectedRuta1.origen != ''\">Origen Actual: <b>{{selectedRuta1.origen}} </b>.</h4>\n                <h4 class=\"modal-dialog\" *ngIf=\"selectedRuta1.destino != ''\">Destino Actual: <b> {{selectedRuta1.destino}}</b>.</h4>\n\n                <form class=\"user\" #OrigenDestinoForm=\"ngForm\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-md-3 form-control-label\" for=\"text-input\">Origen</label>\n                        <div class=\"col-md-9\">\n                            <input class=\"form-control form-control-user\" type=\"text\" name=\"origen\" #origen=\"ngModel\" [(ngModel)]=\"selectedRuta1.origen\" placeholder=\"Origen\">\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-md-3 form-control-label\" for=\"text-input\">Destino</label>\n                        <div class=\"col-md-9\">\n                            <input class=\"form-control form-control-user\" type=\"text\" name=\"destino\" #destino=\"ngModel\" [(ngModel)]=\"selectedRuta1.destino\" placeholder=\"Destino\">\n                        </div>\n                    </div>\n                </form>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cerrar</button>\n                <button (click)=\"asignarOrigenDestinoRuta(OrigenDestinoForm)\" type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\"><i class=\"material-icons\">save</i> Guardar</button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Fin del modal Asignar Conductor a Bus -->\n\n<div class=\"container\" style=\"left: initial\">\n    <!-- <div class=\"card o-hidden border-0 shadow-lg my-5\"> -->\n    <!-- <div class=\"card-body\"> -->\n    <!-- <div class=\"row\" style=\"align-content: initial\"> -->\n\n    <!-- <div class=\"col-lg-4\">\n            <div class=\"p-5\">\n                <div class=\"text-center\">\n                    <h1 class=\"h4 text-gray-900 mb-4\">Agregar Ruta!</h1>\n                </div>\n                <br>\n\n                <form class=\"user\" #busForm=\"ngForm\" (ngSubmit)=\"addBus(busForm)\">\n\n                    <div class=\"form-group\">\n                        <input type=\"hidden\" name=\"_id\" #_id=\"ngModel\" [(ngModel)]=\"busService.selectedBus._id\">\n                    </div>\n\n                    <div class=\"form-group\">\n                        <input class=\"form-control form-control-user\" type=\"text\" name=\"nombre\" #nombre=\"ngModel\" [(ngModel)]=\"busService.selectedBus.nombre\" placeholder=\"Nombre\">\n                    </div>\n                    <div class=\"form-group\">\n                        <input class=\"form-control form-control-user\" type=\"text\" name=\"descripcion\" #descripcion=\"ngModel\" [(ngModel)]=\"busService.selectedBus.descripcion\" placeholder=\"descripcion\">\n                    </div>\n                    <div class=\"form-group\">\n                        <input class=\"form-control form-control-user\" type=\"text\" name=\"imagenBus\" #imagenBus=\"ngModel\" [(ngModel)]=\"busService.selectedBus.imagenBus\" placeholder=\"imagenBus\">\n                    </div>\n                    <div class=\"form-group\">\n                        <input class=\"form-control form-control-user\" type=\"text\" name=\"Fecha\" #Fecha=\"ngModel\" [(ngModel)]=\"busService.selectedBus.Fecha\" placeholder=\"Fecha\">\n                    </div>\n                    <div class=\"form-group\">\n                        <input class=\"form-control form-control-user\" type=\"text\" name=\"imagenTipoBus\" #imagenTipoBus=\"ngModel\" [(ngModel)]=\"busService.selectedBus.imagenTipoBus\" placeholder=\"imagenTipoBus\">\n                    </div>\n\n                    <div class=\"form-group\">\n                        <input type=\"hidden\" name=\"NumBusesAsociados\" #NumBusesAsociados=\"ngModel\" [(ngModel)]=\"busService.selectedBus.NumBusesAsociados\">\n                    </div>\n\n                    <div class=\"form-group\">\n                        <input type=\"hidden\" name=\"arrayBuses\" #arrayBuses=\"ngModel\" [(ngModel)]=\"busService.selectedBus.arrayBuses\">\n                    </div>\n\n                    <div class=\"card-action\">\n                        <div class=\"input-field\">\n                            <button class=\"btn btn-primary btn-user mce-btn-group\" style=\"margin-right: 20px;\" (click)=\"resetForm(busForm)\">\n                                        Limpiar</button>\n                            <button class=\"btn btn-success btn-user mce-btn-group\">\n                                        Guardar</button>\n                        </div>\n\n                    </div>\n                </form>\n            </div>\n        </div> -->\n\n    <!-- <div class=\"col-lg-8\">\n            <div class=\"p-5\">\n                <div class=\"text-center\">\n                    <h1 class=\"h4 text-gray-900 mb-4\">Rutas!</h1>\n                </div>\n                <br>\n                <table class=\"w3-table-all\">\n                    <thead>\n                        <tr class=\"w3-light-grey w3-hover-red\">\n                            <th>Nombre</th>\n                            <th>descripcion</th>\n                            <th>imagenBus</th>\n                            <th>Fecha</th>\n                            <th>imagenTipoBus</th>\n                            <th>Operaciones</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr class=\"w3-hover-gray\" *ngFor=\"let bus of busService.buses\">\n\n                            <td>{{bus.nombre}}</td>\n                            <td>{{bus.descripcion}}</td>\n                            <td>{{bus.imagenBus}}</td>\n                            <td>{{bus.Fecha}}</td>\n                            <td>{{bus.imagenTipoBus}}</td>\n                            <td>\n                                <a (click)=\"editBus(bus)\">\n                                    <i class=\"material-icons\">edit</i>\n                                </a>\n                                <a (click)=\"deleteBus(bus._id)\">\n                                    <i class=\"material-icons\">delete</i>\n                                </a>\n                            </td>\n\n                        </tr>\n                    </tbody>\n                </table>\n\n            </div>\n        </div>\n    </div> -->\n    <!-- // *********************************************************************************************** ************************* -->\n\n    <!-- </div> -->\n</div>\n\n<div class=\"row\" style=\"align-content: initial\">\n\n    <div class=\"col-lg-12 my-5\">\n\n\n        <!-- Tabla Listado Buses -->\n        <div class=\"card\">\n            <div class=\"card-header\">\n                <i class=\"fa fa-address-book\"></i> Buses\n                <button (click)=\"resetForm1(busForm)\" type=\"button\" title=\"Crear Bus\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#modalActualizarBus\">\n                            <i class=\"material-icons\">add_to_photos</i>&nbsp;Nuevo Bus&nbsp;\n                        </button>\n            </div>\n            <div class=\"card-body\">\n                <div class=\"form-group row\">\n                    <div class=\"col-md-6\">\n                        <div class=\"input-group\" ng-controller=\"ngifctrl\">\n                            <select class=\"form-control col-md-3\" id=\"opcion\" name=\"opcion\">\n                                      <option value=\"placa\">Placa</option>\n                                    </select>\n                            <!-- (keyup)=\"buscarBus(buscarTexto.value)\" (keydown.enter)=\"buscarBus(buscarTexto.value)\" -->\n                            <input (keyup)=\"buscarBus(buscarTexto1.value)\" (keydown.enter)=\"buscarBus(buscarTexto1.value)\" type=\"text\" id=\"texto1\" name=\"texto1\" class=\"form-control\" placeholder=\"Texto a buscar\" #buscarTexto1>\n                            <!-- (click)=\"buscarBus(buscarTexto.value)\" -->\n                            <button (click)=\"buscarBus(buscarTexto1.value)\" type=\"button\" title=\"Buscar\" class=\"btn btn-primary\"><i class=\"fa fa-search\"></i> Buscar</button>\n                        </div>\n                    </div>\n                </div>\n                <table class=\"table table-hover table-bordered table-striped table-sm table-responsive\">\n                    <thead>\n                        <tr>\n                            <th width=\"10%\">Placa</th>\n                            <th width=\"10%\">Tipo Bus</th>\n                            <th width=\"12%\">Ruta Asociada</th>\n                            <th width=\"20%\">Conductor Asociado</th>\n                            <th width=\"10%\">Coordenadas</th>\n                            <th width=\"25%\">Operaciones</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n\n                        <!-- <tr *ngFor=\"let bus of conductorService.conductores\"> -->\n                        <tr *ngFor=\"let bus of selectedBuses1\">\n\n                            <td>{{bus.placa}}</td>\n                            <!-- <td>{{bus.tipoBus}}</td> -->\n                            <td *ngIf=\"bus.tipoBus==='assets/img/padron.png'\">Padron</td>\n                            <td *ngIf=\"bus.tipoBus==='assets/img/alimentador.png'\">Alimentador</td>\n                            <td *ngIf=\"bus.tipoBus==='assets/img/articulado.png'\">Articulado</td>\n\n                            <td>{{bus.RutaAsociada.nombre}}</td>\n                            <td>{{bus.ConductorAsociado.nombre}}</td>\n                            <!-- <td><img src=\"{{conductor.RutaAsociada.imagenBus}}\" width=\"30%\" height=\"30%\"></td> -->\n                            <td> {{bus.latitud}}, {{bus.longitud}}, {{bus.sentido}}</td>\n                            <!-- <td> {{conductor.RutaAsociada.nombre}}, {{conductor.RutaAsociada.NumBusesAsociados}}</td> -->\n                            <td>\n                                <!-- <a (click)=\"editBus(conductor)\">\n                                    <i class=\"material-icons\">edit</i>\n                                </a>\n                                <a (click)=\"deleteBus(conductor._id)\">\n                                    <i class=\"material-icons\">delete</i>\n                                </a> -->\n\n                                <button (click)=\"editBus(bus); getRutasByTipoBus(bus.tipoBus); resetForm2(asignarRutaBusForm);\" type=\"button\" title=\"Asignar Ruta\" class=\"btn btn-success btn-sm mce-btn-group\" data-toggle=\"modal\" data-target=\"#modalAsignarRutaBus\">\n                                    <i class=\"material-icons\">directions_bus</i>\n                                </button>&nbsp;\n                                <button (click)=\"editBus(bus); resetForm3(asignarconductorBusForm);\" type=\"button\" title=\"Asignar Conductor\" class=\"btn btn-success btn-sm mce-btn-group\" data-toggle=\"modal\" data-target=\"#modalAsignarConductorBus\">\n                                    <i class=\"material-icons\">assignment_ind</i>\n                                </button>&nbsp;\n                                <button (click)=\"editBus(bus)\" type=\"button\" title=\"Editar Bus\" class=\"btn btn-warning btn-sm mce-btn-group\" data-toggle=\"modal\" data-target=\"#modalActualizarBus\">\n                                    <i class=\"material-icons\">edit</i>\n                                </button> &nbsp;\n                                <button (click)=\"editBus(bus)\" type=\"button\" title=\"Eliminar Bus\" class=\"btn btn-danger btn-sm mce-btn-group\" data-toggle=\"modal\" data-target=\"#modalEliminarBus\">\n                                    <i class=\"material-icons\">delete</i>\n                                </button> &nbsp;\n                                <button (click)=\"editBus(bus); CuadroDialogo1()\" type=\"button\" title=\"Info Bus\" class=\"btn btn-dark btn-sm mce-btn-group\">\n                                    <i class=\"material-icons\">info</i>\n                                </button>\n\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n\n                <div class=\"row animated fadeIn fast\" *ngIf=\"selectedBuses1.length==0\">\n                    <div class=\"col-md-12\">\n                        <div class=\"alert alert-info\" role=\"alert\">\n                            No existen resultados pata la busqueda.\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n\n    </div>\n</div>\n<!-- Fin tabla listado Buses -->\n\n<!--Inicio del modal agregar/actualizar Bus-->\n<div class=\"modal fade\" id=\"modalActualizarBus\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" style=\"display: none;\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-primary modal-lg\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Agregar Bus</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                      <span aria-hidden=\"true\">×</span>\n                    </button>\n            </div>\n            <div class=\"modal-body\">\n\n                <form class=\"user\" #busForm=\"ngForm\" (ngSubmit)=\"addBus(busForm)\">\n\n                    <div class=\"form-group row\">\n                        <div class=\"col-md-9\">\n                            <input type=\"hidden\" name=\"_id\" #_id=\"ngModel\" [(ngModel)]=\"busesService.selectedBus._id\">\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <label class=\"col-md-3 form-control-label\" for=\"text-input\">Placa</label>\n                        <div class=\"col-md-9\">\n                            <input class=\"form-control form-control-user\" type=\"text\" name=\"placa\" #placa=\"ngModel\" [(ngModel)]=\"busesService.selectedBus.placa\" placeholder=\"Placa\">\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-md-3 form-control-label\" for=\"text-input\">Tipo Bus</label>\n                        <div class=\"col-md-9\">\n                            <!-- <input class=\"form-control form-control-user\" type=\"text\" name=\"imagenTipoBus\" #imagenTipoBus=\"ngModel\" [(ngModel)]=\"busService.selectedBus.imagenTipoBus\" placeholder=\"ImagenTipoBus\"> -->\n                            <input type=\"radio\" name=\"tipoBus\" #tipoBus=\"ngModel\" [(ngModel)]=\"busesService.selectedBus.tipoBus\" value=\"assets/img/alimentador.png\" checked> <img src=\"assets/img/alimentador.png\" width=\"50%\" height=\"30%\"> <br>\n                            <input type=\"radio\" name=\"tipoBus\" #tipoBus=\"ngModel\" [(ngModel)]=\"busesService.selectedBus.tipoBus\" value=\"assets/img/padron.png\"> <img src=\"assets/img/padron.png\" width=\"50%\" height=\"30%\"><br>\n                            <input type=\"radio\" name=\"tipoBus\" #tipoBus=\"ngModel\" [(ngModel)]=\"busesService.selectedBus.tipoBus\" value=\"assets/img/articulado.png\"> <img src=\"assets/img/articulado.png\" width=\"50%\" height=\"30%\">\n                        </div>\n                    </div>\n                    <!-- <div class=\"form-group row\">\n                        <label class=\"col-md-3 form-control-label\" for=\"text-input\">Tipo Bus</label>\n                        <div class=\"col-md-9\">\n                            <input class=\"form-control form-control-user\" type=\"text\" name=\"tipoBus\" #tipoBus=\"ngModel\" [(ngModel)]=\"busesService.selectedBus.tipoBus\" placeholder=\"tipoBus\">\n                        </div>\n                    </div> -->\n                    <div class=\"form-group row\">\n                        <div class=\"col-md-9\">\n                            <!-- <input class=\"form-control form-control-user\" type=\"text\" name=\"RutaAsociada\" #RutaAsociada=\"ngModel\" [(ngModel)]=\"conductorService.selectedConductor.RutaAsociada\" placeholder=\"RutaAsociada\"> -->\n                            <input type=\"hidden\" name=\"RutaAsociada\" #RutaAsociada=\"ngModel\" [(ngModel)]=\"busesService.selectedBus.RutaAsociada\">\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <div class=\"col-md-9\">\n                            <!-- <input class=\"form-control form-control-user\" type=\"text\" name=\"RutaAsociada\" #RutaAsociada=\"ngModel\" [(ngModel)]=\"conductorService.selectedConductor.RutaAsociada\" placeholder=\"RutaAsociada\"> -->\n                            <input type=\"hidden\" name=\"ConductorAsociado\" #ConductorAsociado=\"ngModel\" [(ngModel)]=\"busesService.selectedBus.ConductorAsociado\">\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <div class=\"col-md-9\">\n                            <input type=\"hidden\" value=0 name=\"longitud\" #longitud=\"ngModel\" [(ngModel)]=\"busesService.selectedBus.longitud\">\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <div class=\"col-md-9\">\n                            <input type=\"hidden\" name=\"latitud\" #latitud=\"ngModel\" [(ngModel)]=\"busesService.selectedBus.latitud\">\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <label class=\"col-md-3 form-control-label\" for=\"text-input\"></label>\n                        <div class=\"col-md-9\">\n                            <input type=\"hidden\" name=\"sentido\" #sentido=\"ngModel\" [(ngModel)]=\"busesService.selectedBus.sentido\">\n                        </div>\n                    </div>\n\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cerrar</button>\n                        <div class=\"card-action\">\n                            <div class=\"input-field\">\n                                <button class=\"btn btn-primary btn-user mce-btn-group\" style=\"margin-right: 7.5px;\" (click)=\"resetForm1(busForm)\">\n                                                        Limpiar</button>\n                                <button class=\"btn btn-success btn-user mce-btn-group\" (click)=\"addBus(busForm)\" data-dismiss=\"modal\">\n                                                        Guardar</button>\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </form>\n            </div>\n\n        </div>\n    </div>\n</div>\n<!--Fin del modal agg/act Bus-->\n\n\n<!-- Inicio del modal Eliminar Bus -->\n<div class=\"modal fade\" id=\"modalEliminarBus\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" style=\"display: none;\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-danger\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Eliminar el Bus con Placa: {{selectedBus1.placa}}</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                      <span aria-hidden=\"true\">×</span>\n                    </button>\n            </div>\n            <div class=\"modal-body\">\n                <p>Estas seguro de eliminar el Bus?</p>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cerrar</button>\n                <button (click)=\"deleteBus(selectedBus1._id)\" type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Eliminar</button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Fin del modal Eliminar Bus -->\n\n<!-- Inicio del modal Asignar Ruta a Bus -->\n<div class=\"modal fade\" id=\"modalAsignarRutaBus\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" style=\"display: none;\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-danger\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\">Asignar una Ruta para el Bus: <b>{{selectedBus1.placa}}</b>.</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                      <span aria-hidden=\"true\">×</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <h4 class=\"modal-dialog\" *ngIf=\"selectedBus1.RutaAsociada.nombre != ''\">Ruta Actual: <b>{{selectedBus1.RutaAsociada.nombre}} </b>.</h4>\n                <h4 class=\"modal-dialog\" *ngIf=\"selectedBus1.RutaAsociada.nombre == ''\"><b>Sin Ruta Asociada</b>.</h4>\n\n                <h4 class=\"modal-dialog\">Seleccione la ruta que va ser asignada. </h4>\n\n                <form class=\"user\" #asignarRutaBusForm=\"ngForm\">\n                    <div class=\"form-group row\">\n                        <select class=\"modal-body\" name=\"ruta\" ngModel> \n                            <option value=\"\" selected disabled>Seleccione una ruta</option>\n                            <option *ngIf=\"selectedBus1.RutaAsociada.nombre != ''\" value=\"\">Quitar Ruta Actual</option>\n                            <!-- <option *ngFor=\"let ruta of selectedRutas1\" [ngValue]=\"ruta\" >{{ruta.nombre}}</option> -->\n                            <option *ngFor=\"let ruta of selectedRutas2\" [ngValue]=\"ruta\" >{{ruta.nombre}}</option>\n                        </select>\n                    </div>\n\n                    <!-- </div> -->\n                </form>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cerrar</button>\n                <button (click)=\"asignarRutaBus(asignarRutaBusForm)\" type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\"><i class=\"material-icons\">save</i> Guardar</button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Fin del modal Asignar Ruta a Bus -->\n\n<!-- Inicio del modal Asignar Conductor a Bus -->\n<div class=\"modal fade\" id=\"modalAsignarConductorBus\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" style=\"display: none;\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-danger\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\">Asignar un Conductor para el Bus: <b>{{selectedBus1.placa}}</b>.</h5>\n                <!-- // **ngIf=\"selectedBus1.ConductorAsociado != ''\"  -->\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                      <span aria-hidden=\"true\">×</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <h4 class=\"modal-dialog\" *ngIf=\"selectedBus1.ConductorAsociado.nombre != ''\">Conductor Actual: <b>{{selectedBus1.ConductorAsociado.nombre}} </b>.</h4>\n                <h4 class=\"modal-dialog\" *ngIf=\"selectedBus1.ConductorAsociado.nombre == ''\"><b> Sin Conductor Asociado</b>.</h4>\n\n                <h4 class=\"modal-dialog\">Seleccione el Conductor que va ser asignado. </h4>\n\n                <form class=\"user\" #asignarconductorBusForm=\"ngForm\">\n                    <div class=\"form-group row\">\n                        <select class=\"modal-body\" name=\"conductor\" ngModel> \n                            <option value=\"\" disabled selected>Seleccione un Conductor</option>\n                            <option *ngIf=\"selectedBus1.ConductorAsociado.nombre != ''\" value=\"\">Quitar Conductor Actual</option>\n                            <option *ngFor=\"let conductor of conductoresSinBus\" [ngValue]=\"conductor\" >{{conductor.nombre}}</option>\n                        </select>\n                    </div>\n                </form>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cerrar</button>\n                <button (click)=\"asignarConductorBus(asignarconductorBusForm)\" type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\"><i class=\"material-icons\">save</i> Guardar</button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Fin del modal Asignar Conductor a Bus -->\n\n<!-- // *********************************************************************************************** ************************* -->\n<!-- // *********************************************************************************************** ************************* -->\n<!-- // *********************************************************************************************** ************************* -->\n<!-- // *********************************************************************************************** ************************* -->\n<!-- // *********************************************************************************************** ************************* -->\n\n<!-- Tabla Listado Conductores UserI -->\n<div class=\"row\" style=\"align-content: initial\">\n\n    <div class=\"col-lg-12 my-5\">\n\n        <!-- Tabla Listado Conductores -->\n        <div class=\"card\">\n            <div class=\"card-header\">\n                <i class=\"fa fa-address-book\"></i> Conductores\n            </div>\n            <div class=\"card-body\">\n                <div class=\"form-group row\">\n                    <div class=\"col-md-6\">\n                        <div class=\"input-group\" ng-controller=\"ngifctrl\">\n                            <select class=\"form-control col-md-3\" id=\"opcion\" name=\"opcion\">\n                                      <option value=\"nombre\">Nombre</option>\n                                    </select>\n                            <!-- (keyup)=\"buscarBus(buscarTexto.value)\" (keydown.enter)=\"buscarBus(buscarTexto.value)\" -->\n                            <input (keyup)=\"buscarConductor(buscarTexto2.value)\" (keydown.enter)=\"buscarConductor(buscarTexto2.value)\" type=\"text\" id=\"texto2\" name=\"texto2\" class=\"form-control\" placeholder=\"Texto a buscar\" #buscarTexto2>\n                            <!-- (click)=\"buscarBus(buscarTexto.value)\" -->\n                            <button (click)=\"buscarConductor(buscarTexto2.value)\" type=\"button\" title=\"Buscar\" class=\"btn btn-primary\"><i class=\"fa fa-search\"></i> Buscar</button>\n                        </div>\n                    </div>\n                </div>\n                <table class=\"table table-hover table-bordered table-striped table-sm table-responsive\">\n                    <thead>\n                        <tr width=\"100%\">\n                            <th style=\"width: 30%;\">Nombre</th>\n                            <th style=\"width: 30%;\">Email</th>\n                            <th style=\"width: 15%;\">Tipo</th>\n                            <th style=\"width: 14%;\">Activo</th>\n                            <th style=\"width: 25%;\">Operaciones</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n\n                        <!-- <tr *ngFor=\"let bus of conductorService.conductores\"> -->\n                        <tr *ngFor=\"let conductor of selectedConductores1\">\n\n                            <td>{{conductor.nombre}}</td>\n                            <td>{{conductor.email}}</td>\n                            <td>{{conductor.tipoUsuario}}</td>\n                            <td>{{conductor.estado}}</td>\n                            <td>\n                                <button (click)=\"editConductor(conductor)\" type=\"button\" title=\"Editar Conductor\" class=\"btn btn-warning btn-sm\" data-toggle=\"modal\" data-target=\"#modalActualizarConductor\">\n                                    <i class=\"material-icons\">edit</i>\n                                </button> &nbsp;\n                                <button (click)=\"editConductor(conductor)\" type=\"button\" title=\"Eliminar Conductor\" class=\"btn btn-danger btn-sm\" data-toggle=\"modal\" data-target=\"#modalEliminarConductor\">\n                                    <i class=\"material-icons\">delete</i>\n                                </button>\n\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n\n                <div class=\"row animated fadeIn fast\" *ngIf=\"selectedConductores1.length==0\">\n                    <div class=\"col-md-12\">\n                        <div class=\"alert alert-info\" role=\"alert\">\n                            No existen resultados pata la busqueda.\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n\n    </div>\n</div>\n<!-- Fin tabla listado Conductores UserI -->\n\n<!--Inicio del modal actualizar Conductor UserI-->\n<div class=\"modal fade\" id=\"modalActualizarConductor\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" style=\"display: none;\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-primary modal-lg\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Editar Conductor</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                      <span aria-hidden=\"true\">×</span>\n                    </button>\n            </div>\n            <div class=\"modal-body\">\n\n                <form class=\"user\" #conductorForm=\"ngForm\" (ngSubmit)=\"addConductor(conductorForm)\">\n\n                    <div class=\"form-group row\">\n                        <div class=\"col-md-9\">\n                            <input type=\"hidden\" name=\"_id\" #_id=\"ngModel\" [(ngModel)]=\"selectedConductor1._id\">\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <label class=\"col-md-3 form-control-label\" for=\"text-input\">Nombre</label>\n                        <div class=\"col-md-9\">\n                            <input class=\"form-control form-control-user\" type=\"text\" name=\"nombre\" #nombre=\"ngModel\" [(ngModel)]=\"selectedConductor1.nombre\" placeholder=\"nombre\">\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-md-3 form-control-label\" for=\"text-input\">Email</label>\n                        <div class=\"col-md-9\">\n                            <input class=\"form-control form-control-user\" type=\"text\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"selectedConductor1.email\" placeholder=\"email\">\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-md-3 form-control-label\" for=\"text-input\">Contrasena</label>\n                        <div class=\"col-md-9\">\n                            <input class=\"form-control form-control-user\" type=\"text\" name=\"contrasena\" #contrasena=\"ngModel\" [(ngModel)]=\"selectedConductor1.contrasena\" placeholder=\"contrasena\">\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <div class=\"col-md-9\">\n                            <input type=\"hidden\" name=\"tipoUsuario\" #tipoUsuario=\"ngModel\" [(ngModel)]=\"selectedConductor1.tipoUsuario\">\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <div class=\"col-md-9\">\n                            <input type=\"hidden\" name=\"estado\" #estado=\"ngModel\" [(ngModel)]=\"selectedConductor1.estado\">\n                        </div>\n                    </div>\n\n\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cerrar</button>\n                        <div class=\"card-action\">\n                            <div class=\"input-field\">\n                                <button class=\"btn btn-primary btn-user mce-btn-group\" style=\"margin-right: 7.5px;\" (click)=\"resetForm3(conductorForm)\">\n                                                        Limpiar</button>\n                                <button class=\"btn btn-success btn-user mce-btn-group\" (click)=\"addConductor(conductorForm)\" data-dismiss=\"modal\">\n                                                        Guardar</button>\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </form>\n            </div>\n\n        </div>\n    </div>\n</div>\n<!--Fin del modal agg/act Conductor UserI-->\n\n<!-- Inicio del modal Eliminar Conductor UserI -->\n<div class=\"modal fade\" id=\"modalEliminarConductor\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" style=\"display: none;\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-danger\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Eliminar el Conductor: {{selectedConductor1.nombre}}</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                      <span aria-hidden=\"true\">×</span>\n                    </button>\n            </div>\n            <div class=\"modal-body\">\n                <p>Estas seguro de eliminar el Conductor?</p>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cerrar</button>\n                <button (click)=\"deleteConductor(selectedConductor1._id)\" type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Eliminar</button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Fin del modal Eliminar Conductor UserI -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\" animated fadeIn \">\n    <!-- <p class=\"lead\">Esta es la aplicacion para rastrear buses de metrolinea</p> -->\n    <!-- <div class=\"container\">\n        <h1 class=\"display-3\" style=\"text-align: center;\">INMETRO App</h1> -->\n    <!-- </div> -->\n    <img src='assets/img/A-64.png' title=\"INMETRO APP\" height=\"100%\" width=\"100%\" class=\"img-fluid\">\n    <mat-toolbar class=\"my-2 center\" [style.backgroundColor]=\"'lightgreen'\">\n        <span>Rastreo de Buses Mediante GPS</span>\n    </mat-toolbar>\n    <!-- <div #map style=\"width:100%;height:400px\"></div> -->\n    <app-mapa></app-mapa>\n</div>\n\n\n<!-- <div class=\"main-container\"> -->\n<!-- <h3>Raised Buttons</h3>\n    <div class=\"example-button-row\">\n        <button mat-raised-button>Basic</button>\n        <button mat-raised-button color=\"primary\">Primary</button>\n        <button mat-raised-button color=\"accent\">Accent</button>\n        <button mat-raised-button color=\"warn\">Warn</button>\n        <button mat-raised-button disabled>Disabled</button>\n        <a mat-raised-button routerLink=\".\">Link</a>\n    </div>\n\n    <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar> -->\n\n<!-- </div> -->\n\n<!-- <app-mapa></app-mapa> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mapa/mapa-editar.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/mapa/mapa-editar.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <form [formGroup]=\"forma\">\n    <mat-form-field>\n        <input matInput placeholder=\"Nombre\" formControlName=\"placa\">\n    </mat-form-field>\n\n    <mat-form-field>\n        <textarea rows=\"3\" matInput placeholder=\"Ruta\" formControlName=\"ruta\"></textarea>\n    </mat-form-field>\n\n    <div>\n        <button (click)=\"guardarCambios()\" mat-raised-button color=\"primary\">Guardar</button>\n        <button type=\"button\" (click)=\"onNoClick()\" mat-raised-button color=\"warn\">Cancelar</button>\n    </div>\n</form> -->\n\n<div>\n    <div class=\"row\">\n        <div class=\"col-md-4\">\n            <strong>Ruta Bus: </strong> <b>{{data.ruta.nombre}}</b> <br> <strong>Placa Bus: </strong> <b>{{data.placa}}</b>\n        </div>\n        <div class=\"col-md-8\">\n            Paradas: {{data.ruta.descripcion}}\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-4\">\n        </div>\n        <div class=\"col-md-2\">\n            <button type=\"button\" (click)=\"onNoClick()\" mat-raised-button color=\"warn\">Cerrar</button>\n        </div>\n        <div class=\"col-md-4\">\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mapa/mapa.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/mapa/mapa.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card [style.backgroundColor]=\"'white'\">\n\n    <mat-card-title>\n        <div class=\"form-group row\">\n            <div class=\"col-md-6\">\n                <p style=\"color: darkgreen;\">Mapa</p>\n                <div class=\"input-group\" ng-controller=\"ngifctrl\">\n                    <b>A donde vas?</b>&nbsp;\n                    <input (keydown.enter)=\"getDirection(buscarParada.value); SendAddToCartEvent(buscarParada.value);\" type=\"text\" id=\"texto\" name=\"texto\" class=\"form-control\" placeholder=\"Ej: Estacion San Mateo, SENA, UIS\" #buscarParada>&nbsp;\n                    <button (click)=\"getDirection(buscarParada.value); SendAddToCartEvent(buscarParada.value);\" type=\"button\" title=\"Buscar\" class=\"btn btn-primary\"><i class=\"fa fa-search\"></i> Buscar</button>\n                </div>\n            </div>\n        </div>\n    </mat-card-title>\n\n    <!-- (centerChange)= (zoomChange) (boundsChange)=\"moverMapa( $event);\" (mapClick)=\"agregarMarcador( $event )\" -->\n    <!-- <agm-circle [latitude]=\"lat\" [longitude]=\"lng\" [radius]=\"30\" [fillColor]=\"'red'\" [circleDraggable]=\"true\" [editable]=\"true\">></agm-circle> -->\n\n    <mat-card-content>\n\n        <agm-map [latitude]=\"latUsuario\" [longitude]=\"lngUsuario\" [zoom]=\"16\">\n            <agm-direction *ngIf=\"isDirectionActive\" [transitOptions]=\"{ modes: ['BUS']}\" [travelMode]=\"'TRANSIT'\" [provideRouteAlternatives]=\"true\" [origin]=\"this.origin\" [destination]=\"this.destination\"> </agm-direction>\n\n            <agm-marker [iconUrl]=\"'assets/img/mapaUsuario.png'\" [latitude]=\"latUsuario\" [longitude]=\"lngUsuario\">\n\n                <agm-info-window>\n                    <strong>Aqui Estas!!</strong>\n                </agm-info-window>\n            </agm-marker>\n        </agm-map>\n    </mat-card-content>\n\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/paradas/paradas.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/paradas/paradas.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"my-5\">PARADAS DE LAS DIFERENTES RUTAS</h1>\n\n<div class=\"input-group\" ng-controller=\"ngifctrl\">\n    <button (click)=\"resetForm()\" type=\"button\" title=\"Crear Parada\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#modalActualizarParadas\">\n        <i class=\"material-icons\">add_to_photos</i>&nbsp;Nueva Parada&nbsp;\n    </button> &nbsp;\n    <div class=\"col-6\">\n        <input (keyup)=\"this.paradaServices.buscarParadas(buscarTexto.value)\" (keydown.enter)=\"this.paradaServices.buscarParadas(buscarTexto.value)\" type=\"text\" id=\"texto\" name=\"texto\" class=\"form-control\" placeholder=\"Parada a buscar\" #buscarTexto>\n    </div>\n    <div class=\"col-2\">\n        <button (click)=\"this.paradaServices.buscarParadas(buscarTexto.value)\" type=\"button\" title=\"Buscar\" class=\"btn btn-primary\"><i class=\"fa fa-search\"></i> Buscar</button>\n    </div>\n    <div class=\"col-4\">\n\n    </div>\n</div>\n<hr>\n<div class=\"row\" *ngIf=\"this.paradaServices.busquedaParadas != undefined\">\n    <div class=\"col-md-3 my-2\" *ngFor=\"let parada of this.paradaServices.busquedaParadas\">\n        <mat-card class=\"example-card\">\n\n            <mat-card-header>\n                <div mat-card-avatar><img src=\"{{parada.tipoParada}}\" style=\"width: 120%; height: 120%; border-radius:30px;\"></div>\n                <mat-card-title>{{parada.nombre}}</mat-card-title>\n                <mat-card-subtitle *ngIf=\"parada.tipoParada === 'assets/img/station_stop.png'\"> Estacion</mat-card-subtitle>\n                <mat-card-subtitle *ngIf=\"parada.tipoParada === 'assets/img/bus_stop.png'\"> Parada </mat-card-subtitle>\n            </mat-card-header>\n            <!-- <img mat-card-image style=\"width: min-content; height: min-content;\" src=\"{{parada.tipoParada}} \"> -->\n\n            <mat-card-content>\n                <div class=\"alert alert-info\" role=\"alert\" *ngIf=\"parada.rutasAsociadas.length !== 0\">\n                    <b>{{parada.rutasAsociadas}}</b>\n                </div>\n\n                <!-- <div class=\"col-md-12\" *ngIf=\"parada.rutasAsociadas.length === 0\"> -->\n                <div class=\"alert alert-info\" role=\"alert\" *ngIf=\"parada.rutasAsociadas.length === 0\">\n                    Sin rutas asociadas.\n                </div>\n                <!-- </div> -->\n\n            </mat-card-content>\n\n            <mat-card-actions style=\"text-align: center;\">\n\n                <button (click)=\"this.paradaServices.editParada(parada); this.cargarBaseDatos(); obtenerRutasSinParada();\" class=\"btn btn-outline-primary btn-sm \" type=\"button\" title=\"Agregar Ruta\" data-toggle=\"modal\" data-target=\"#modalAsignarRutaParada\">\n                        <i class=\"material-icons\">call_split</i>\n                    </button> &nbsp;\n\n                <button (click)=\"this.paradaServices.editParada(parada)\" type=\"button\" title=\"Editar Parada\" class=\"btn btn-outline-warning btn-sm \" data-toggle=\"modal\" data-target=\"#modalActualizarParadas\">\n                        <i class=\"material-icons\">edit</i>\n                    </button> &nbsp;\n\n                <button (click)=\"this.paradaServices.editParada(parada)\" type=\"button\" title=\"Eliminar Parada\" class=\"btn btn-outline-danger btn-sm\" data-toggle=\"modal\" data-target=\"#modalEliminarParadas\">\n                         <i class=\"material-icons\">delete</i>\n                    </button>\n\n            </mat-card-actions>\n\n        </mat-card>\n    </div>\n    <div class=\"col-1\">\n\n    </div>\n    <div *ngIf=\"this.paradaServices.busquedaParadas != undefined\">\n        <div class=\"row animated fadeIn fast\" *ngIf=\"this.paradaServices.busquedaParadas.length == 0\">\n            <div class=\"col-md-12\">\n                <div class=\"alert alert-info\" role=\"alert\">\n                    No existen resultados para la busqueda.\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n\n\n<!--Inicio del modal agregar/actualizar Paradas--->\n<div class=\"modal fade\" id=\"modalActualizarParadas\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" style=\"display: none;\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-primary modal-lg\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Agregar/Actualizar Parada</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                      <span aria-hidden=\"true\">×</span>\n                    </button>\n            </div>\n            <div class=\"modal-body\">\n\n                <form class=\"user\" #paradaForm=\"ngForm\" (ngSubmit)=\"this.paradaServices.addParada(paradaForm)\">\n\n                    <div class=\"form-group row\">\n                        <div class=\"col-md-9\">\n                            <input type=\"hidden\" name=\"_id\" #_id=\"ngModel\" [(ngModel)]=\"this.paradaServices.selectedParada._id\">\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <label class=\"col-md-3 form-control-label\" for=\"text-input\">Nombre de Parada</label>\n                        <div class=\"col-md-9\">\n                            <input class=\"form-control form-control-user\" type=\"text\" name=\"nombre\" #nombre=\"ngModel\" [(ngModel)]=\"this.paradaServices.selectedParada.nombre\" placeholder=\"Nombre\">\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-md-3 form-control-label\" for=\"text-input\">Direccion</label>\n                        <div class=\"col-md-9\">\n                            <input class=\"form-control form-control-user\" type=\"text\" name=\"direccion\" #direccion=\"ngModel\" [(ngModel)]=\"this.paradaServices.selectedParada.direccion\" placeholder=\"direccion\">\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-md-3 form-control-label\" for=\"text-input\">Latitud</label>\n                        <div class=\"col-md-9\">\n                            <input class=\"form-control form-control-user\" type=\"number\" name=\"latitud\" #latitud=\"ngModel\" [(ngModel)]=\"this.paradaServices.selectedParada.latitud\" placeholder=\"Latitud\">\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-md-3 form-control-label\" for=\"text-input\">Longitud</label>\n                        <div class=\"col-md-9\">\n                            <input class=\"form-control form-control-user\" type=\"number\" name=\"longitud\" #longitud=\"ngModel\" [(ngModel)]=\"this.paradaServices.selectedParada.longitud\" placeholder=\"Longitud\">\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-md-3 form-control-label\" for=\"text-input\">Tipo de Parada</label>\n                        <div class=\"col-md-9\">\n                            <input type=\"radio\" name=\"tipoParada\" #tipoParada=\"ngModel\" [(ngModel)]=\"this.paradaServices.selectedParada.tipoParada\" value=\"assets/img/bus_stop.png\" checked> Parada Bus\n                            <input type=\"radio\" name=\"tipoParada\" #tipoParada=\"ngModel\" [(ngModel)]=\"this.paradaServices.selectedParada.tipoParada\" value=\"assets/img/station_stop.png\"> Parada Estacion\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <div class=\"col-md-9\">\n                            <input type=\"hidden\" name=\"rutasAsociadas\" #rutasAsociadas=\"ngModel\" [(ngModel)]=\"this.paradaServices.selectedParada.rutasAsociadas\">\n                        </div>\n                    </div>\n\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cerrar</button>\n                        <div class=\"card-action\">\n                            <div class=\"input-field\">\n                                <button class=\"btn btn-primary btn-user mce-btn-group\" style=\"margin-right: 7.5px;\" (click)=\"resetForm(paradaForm)\">\n                                                        Limpiar</button>\n                                <button class=\"btn btn-success btn-user mce-btn-group\" (click)=\"this.paradaServices.addParada(paradaForm);\" data-dismiss=\"modal\">\n                                                        Guardar</button>\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </form>\n            </div>\n\n        </div>\n    </div>\n</div>\n<!--Fin del modal agregar/actualizar Paradas--->\n\n<!-- Inicio del modal Eliminar Parada -->\n<div class=\"modal fade\" id=\"modalEliminarParadas\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" style=\"display: none;\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-danger\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Eliminar Parada de {{this.paradaServices.selectedParada.nombre}}</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                      <span aria-hidden=\"true\">×</span>\n                    </button>\n            </div>\n            <div class=\"modal-body\">\n                <p>Estas seguro de eliminar la Parada?</p>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cerrar</button>\n                <button (click)=\"this.paradaServices.borrarParada(this.paradaServices.selectedParada._id);\" type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Eliminar</button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Fin del modal Eliminar Parada -->\n\n<!-- Inicio del modal Asignar Ruta al array de rutas de una Parada -->\n<div class=\"modal fade\" id=\"modalAsignarRutaParada\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" style=\"display: none;\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-danger\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\">Agregar/Eliminar Ruta a: <b>{{this.paradaServices.selectedParada.nombre}}</b>.</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                      <span aria-hidden=\"true\">×</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n\n                <h4 class=\"modal-dialog my-0\">Agregar Ruta. </h4>\n                <br>\n\n                <div *ngIf=\"this.RutasSinParada != undefined\">\n                    <div class=\"row my-2\" *ngFor=\"let rutaNombre of this.RutasSinParada;\">\n                        <div class=\"col-4\">\n                            {{rutaNombre}}\n                        </div>\n                        <div class=\"col-6\">\n\n                        </div>\n                        <div class=\"col-2\">\n                            <button type=\"button\" (click)=\"asignarRutaParada2(rutaNombre)\" title=\"Agregar Parada\" class=\"btn btn-success btn-sm\">\n                                <i class=\"material-icons\">local_hospital</i>\n                            </button>\n                        </div>\n                    </div>\n                </div>\n                <div *ngIf=\"this.RutasSinParada.length == 0\">\n                    <b>No hay Rutas para agregar</b>\n                </div>\n\n                <br>\n\n                <hr>\n                <h4 class=\"modal-dialog my-0\">Eliminar Ruta. </h4> <br>\n                <div *ngIf=\"this.paradaServices.selectedParada.rutasAsociadas.length != 0\">\n                    <div class=\"row my-2\" *ngFor=\"let nombreRuta of this.paradaServices.selectedParada.rutasAsociadas;\">\n                        <div class=\"col-4\">\n                            {{nombreRuta}}\n                        </div>\n                        <div class=\"col-6\">\n\n                        </div>\n                        <div class=\"col-2\">\n                            <button type=\"button\" (click)=\"removerRutaParada(nombreRuta)\" title=\"Eliminar Parada\" class=\"btn btn-danger btn-sm\">\n                                <i class=\"material-icons\">cancel</i>\n                            </button>\n                        </div>\n                    </div>\n                </div>\n                <div *ngIf=\"this.paradaServices.selectedParada.rutasAsociadas.length == 0\">\n                    <b>Sin Rutas Asociadas.</b>\n                </div>\n\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" style=\"text-align: center;\" class=\"btn btn-primary\" data-dismiss=\"modal\">Cerrar</button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Fin del modal Asignar Ruta a Bus -->\n<!-- remove_circle_outline -->\n<!-- highlight_off -->\n<!-- local_hospital es un mas -->\n<!-- clear cancel -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search/search.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/search/search.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Buscando: <small>{{termino}}</small></h1>\n\n<div *ngIf='termino==\"\"' (keyup)=\"irRutas()\">\n\n</div>\n\n<div class=\"row animated fadeIn fast\" *ngIf=\"rutasSearch.length==0\">\n    <div class=\"col-md-12\">\n        <div class=\"alert alert-info\" role=\"alert\">\n            No existen Rutas asociadas con el termino: {{termino}}\n        </div>\n    </div>\n</div>\n\n<div class=\"card-columns\">\n    <app-tarjeta-bus [termino]=\"ruta.nombre\" [ruta]=\"ruta\" *ngFor=\"let ruta of rutasSearch ;\"></app-tarjeta-bus>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/navbar/navbar.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/navbar/navbar.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-light \">\n\n    <div class=\"col-1\">\n        <a class=\"navbar-brand\" href=\"#\">\n            <img src=\"assets/img/A-64.png\" width=\"130%\" height=\"130%\" alt=\"\">\n        </a>\n    </div>\n\n\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo02\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo02\">\n\n        <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n            <li class=\"nav-item \" routerLinkActive=\"active\" id=\"ocultar6\">\n                <!-- <a class=\"nav-link\">{{UsuarioActivo.tipoUsuario}} : {{ UsuarioActivo.nombre }}   .</a> -->\n                <a *ngIf=\"auth.getUserLogueado().tipoUsuario != '' \" class=\"nav-link\">{{auth.getUserLogueado().tipoUsuario}} : {{ auth.getUserLogueado().nombre }}   </a>\n            </li>\n        </ul>\n\n        <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n            <li class=\"nav-item\" routerLinkActive=\"active\">\n                <a class=\"nav-link \" [routerLink]=\"[ 'inicio'] \" style=\"color: darkgreen;\"><i class=\"material-icons\" style=\"color: seagreen;\">home</i>Inicio </a>\n            </li>\n            <li class=\"nav-item \" routerLinkActive=\"active\">\n                <a class=\"nav-link \" [routerLink]=\"[ 'rutas'] \" style=\"color:darkgreen;\"><i class=\"material-icons\" style=\"color: yellowgreen;\">commute</i>Rutas</a>\n            </li>\n            <li class=\"nav-item \" routerLinkActive=\"active\" id=\"ocultar1\">\n                <a class=\"nav-link \" [routerLink]=\"[ 'administrador'] \" style=\"color: darkgreen;\"><i class=\"material-icons\" style=\"color: gold;\">build</i>Administrador</a>\n            </li>\n            <li class=\"nav-item \" routerLinkActive=\"active\" id=\"ocultar2\">\n                <a class=\"nav-link \" [routerLink]=\"[ 'registrar'] \" style=\"color: darkgreen;\"><i class=\"material-icons\" style=\"color: dodgerblue;\">supervised_user_circle</i>Registrar</a>\n            </li>\n            <li class=\"nav-item \" routerLinkActive=\"active\" id=\"ocultar7\">\n                <a class=\"nav-link \" [routerLink]=\"[ 'paradas'] \" style=\"color: darkgreen;\"><i class=\"material-icons\" style=\"color:crimson ;\">pan_tool</i>Paradas</a>\n            </li>\n            <li class=\"nav-item \" routerLinkActive=\"active\" id=\"ocultar4\">\n                <a class=\"nav-link \" [routerLink]=\"[ 'login'] \" style=\"color:darkgreen;\"><i class=\"material-icons\" style=\"color: darkorange;\">account_box</i>Inicio Sesion</a>\n            </li>\n            <li class=\"nav-item \" routerLinkActive=\"active\" id=\"ocultar5\">\n                <a class=\"nav-link \" [routerLink]=\"[ 'conductor'] \" style=\"color: darkgreen;\"><i class=\"material-icons\" style=\"color: lightskyblue;\">directions_bus</i>Conductor</a>\n            </li>\n\n        </ul>\n\n\n        <form class=\"form-inline my-2 my-lg-0 \">\n            <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Buscar Ruta\" (keyup)=\"buscarBus(buscarTexto.value)\" (keydown.enter)=\"buscarBus(buscarTexto.value)\" #buscarTexto>\n            <button (click)=\"buscarBus(buscarTexto.value)\" class=\"btn btn-outline-success my-2 my-sm-0 \" type=\"button\">Buscar</button>\n        </form>\n        <li>\n            <button id=\"ocultar3\" class=\"btn btn-outline-danger\" (click)=\"salir()\">Salir</button>\n        </li>\n    </div>\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tarjeta-bus/tarjeta-bus.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tarjeta-bus/tarjeta-bus.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card animated fadeIn fast\">\n    <img [src]=\"ruta.imagenBus\" class=\"card-img-top\" [alt]=\"ruta.nombre\">\n    <div class=\"card-body\">\n        <h5 class=\"card-title\">{{ ruta.nombre }}</h5>\n        <p class=\"card-text\">{{ ruta.descripcion }}</p>\n        <p class=\"card-text\"><small class=\"text-muted\">{{ ruta.Fecha }}</small></p>\n    </div>\n\n    <button (click)=\"verRuta()\" type=\"button\" class=\"btn btn-outline-success btn-block\">Ver más...</button>\n\n    <!-- <a [routerLink]=\"['/bus',i]\" class=\"btn btn-outline-success\">Ver mas link..</a> -->\n\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/usuario/login/login.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/usuario/login/login.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\n                <div class=\"card card-signin my-5\">\n\n                    <div class=\"alert-danger\" id=\"errorEmail\" style=\"margin-bottom:5px; display: none;\" role=\"alert\">\n                        <div class=\"container-error-message\">\n                            Email y/o Contrasena <b>Incorrecta</b>!\n                        </div>\n                    </div>\n\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title text-center\">Inicio de Sesion</h5>\n                        <form #frmLogin=\"ngForm\" class=\"form-signin\" (ngSubmit)=\"onLogin(frmLogin)\">\n                            <div class=\"form-label-group\">\n                                <input type=\"email\" name=\"email\" id=\"email\" class=\"form-control\" placeholder=\"Correo Electronico\" ngModel required minlength=5 pattern=\"^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" autofocus>\n                                <label for=\"inputEmail\">Correo Electronico</label>\n                            </div>\n\n                            <div *ngIf=\"!frmLogin.valid\">\n                                <div class=\"alert-danger\" *ngIf=\"this.frmLogin.controls.email.invalid && (this.frmLogin.controls.email.dirty || this.frmLogin.controls.email.touched)\" style=\"margin-bottom:5px\" role=\"alert\">\n                                    <div class=\"container-error-message\">\n                                        Ingrese un email <b>valido</b>!\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"form-label-group\">\n                                <input type=\"password\" name=\"contrasena\" id=\"contrasena\" class=\"form-control\" placeholder=\"Contraseña\" ngModel required>\n                                <label for=\"inputPassword\">Contraseña</label>\n                            </div>\n                            <div *ngIf=\"!frmLogin.valid\">\n                                <div class=\"alert-danger\" *ngIf=\"frmLogin.controls.contrasena.invalid && (frmLogin.controls.contrasena.dirty || frmLogin.controls.contrasena.touched)\" style=\"margin-bottom:5px\" role=\"alert\">\n                                    <div class=\"container-error-message\">\n                                        Ingresar <b>Contraseña</b>!\n                                    </div>\n                                </div>\n                            </div>\n                            <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Ingresar\" type=\"submit\" value=\"Send\">Ingresar</button>\n                            <hr class=\"my-4\">\n\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/usuario/register/register.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/usuario/register/register.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\n                <div class=\"card card-signin my-5\">\n                    <div class=\"alert-success\" id=\"UsuarioAgg\" style=\"margin-bottom:5px; display: none;\" role=\"alert\">\n                        <div class=\"container-error-message\">\n                            Usuario Registrado <b>Correctamente</b>!\n                        </div>\n                    </div>\n                    <div class=\"card-body\">\n\n                        <h5 class=\"card-title text-center\">Crear un Usuario</h5>\n\n                        <form #frmRegister=\"ngForm\" class=\"form-signin\" (ngSubmit)=\"onRegister(frmRegister)\">\n\n                            <div class=\"form-label-group\">\n                                <input type=\"text\" name=\"nombre\" id=\"nombre\" class=\"form-control\" placeholder=\"Nombre\" ngModel required minlength=5 autofocus>\n                                <label for=\"inputEmail\">Nombre</label>\n                            </div>\n\n                            <div *ngIf=\"!frmRegister.valid\">\n                                <div class=\"alert-danger\" *ngIf=\"this.frmRegister.controls.nombre.invalid && (this.frmRegister.controls.nombre.dirty || this.frmRegister.controls.nombre.touched)\" style=\"margin-bottom:5px\" role=\"alert\">\n                                    <div class=\"container-error-message\">\n                                        Ingrese un Nombre <b>valido</b>!\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"form-label-group\">\n                                <input type=\"email\" name=\"email\" id=\"email\" class=\"form-control\" placeholder=\"Correo Electronico\" ngModel minlength=5 pattern=\"^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" required>\n                                <label for=\"inputEmail\">Correo Electronico</label>\n                            </div>\n\n                            <div *ngIf=\"!frmRegister.valid\">\n                                <div class=\"alert-danger\" *ngIf=\"this.frmRegister.controls.email.invalid && (this.frmRegister.controls.email.dirty || this.frmRegister.controls.email.touched)\" style=\"margin-bottom:5px\" role=\"alert\">\n                                    <div class=\"container-error-message\">\n                                        Ingrese un Email <b>valido</b>!\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"form-label-group\">\n                                <input type=\"password\" name=\"contrasena\" id=\"contrasena\" class=\"form-control\" placeholder=\"Contrasena\" ngModel required>\n                                <label for=\"inputPassword\">Contrasena</label>\n                            </div>\n\n                            <div *ngIf=\"!frmRegister.valid\">\n                                <div class=\"alert-danger\" *ngIf=\"this.frmRegister.controls.contrasena.invalid && (this.frmRegister.controls.contrasena.dirty || this.frmRegister.controls.contrasena.touched)\" style=\"margin-bottom:5px\" role=\"alert\">\n                                    <div class=\"container-error-message\">\n                                        Ingrese una Contrasena <b>valida</b>!\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"form-label-group\">\n                                <input type=\"radio\" name=\"tipoUsuario\" id=\"tipoUsuario\" value=\"Conductor\" ngModel required> Conductor\n                                <input type=\"radio\" name=\"tipoUsuario\" id=\"tipoUsuario\" value=\"Administrador\" ngModel required> Administrador\n                            </div>\n                            <label for=\"tipoUsuario\">Tipo de Usuario</label>\n\n                            <div *ngIf=\"!frmRegister.valid\">\n                                <div class=\"alert-danger\" *ngIf=\"this.frmRegister.controls.tipoUsuario.invalid && (this.frmRegister.submitted && this.frmRegister.controls.tipoUsuario.untouched)\" style=\"margin-bottom:5px\" role=\"alert\">\n                                    <div class=\"container-error-message\">\n                                        Seleccione un TipoUsuario!\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"form-label-group\">\n                                <input type=\"hidden\" name=\"estado\" value=\"false\" class=\"form-control\" ngModel>\n                            </div>\n\n                            <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"submit\" value=\"Register\">Registrar</button>\n                            <hr class=\"my-4\">\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</body>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/Class/marcador.class.ts":
/*!*****************************************!*\
  !*** ./src/app/Class/marcador.class.ts ***!
  \*****************************************/
/*! exports provided: Marcador */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Marcador", function() { return Marcador; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Marcador {
    constructor(bus) {
        this.placa = bus.placa;
        this.ruta = bus.RutaAsociada;
        this.latitud = bus.latitud;
        this.longitud = bus.longitud;
        this.sentido = bus.sentido;
    }
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'metrolinea';
        const navEndEvents$ = this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]));
        navEndEvents$.subscribe((event) => {
            gtag('config', 'UA-159952435-1', {
                'page_path': event.urlAfterRedirects
            });
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _services_rutas_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/rutas.service */ "./src/app/services/rutas.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var _components_mapa_mapa_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/mapa/mapa.component */ "./src/app/components/mapa/mapa.component.ts");
/* harmony import */ var _components_mapa_mapa_editar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/mapa/mapa-editar.component */ "./src/app/components/mapa/mapa-editar.component.ts");
/* harmony import */ var agm_direction__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! agm-direction */ "./node_modules/agm-direction/fesm2015/agm-direction.js");
/* harmony import */ var _services_google_analytics_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/google-analytics.service */ "./src/app/services/google-analytics.service.ts");
/* harmony import */ var _components_edit_buses_edit_buses_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/edit-buses/edit-buses.component */ "./src/app/components/edit-buses/edit-buses.component.ts");
/* harmony import */ var _components_bus_bus_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/bus/bus.component */ "./src/app/components/bus/bus.component.ts");
/* harmony import */ var _components_buses_buses_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/buses/buses.component */ "./src/app/components/buses/buses.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_tarjeta_bus_tarjeta_bus_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/tarjeta-bus/tarjeta-bus.component */ "./src/app/components/tarjeta-bus/tarjeta-bus.component.ts");
/* harmony import */ var _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/shared/navbar/navbar.component */ "./src/app/components/shared/navbar/navbar.component.ts");
/* harmony import */ var _components_usuario_register_register_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/usuario/register/register.component */ "./src/app/components/usuario/register/register.component.ts");
/* harmony import */ var _components_conductor_conductor_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/conductor/conductor.component */ "./src/app/components/conductor/conductor.component.ts");
/* harmony import */ var _components_usuario_login_login_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/usuario/login/login.component */ "./src/app/components/usuario/login/login.component.ts");
/* harmony import */ var _components_paradas_paradas_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/paradas/paradas.component */ "./src/app/components/paradas/paradas.component.ts");





// Rutas

// Servicios


// Componentes



// Google maps





// Google Analytics

// Components











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        entryComponents: [
            _components_mapa_mapa_editar_component__WEBPACK_IMPORTED_MODULE_13__["MapaEditarComponent"]
        ],
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _components_mapa_mapa_component__WEBPACK_IMPORTED_MODULE_12__["MapaComponent"],
            _components_mapa_mapa_editar_component__WEBPACK_IMPORTED_MODULE_13__["MapaEditarComponent"],
            _components_edit_buses_edit_buses_component__WEBPACK_IMPORTED_MODULE_16__["EditBusesComponent"],
            _components_bus_bus_component__WEBPACK_IMPORTED_MODULE_17__["BusComponent"],
            _components_buses_buses_component__WEBPACK_IMPORTED_MODULE_18__["BusesComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_19__["HomeComponent"],
            _components_search_search_component__WEBPACK_IMPORTED_MODULE_20__["SearchComponent"],
            _components_tarjeta_bus_tarjeta_bus_component__WEBPACK_IMPORTED_MODULE_21__["TarjetaBusComponent"],
            _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_22__["NavbarComponent"],
            _components_usuario_login_login_component__WEBPACK_IMPORTED_MODULE_25__["LoginComponent"],
            _components_usuario_register_register_component__WEBPACK_IMPORTED_MODULE_23__["RegisterComponent"],
            _components_conductor_conductor_component__WEBPACK_IMPORTED_MODULE_24__["ConductorComponent"],
            _components_usuario_login_login_component__WEBPACK_IMPORTED_MODULE_25__["LoginComponent"],
            _components_paradas_paradas_component__WEBPACK_IMPORTED_MODULE_26__["ParadasComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routes__WEBPACK_IMPORTED_MODULE_5__["APP_ROUTING"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_11__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyDVC3W4TABNrGYhCq8fRR81Et4uFkoTh08'
            }),
            agm_direction__WEBPACK_IMPORTED_MODULE_14__["AgmDirectionModule"],
        ],
        providers: [
            _services_rutas_service__WEBPACK_IMPORTED_MODULE_6__["RutasService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _services_google_analytics_service__WEBPACK_IMPORTED_MODULE_15__["GoogleAnalyticsService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: APP_ROUTING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTING", function() { return APP_ROUTING; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_edit_buses_edit_buses_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/edit-buses/edit-buses.component */ "./src/app/components/edit-buses/edit-buses.component.ts");
/* harmony import */ var _components_buses_buses_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/buses/buses.component */ "./src/app/components/buses/buses.component.ts");
/* harmony import */ var _components_bus_bus_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/bus/bus.component */ "./src/app/components/bus/bus.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_usuario_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/usuario/login/login.component */ "./src/app/components/usuario/login/login.component.ts");
/* harmony import */ var _components_usuario_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/usuario/register/register.component */ "./src/app/components/usuario/register/register.component.ts");
/* harmony import */ var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guards/admin.guard */ "./src/app/guards/admin.guard.ts");
/* harmony import */ var _components_conductor_conductor_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/conductor/conductor.component */ "./src/app/components/conductor/conductor.component.ts");
/* harmony import */ var _guards_conductor_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guards/conductor.guard */ "./src/app/guards/conductor.guard.ts");
/* harmony import */ var _components_paradas_paradas_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/paradas/paradas.component */ "./src/app/components/paradas/paradas.component.ts");













const APP_ROUTES = [
    { path: 'inicio', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'administrador', component: _components_edit_buses_edit_buses_component__WEBPACK_IMPORTED_MODULE_3__["EditBusesComponent"], canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_9__["AdminGuard"]] },
    { path: 'rutas', component: _components_buses_buses_component__WEBPACK_IMPORTED_MODULE_4__["BusesComponent"] },
    { path: 'login', component: _components_usuario_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'conductor', component: _components_conductor_conductor_component__WEBPACK_IMPORTED_MODULE_10__["ConductorComponent"], canActivate: [_guards_conductor_guard__WEBPACK_IMPORTED_MODULE_11__["ConductorGuard"]] },
    { path: 'registrar', component: _components_usuario_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"], canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_9__["AdminGuard"]] },
    { path: 'paradas', component: _components_paradas_paradas_component__WEBPACK_IMPORTED_MODULE_12__["ParadasComponent"], canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_9__["AdminGuard"]] },
    { path: 'bus/:termino', component: _components_bus_bus_component__WEBPACK_IMPORTED_MODULE_5__["BusComponent"] },
    { path: 'search/:termino', component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"] },
    { path: '', pathMatch: 'full', redirectTo: '/inicio' },
    { path: '**', pathMatch: 'full', redirectTo: '/inicio' },
];
const APP_ROUTING = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(APP_ROUTES);


/***/ }),

/***/ "./src/app/components/bus/bus.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/bus/bus.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("agm-map {\n    height: 600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9idXMvYnVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9idXMvYnVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwIHtcbiAgICBoZWlnaHQ6IDYwMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/bus/bus.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/bus/bus.component.ts ***!
  \*************************************************/
/*! exports provided: BusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusComponent", function() { return BusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_rutas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/rutas.service */ "./src/app/services/rutas.service.ts");
/* harmony import */ var _services_bus_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/bus.service */ "./src/app/services/bus.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _Class_marcador_class__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Class/marcador.class */ "./src/app/Class/marcador.class.ts");
/* harmony import */ var _mapa_mapa_editar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../mapa/mapa-editar.component */ "./src/app/components/mapa/mapa-editar.component.ts");
/* harmony import */ var _services_parada_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/parada.service */ "./src/app/services/parada.service.ts");









let BusComponent = class BusComponent {
    constructor(activatedRoute, rutasService, busService, dialog, paradasService) {
        this.activatedRoute = activatedRoute;
        this.rutasService = rutasService;
        this.busService = busService;
        this.dialog = dialog;
        this.paradasService = paradasService;
        this.ruta = {};
        this.paradasRuta = [];
        this.marcadores = [];
        this.latCentroMapa = 7.11392;
        this.lngCentroMapa = -73.1198;
        this.activoDirections = false;
        this.activoParadas = false;
        this.getDirection();
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((datos) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                this.latCentroMapa = datos.coords.latitude;
                this.lngCentroMapa = datos.coords.longitude;
                this.latUsuario = datos.coords.latitude;
                this.lngUsuario = datos.coords.longitude;
            }), () => { console.log('No esta activado el gps'); });
        }
        this.activatedRoute.params.subscribe(params => {
            this.ruta = this.rutasService.getRuta(params.termino);
        });
        this.busService.getBuses();
        // this.paradasService.getParadas();
        this.BusesAsociadosRuta = this.busService.busesPorRuta(this.ruta.nombre);
        this.Watcher();
    }
    ngOnInit() {
        this.paradasService.getParadas();
        this.paradasService.getParada()
            .subscribe(() => {
            this.obtenerParadasdeRuta();
            // this.getDirection();
        });
    }
    ngOnDestroy() {
        if (this.MysetInterval) {
            clearInterval(this.MysetInterval);
        }
    }
    UbicarEnMapa(latitud, longitud, sentido) {
        console.log(latitud, ',', longitud, ',', sentido);
        this.latCentroMapa = latitud;
        this.lngCentroMapa = longitud;
    }
    // Se encarga de actualizar cada 3 segundos la posicion de los buses en todos los usuarios (en base de datos)
    Watcher() {
        this.MysetInterval = setInterval(() => {
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
                const nuevoMarcador = new _Class_marcador_class__WEBPACK_IMPORTED_MODULE_6__["Marcador"](bus);
                this.marcadores.push(nuevoMarcador);
            }
        }
    }
    CuadroDialogo(marcador) {
        const dialogRef = this.dialog.open(_mapa_mapa_editar_component__WEBPACK_IMPORTED_MODULE_7__["MapaEditarComponent"], {
            width: '250px',
            data: { placa: marcador.placa, ruta: marcador.ruta }
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
        this.origin = this.ruta.origen; // A
        this.destination = this.ruta.destino; // D
        this.activoDirections = true;
    }
    setActivoDirections() {
        this.activoDirections = !this.activoDirections;
    }
    setActivoParadas() {
        this.activoParadas = !this.activoParadas;
    }
};
BusComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_rutas_service__WEBPACK_IMPORTED_MODULE_3__["RutasService"] },
    { type: _services_bus_service__WEBPACK_IMPORTED_MODULE_4__["BusService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: _services_parada_service__WEBPACK_IMPORTED_MODULE_8__["ParadasService"] }
];
BusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bus',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bus.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/bus/bus.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bus.component.css */ "./src/app/components/bus/bus.component.css")).default]
    })
], BusComponent);



/***/ }),

/***/ "./src/app/components/buses/buses.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/buses/buses.component.ts ***!
  \*****************************************************/
/*! exports provided: BusesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusesComponent", function() { return BusesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_rutas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/rutas.service */ "./src/app/services/rutas.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_ruta_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/ruta.service */ "./src/app/services/ruta.service.ts");





let BusesComponent = class BusesComponent {
    constructor(rutaService, rutasServices, router) {
        this.rutaService = rutaService;
        this.rutasServices = rutasServices;
        this.router = router;
        this.rutas = [];
    }
    ngOnInit() {
        this.rutas = this.rutasServices.getRutas2();
        this.getRutas();
    }
    // No es lo ideal pero aqui funciona.
    getRutas() {
        this.rutaService.getRuta()
            .subscribe(res => {
            // this.busService.buses = res as Bus[];
            this.rutas = res;
        });
    }
};
BusesComponent.ctorParameters = () => [
    { type: _services_ruta_service__WEBPACK_IMPORTED_MODULE_4__["RutaService"] },
    { type: _services_rutas_service__WEBPACK_IMPORTED_MODULE_2__["RutasService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
BusesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-buses',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./buses.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/buses/buses.component.html")).default
    })
], BusesComponent);



/***/ }),

/***/ "./src/app/components/conductor/conductor.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/conductor/conductor.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29uZHVjdG9yL2NvbmR1Y3Rvci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/conductor/conductor.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/conductor/conductor.component.ts ***!
  \*************************************************************/
/*! exports provided: ConductorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConductorComponent", function() { return ConductorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_bus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/bus.service */ "./src/app/services/bus.service.ts");
/* harmony import */ var src_app_models_bus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/bus */ "./src/app/models/bus.ts");





let ConductorComponent = class ConductorComponent {
    constructor(auth, busService) {
        this.auth = auth;
        this.busService = busService;
        this.busAsociadoConductor = new src_app_models_bus__WEBPACK_IMPORTED_MODULE_4__["Bus"]();
        this.GPSdesactivado = false;
    }
    // hay que hacer que el boton No mostrar posicion se mantenga si se esta mostrando la posicion
    // y que si el conductor no tiene bus asociado estos botones se deshabiliten
    // implementar el NgOnDestroy para que cuando el Conductor salga de la pestana se ejecute el metodo
    // reiniciarPosicion
    // recordar cuando esta funcionando el watchposition
    ngOnInit() {
        document.getElementById('noMostrarPosicion').style.display = 'none';
        document.getElementById('mostrarPosicion').style.display = 'inline';
        this.busService.getBus().
            subscribe(res => {
            this.busService.getBuses();
            this.auth.getUser()
                .subscribe(res1 => {
                this.auth.getUsers();
                this.encontrarBusConductor(res);
            });
        });
    }
    // Busca el bus Asignado al conductor y lo muestra en conductor.html
    encontrarBusConductor(buses) {
        for (const bus of buses) {
            if (this.auth.getUserLogueado().email === bus.ConductorAsociado.email) {
                this.busAsociadoConductor = bus;
            }
        }
        // console.log(this.busAsociadoConductor);
    }
    // Actualiza el id en authService para que pueda ser eliminado el watchPosition al hacer logout
    eliminarPosicion() {
        this.auth.id = this.id;
        this.auth.borrarWatchPosition(this.id);
    }
    // borra el warchPosition mediante un boton y deja de mostrar y actualizar la posicion
    noMostrarPosicion() {
        document.getElementById('noMostrarPosicion').style.display = 'none';
        document.getElementById('mostrarPosicion').style.display = 'inline';
        navigator.geolocation.clearWatch(this.id);
        this.reiniciarPosicion();
    }
    reiniciarPosicion() {
        this.busAsociadoConductor.latitud = 0;
        this.busAsociadoConductor.longitud = 0;
        this.busAsociadoConductor.sentido = 0;
        this.actualizarPosicionEnBaseDeDatos();
    }
    // muestra y actualiza la posicion del Bus asociado al Conductor en base de datos
    mostrarPosicion() {
        document.getElementById('noMostrarPosicion').style.display = 'inline';
        document.getElementById('mostrarPosicion').style.display = 'none';
        if (this.auth.getUserLogueado().tipoUsuario === 'Conductor') {
            if (navigator.geolocation) {
                this.id = navigator.geolocation.watchPosition(datos => {
                    this.eliminarPosicion();
                    console.log('watchPosition');
                    if (this.busAsociadoConductor.latitud !== datos.coords.latitude || this.busAsociadoConductor.longitud !== datos.coords.longitude
                        || this.busAsociadoConductor.sentido !== datos.coords.heading) {
                        this.busAsociadoConductor.latitud = datos.coords.latitude;
                        this.busAsociadoConductor.longitud = datos.coords.longitude;
                        this.busAsociadoConductor.sentido = datos.coords.heading;
                        this.GPSdesactivado = false;
                        this.actualizarPosicionEnBaseDeDatos();
                    }
                }, () => { console.log('No esta activado el gps'); M.toast({ html: 'No esta activado el gps' }); this.GPSdesactivado = true; });
            }
            else {
                this.reiniciarPosicion();
            }
        }
    }
    // muestra y actualiza la posicion del Bus asociado al Conductor en base de datos
    //  mostrarPosicionFalsa() {
    //   document.getElementById('noMostrarPosicion').style.display = 'inline';
    //   document.getElementById('mostrarPosicion').style.display = 'none';
    //   document.getElementById('mostrarPosicion1').style.display = 'none';
    //   if (this.auth.getUserLogueado().tipoUsuario === 'Conductor') {
    //     if (navigator.geolocation) {
    //       this.id = navigator.geolocation.watchPosition(datos => {
    //         this.eliminarPosicionFalsa();
    //         console.log('watchPositionFalso');
    //         this.busAsociadoConductor.latitud =  datos.coords.latitude;
    //         this.busAsociadoConductor.longitud =  datos.coords.longitude;
    //         this.busAsociadoConductor.sentido = datos.coords.heading;
    //         this.GPSdesactivado = false;
    //         this.actualizarPosicionEnBaseDeDatos();
    //     }, () => { console.log('No esta activado el gps'); M.toast({html: 'No esta activado el gps'}); this.GPSdesactivado = true; });
    //     } else {
    //             this.reiniciarPosicion();
    //            }
    //   }
    // }
    // eliminarPosicionFalsa() {
    //   this.auth.id = this.id2;
    //   this.auth.borrarWatchPosition(this.id2);
    // }
    // Actualiza la posicion en base de datos
    actualizarPosicionEnBaseDeDatos() {
        this.busService.putBus(this.busAsociadoConductor).subscribe(res => {
            M.toast({ html: 'Posicion actualizada satisfactoriamente' });
            this.busService.getBuses();
        });
    }
};
ConductorComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: src_app_services_bus_service__WEBPACK_IMPORTED_MODULE_3__["BusService"] }
];
ConductorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-conductor',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./conductor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/conductor/conductor.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./conductor.component.css */ "./src/app/components/conductor/conductor.component.css")).default]
    })
], ConductorComponent);



/***/ }),

/***/ "./src/app/components/edit-buses/edit-buses.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/edit-buses/edit-buses.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("th,\ntd {\n    padding: 10px;\n    text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lZGl0LWJ1c2VzL2VkaXQtYnVzZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lZGl0LWJ1c2VzL2VkaXQtYnVzZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRoLFxudGQge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/edit-buses/edit-buses.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/edit-buses/edit-buses.component.ts ***!
  \***************************************************************/
/*! exports provided: EditBusesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBusesComponent", function() { return EditBusesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_ruta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/ruta */ "./src/app/models/ruta.ts");
/* harmony import */ var _services_ruta_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/ruta.service */ "./src/app/services/ruta.service.ts");
/* harmony import */ var _services_rutas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/rutas.service */ "./src/app/services/rutas.service.ts");
/* harmony import */ var _services_bus_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/bus.service */ "./src/app/services/bus.service.ts");
/* harmony import */ var src_app_models_bus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/bus */ "./src/app/models/bus.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");
/* harmony import */ var _mapa_mapa_editar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../mapa/mapa-editar.component */ "./src/app/components/mapa/mapa-editar.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sweetalert2 */ "../node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_11__);












let EditBusesComponent = class EditBusesComponent {
    constructor(rutaService, rutasService, busesService, authService, dialog) {
        this.rutaService = rutaService;
        this.rutasService = rutasService;
        this.busesService = busesService;
        this.authService = authService;
        this.dialog = dialog;
        this.selectedRuta1 = new src_app_models_ruta__WEBPACK_IMPORTED_MODULE_2__["Ruta"]();
        this.selectedRutas1 = [];
        this.selectedRutas2 = [];
        this.selectedBus1 = new src_app_models_bus__WEBPACK_IMPORTED_MODULE_6__["Bus"]();
        this.selectedBuses1 = [];
        this.selectedConductor1 = new src_app_models_user__WEBPACK_IMPORTED_MODULE_8__["UserI"]();
        this.selectedConductores1 = [];
        this.conductoresSinBus = [];
    }
    // this.snackBar.open(' Marcador actualizado ', 'Cerrar', {duration: 3000}); mirar que hace esto
    ngOnInit() {
        this.getRutas();
        this.rutasService.getRutas();
        this.getBuses();
        this.busesService.getBuses();
        this.getConductores();
        this.authService.getUsers();
    }
    getRutasByTipoBus(tipoBus) {
        this.selectedRutas2 = this.rutasService.getRutasByTipoBus(tipoBus);
    }
    buscarRuta(buscarTexto) {
        this.selectedRutas1 = this.rutasService.buscarRutas(buscarTexto);
    }
    addRuta(form) {
        form.value.imagenBus = `assets/img/${form.value.nombre}.png `;
        // console.log(form.value);
        if (form.value._id) {
            // console.log('Paso 1', form.value);
            this.rutaService.putRuta(form.value)
                .subscribe(res => {
                this.actualizarRutaEnBuses(form.value);
                // this.resetForm(form);
                // M.toast({html: 'Bus actualizado satisfactoriamente'});
                sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
                    icon: 'success',
                    title: 'Ruta Actualizada satisfactoriamente!',
                    showConfirmButton: false,
                    timer: 1500
                });
                this.getRutas();
            });
        }
        else {
            // console.log('Paso 1.1', form.value);
            form.value.NumBusesAsociados = 0;
            this.rutaService.postRuta(form.value)
                .subscribe(res => {
                // console.log(form.value, 'XXXXXX');
                // console.log('Paso 2.1');
                // this.resetForm(form);
                // M.toast({html: 'Guardado satisfactoriamente'});
                sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
                    icon: 'success',
                    title: 'Ruta Registrada Satisfactoriamente!',
                    showConfirmButton: false,
                    timer: 1500
                });
                this.getRutas();
            });
        }
    }
    addRuta2(ruta) {
        if (ruta._id) {
            this.rutaService.putRuta(ruta)
                .subscribe(res => {
                this.actualizarRutaEnBuses(ruta);
                M.toast({ html: 'ruta2 actualizada satisfactoriamente' });
                this.getRutas();
            });
        }
    }
    getRutas() {
        this.rutasService.getRutas();
        this.rutaService.getRuta()
            .subscribe(res => {
            this.rutaService.rutas = res;
            this.selectedRutas1 = res;
        });
    }
    editRuta(bus) {
        this.getRutas();
        this.rutaService.selectedRuta = bus;
        this.selectedRuta1 = bus;
    }
    // tslint:disable-next-line:variable-name
    deleteRuta(_id) {
        // No permitir eliminar un bus si este tiene conductores asociados
        this.selectedRuta1 = this.rutasService.getRutaById(_id);
        if (this.selectedRuta1.NumBusesAsociados === 0 || this.selectedRuta1.NumBusesAsociados === null) {
            this.rutaService.deleteRuta(_id).subscribe(res => {
                this.getRutas();
                // M.toast({html: 'Eliminado satisfactoriamente'});
                sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
                    icon: 'success',
                    title: 'Ruta eliminada satisfactoriamente!',
                    showConfirmButton: false,
                    timer: 1500
                });
            });
            this.selectedRuta1 = new src_app_models_ruta__WEBPACK_IMPORTED_MODULE_2__["Ruta"]();
        }
        else {
            // console.log('El bus tiene conductores asociados');
            sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
                icon: 'warning',
                title: 'No puede ser eliminada!!',
                text: 'Primero debe ser desviculado de sus buses asociados'
            });
        }
    }
    resetForm(form) {
        if (form) {
            form.reset();
            this.rutaService.selectedRuta = new src_app_models_ruta__WEBPACK_IMPORTED_MODULE_2__["Ruta"]();
            // console.log(this.selectedBus1, 'RRRRR');
        }
        this.getRutas();
    }
    resetForm2(form) {
        if (form) {
            form.reset();
            this.selectedRuta1 = new src_app_models_ruta__WEBPACK_IMPORTED_MODULE_2__["Ruta"]();
        }
    }
    asignarOrigenDestinoRuta(form) {
        // esto es un form que se convierte en UserI y es el nuevo Conductor para el bus y selectedBus1.ConductorAsociado es el Conductor actual
        console.log(form);
        this.selectedRuta1.origen = form.value.origen;
        this.selectedRuta1.destino = form.value.destino;
        this.addRuta2(this.selectedRuta1);
        sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
            icon: 'success',
            title: 'Origen y Destino actualizados!',
            showConfirmButton: false,
            timer: 1500
        });
    }
    // ********************************************************************************************************************************
    // ********************************************************************************************************************************
    // ********************************************************************************************************************************
    // ********************************************************************************************************************************
    // Es utilizado en el buscador de buses por nombre
    buscarBus(buscarTexto) {
        this.selectedBuses1 = this.busesService.buscarBuses(buscarTexto);
    }
    // Crea un nuevo bus o edita uno existente en base de datos
    addBus(form) {
        // el formulario siempre envia null a estos parametros, por ende esta es una solucion a ese problema
        form.value.latitud = 0;
        form.value.longitud = 0;
        form.value.sentido = 0;
        if (form.value._id) {
            this.busesService.putBus(form.value)
                .subscribe(res => {
                // this.resetForm1(form);
                // M.toast({html: 'Bus actualizado satisfactoriamente'});
                sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
                    icon: 'success',
                    title: 'Bus actualizado satisfactoriamente!',
                    showConfirmButton: false,
                    timer: 1500
                });
                this.getBuses();
            });
        }
        else {
            this.busesService.postBus(form.value)
                .subscribe(res => {
                // this.resetForm1(form);
                // M.toast({html: 'Guardado satisfactoriamente'});
                sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
                    icon: 'success',
                    title: 'Bus Registrado satisfactoriamente!',
                    showConfirmButton: false,
                    timer: 1500
                });
                this.getBuses();
            });
        }
    }
    // Obtiene los buses de la base de datos y actualiza las variables busesService.bus y selectedBuses1 con estos
    getBuses() {
        this.busesService.getBuses();
        this.busesService.getBus()
            .subscribe(res => {
            this.busesService.bus = res;
            this.selectedBuses1 = res;
            // console.log(this.selectedConductores1, 'yyyyyyyyyyy');
        });
    }
    // no edita buses, recive el bus que va a ser editado o eliminado
    editBus(bus) {
        this.getBuses();
        this.busesService.selectedBus = bus;
        this.selectedBus1 = bus;
        // console.log(conductor, 'XXXXXXXXXXX');
    }
    // tslint:disable-next-line:variable-name
    deleteBus(_id) {
        // Actualiza el numero de conductores asociados a la ruta del conductor a eliminar
        this.selectedBus1 = this.busesService.getBusById(_id);
        this.selectedBus1.RutaAsociada.NumBusesAsociados -= 1;
        this.addRuta2(this.selectedBus1.RutaAsociada);
        // Elimina el conductor
        this.busesService.deleteBus(_id)
            .subscribe(res => {
            this.getBuses();
            // M.toast({html: 'Bus Eliminado satisfactoriamente'});
            sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
                icon: 'success',
                title: 'Bus eliminado satisfactoriamente!',
                showConfirmButton: false,
                timer: 1500
            });
        });
        this.selectedBus1 = new src_app_models_bus__WEBPACK_IMPORTED_MODULE_6__["Bus"]();
    }
    resetForm1(form) {
        if (form) {
            form.reset();
            this.busesService.selectedBus = new src_app_models_bus__WEBPACK_IMPORTED_MODULE_6__["Bus"]();
            this.selectedBus1 = new src_app_models_bus__WEBPACK_IMPORTED_MODULE_6__["Bus"]();
        }
        this.getBuses();
    }
    // Permite asociar una Ruta a un bus, ademas actualiza el numero de buses asociados a una ruta
    asignarRutaBus(form) {
        // esto es un form que se convierte en Ruta y es la nueva ruta para el bus y selectedBus1.rutaAsociada es la ruta actual
        this.selectedRuta1 = form.value.ruta;
        if (form.value.ruta === '' || form.value.ruta === null) {
            this.selectedRuta1 = new src_app_models_ruta__WEBPACK_IMPORTED_MODULE_2__["Ruta"]();
        }
        if (this.selectedBus1.RutaAsociada._id === this.selectedRuta1._id) {
            // console.log('No hacer nada porque no se esta cambiando el bus');
            sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
                icon: 'warning',
                title: 'Se asignó la misma Ruta!!',
                showConfirmButton: false,
                timer: 1500
            });
        }
        else {
            if (form.value.ruta !== '' && form.value.ruta !== null) {
                this.selectedRuta1.NumBusesAsociados += 1;
                this.addRuta2(this.selectedRuta1);
            }
            // this.actualizarBusEnConductores(this.selectedBus1, 'x1');
            this.selectedBus1.RutaAsociada.NumBusesAsociados += -1;
            this.addRuta2(this.selectedBus1.RutaAsociada);
            // this.actualizarBusEnConductores(this.selectedConductor1.RutaAsociada, 'x2');
            // console.log(this.selectedConductor1.RutaAsociada, '11111xxxx');
            // this.getBuses();
            // console.log(this.selectedBus1, '22222xxxxx');
            this.selectedBus1.RutaAsociada = this.selectedRuta1;
            // console.log(this.selectedBus1 );
            this.addBus2(this.selectedBus1);
            sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
                icon: 'success',
                title: 'Bus Actualizado Satisfactoriamente!',
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
    // Permite asociar un Conductor a un bus
    asignarConductorBus(form) {
        // esto es un form que se convierte en UserI y es el nuevo Conductor para el bus y selectedBus1.ConductorAsociado es el Conductor actual
        this.selectedConductor1 = form.value.conductor;
        if (form.value.conductor === '' || form.value.conductor === null) {
            this.selectedConductor1 = new src_app_models_user__WEBPACK_IMPORTED_MODULE_8__["UserI"]();
        }
        if (this.selectedBus1.ConductorAsociado._id === this.selectedConductor1._id) {
            // console.log('No hacer nada porque no se esta cambiando el Conductor');
            sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
                icon: 'warning',
                title: 'Se asignó el mismo Conductor!!',
                showConfirmButton: false,
                timer: 1500
            });
        }
        else {
            this.selectedBus1.ConductorAsociado = this.selectedConductor1;
            this.addBus2(this.selectedBus1);
            sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
                icon: 'success',
                title: 'El Conductor del Bus fue actualizado!',
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
    addBus2(bus) {
        this.getBuses();
        if (bus._id) {
            this.busesService.putBus(bus)
                .subscribe(res => {
                this.getBuses();
            });
        }
    }
    actualizarRutaEnBuses(ruta) {
        this.getBuses();
        // tslint:disable-next-line:prefer-const
        for (let bus1 of this.selectedBuses1) {
            if (bus1.RutaAsociada._id === ruta._id) {
                if (this.selectedBus1._id !== bus1._id) {
                    // console.log(conductor.placa, ' tiene ', conductor.RutaAsociada.nombre);
                    bus1.RutaAsociada = ruta;
                    // console.log(conductor.placa, ' fue actualizado con ', conductor.RutaAsociada.nombre);
                    this.addBus2(bus1);
                }
            }
        }
        // for (let conductor of this.selectedConductores1) {
        //   for (let bus1 of this.selectedBuses1) {
        //       if (conductor.RutaAsociada._id === bus1._id) {
        //         conductor.RutaAsociada = bus1;
        //         this.addConductor2(conductor);
        //       }
        //   }
        // }
    }
    // Al hacer un cambio en un conductor este metodo actualiza esos cambios en el bus asociado al conductor
    actualizarConductorEnBuses(conductor) {
        this.getBuses();
        for (const bus1 of this.selectedBuses1) {
            if (bus1.ConductorAsociado._id === conductor._id) {
                bus1.ConductorAsociado = conductor;
                this.addBus2(bus1);
            }
        }
    }
    // ********************************************************************************************************************************
    // ********************************************************************************************************************************
    // ********************************************************************************************************************************
    // ********************************************************************************************************************************
    // Es utilizado en el buscador de buses por nombre
    buscarConductor(buscarTexto) {
        this.selectedConductores1 = this.authService.buscarConductores(buscarTexto);
    }
    // Edita un Conductor existente en base de datos
    // por precaucion de debe arreglar en el html que solo permita editar un usuario mientras el estado sea false*****
    // (al parecer arreglado .. er unproblema de restForm innecesario)
    addConductor(form) {
        // form.value.estado = false;
        if (form.value._id) {
            this.authService.putUser(form.value)
                .subscribe(res => {
                this.actualizarConductorEnBuses(form.value);
                // this.resetForm3(form);
                // M.toast({html: 'Conductor actualizado satisfactoriamente'});
                sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
                    icon: 'success',
                    title: 'Conductor actualizado satisfactoriamente!',
                    showConfirmButton: false,
                    timer: 1500
                });
                this.getConductores();
            });
        }
    }
    // Obtiene los Conductores de la base de datos y actualiza las variables selectedConductores1 con estos
    getConductores() {
        this.authService.getUsers();
        this.authService.getUser()
            .subscribe(res => {
            this.selectedConductores1 = this.authService.getUsersConductores(res);
            this.authService.userConductores = this.selectedConductores1;
            this.getConductoresSinBus();
        });
    }
    // Obtiene los conductores que aun no han sido asociados a un bus
    getConductoresSinBus() {
        this.conductoresSinBus = [];
        let tieneBus;
        for (const conductor of this.selectedConductores1) {
            tieneBus = false;
            for (const bus of this.selectedBuses1) {
                if (conductor.email === bus.ConductorAsociado.email) {
                    tieneBus = true;
                }
            }
            if (tieneBus === false) {
                this.conductoresSinBus.push(conductor);
            }
        }
    }
    // no edita conductores, recibe el conductor que va a ser editado o eliminado
    editConductor(conductor) {
        this.getConductores();
        // this.authService.selectedUser = conductor;
        this.selectedConductor1 = conductor;
    }
    // tslint:disable-next-line:variable-name
    deleteConductor(_id) {
        // this.selectedConductor1 = this.authService.getUserIConductorById(_id);
        // Elimina un conductor
        let sePuedeEliminar = false;
        for (const conductor of this.conductoresSinBus) {
            if (conductor._id === _id) {
                sePuedeEliminar = true;
            } // verifica si el conductor esta asocidado a un bus
        }
        if (sePuedeEliminar) {
            this.authService.deleteUser(_id)
                .subscribe(res => {
                this.getConductores();
                // M.toast({html: 'Conductor Eliminado satisfactoriamente'});
                sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
                    icon: 'success',
                    title: 'Conductor eliminado satisfactoriamente!',
                    showConfirmButton: false,
                    timer: 1500
                });
            });
            this.selectedConductor1 = new src_app_models_user__WEBPACK_IMPORTED_MODULE_8__["UserI"]();
        }
        else {
            // console.log(', ');
            sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
                icon: 'warning',
                title: 'No puede ser eliminado!!',
                text: 'Primero debe ser desviculado de su bus asociado'
            });
        }
    }
    resetForm3(form) {
        if (form) {
            form.reset();
            this.selectedConductor1 = new src_app_models_user__WEBPACK_IMPORTED_MODULE_8__["UserI"]();
        }
        this.getConductores();
    }
    // edita un conductor pero recibiendo como parametro ese conductor y no un NgForm
    addConductor2(conductor) {
        this.getConductores();
        if (conductor._id) {
            this.authService.putUser(conductor)
                .subscribe(res => {
                this.actualizarConductorEnBuses(conductor);
                this.getConductores();
            });
        }
    }
    CuadroDialogo1() {
        const dialogRef = this.dialog.open(_mapa_mapa_editar_component__WEBPACK_IMPORTED_MODULE_9__["MapaEditarComponent"], {
            width: '650px',
            data: { placa: this.selectedBus1.placa, ruta: this.selectedBus1.RutaAsociada }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            // aqui podemos actuliazar la posicion del bus cada vez que sea cerrado el dialogo
            // this.snackBar.open(' Marcador actualizado ', 'Cerrar', {duration: 3000});
        });
    }
};
EditBusesComponent.ctorParameters = () => [
    { type: _services_ruta_service__WEBPACK_IMPORTED_MODULE_3__["RutaService"] },
    { type: _services_rutas_service__WEBPACK_IMPORTED_MODULE_4__["RutasService"] },
    { type: _services_bus_service__WEBPACK_IMPORTED_MODULE_5__["BusService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] }
];
EditBusesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-buses',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-buses.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/edit-buses/edit-buses.component.html")).default,
        providers: [_services_ruta_service__WEBPACK_IMPORTED_MODULE_3__["RutaService"], _services_bus_service__WEBPACK_IMPORTED_MODULE_5__["BusService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-buses.component.css */ "./src/app/components/edit-buses/edit-buses.component.css")).default]
    })
], EditBusesComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() { }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/mapa/mapa-editar.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/mapa/mapa-editar.component.ts ***!
  \**********************************************************/
/*! exports provided: MapaEditarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaEditarComponent", function() { return MapaEditarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let MapaEditarComponent = class MapaEditarComponent {
    constructor(fb, dialogRef, data) {
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.data = data;
        console.log(data);
        this.forma = fb.group({
            placa: data.placa,
            ruta: data.ruta,
            color: data.color
        });
    }
    ngOnInit() {
    }
    // guardarCambios() {
    //   this.dialogRef.close(this.forma.value);
    // }
    onNoClick() {
        this.dialogRef.close();
    }
};
MapaEditarComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
MapaEditarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mapa-editar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mapa-editar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mapa/mapa-editar.component.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], MapaEditarComponent);



/***/ }),

/***/ "./src/app/components/mapa/mapa.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/mapa/mapa.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("agm-map {\n    height: 600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYXBhL21hcGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21hcGEvbWFwYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XG4gICAgaGVpZ2h0OiA2MDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/mapa/mapa.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/mapa/mapa.component.ts ***!
  \***************************************************/
/*! exports provided: MapaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaComponent", function() { return MapaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_google_analytics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/google-analytics.service */ "./src/app/services/google-analytics.service.ts");



let MapaComponent = class MapaComponent {
    constructor(googleAnalyticsServices) {
        this.googleAnalyticsServices = googleAnalyticsServices;
        this.latUsuario = 7.13707729242462;
        this.lngUsuario = -73.11724761399356;
        this.isDirectionActive = false;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((datos) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                this.latUsuario = datos.coords.latitude;
                this.lngUsuario = datos.coords.longitude;
            }));
        }
    }
    ngOnInit() {
    }
    getDirection(direccion) {
        this.isDirectionActive = true;
        direccion = direccion + ' Bucaramanga Colombia';
        this.origin = { location: { lat: this.latUsuario, lng: this.lngUsuario } };
        this.destination = direccion;
    }
    setIsDirection() {
        this.isDirectionActive = false;
    }
    SendAddToCartEvent1(busqueda) {
        gtag('send', busqueda, 'A donde Van?', 'Busqueda de Rutas');
        console.log('hola');
    }
    SendAddToCartEvent(busqueda) {
        this.googleAnalyticsServices.eventEmitter('add_to_cart', busqueda, 'cart', 'click', 10);
        // history.pushState(null, '', `inicio/busqueda?k=${busqueda}`);
    }
};
MapaComponent.ctorParameters = () => [
    { type: _services_google_analytics_service__WEBPACK_IMPORTED_MODULE_2__["GoogleAnalyticsService"] }
];
MapaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mapa',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mapa.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mapa/mapa.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mapa.component.css */ "./src/app/components/mapa/mapa.component.css")).default]
    })
], MapaComponent);



/***/ }),

/***/ "./src/app/components/paradas/paradas.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/paradas/paradas.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFyYWRhcy9wYXJhZGFzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/paradas/paradas.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/paradas/paradas.component.ts ***!
  \*********************************************************/
/*! exports provided: ParadasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParadasComponent", function() { return ParadasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_parada_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/parada.service */ "./src/app/services/parada.service.ts");
/* harmony import */ var src_app_models_parada__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/parada */ "./src/app/models/parada.ts");
/* harmony import */ var _services_rutas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/rutas.service */ "./src/app/services/rutas.service.ts");





let ParadasComponent = class ParadasComponent {
    constructor(paradaServices, rutasService) {
        this.paradaServices = paradaServices;
        this.rutasService = rutasService;
        this.RutasSinParada = [];
    }
    ngOnInit() {
        this.cargarBaseDatos();
    }
    cargarBaseDatos() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.rutasService.getRutas();
            this.paradaServices.getParadas();
            this.Rutas = this.rutasService.getRutas2();
        });
    }
    obtenerRutasSinParada() {
        this.RutasSinParada = [];
        let agregar;
        const array = this.paradaServices.selectedParada.rutasAsociadas;
        for (const ruta of this.rutasService.getRutas2()) {
            agregar = true;
            for (const nombreRutaParada of array) {
                if (nombreRutaParada === ruta.nombre) {
                    agregar = false;
                    break;
                }
                else {
                    agregar = true;
                }
            }
            if (agregar) {
                this.RutasSinParada.push(ruta.nombre);
            }
        }
    }
    resetForm() {
        this.paradaServices.selectedParada = new src_app_models_parada__WEBPACK_IMPORTED_MODULE_3__["Parada"]();
        this.paradaServices.getParadas();
        // this.cargarBaseDatos();
    }
    asignarRutaParada(form) {
        // console.log(form.value.rutap);
        // console.log(this.paradaServices.selectedParada.rutasAsociadas, '1x');
        this.paradaServices.selectedParada.rutasAsociadas.push(form.value.rutap);
        // console.log(this.paradaServices.selectedParada.rutasAsociadas, '2x');
        this.paradaServices.addParada2(this.paradaServices.selectedParada);
    }
    asignarRutaParada2(rutaNombre) {
        // console.log(rutaNombre);
        // console.log(this.paradaServices.selectedParada.rutasAsociadas, '1x');
        this.paradaServices.selectedParada.rutasAsociadas.push(rutaNombre);
        // console.log(this.paradaServices.selectedParada.rutasAsociadas, '2x');
        this.paradaServices.addParada2(this.paradaServices.selectedParada);
        this.obtenerRutasSinParada();
    }
    removerRutaParada(NombreRuta) {
        const i = this.paradaServices.selectedParada.rutasAsociadas.indexOf(NombreRuta);
        // console.log(this.paradaServices.selectedParada.rutasAsociadas, '11');
        this.paradaServices.selectedParada.rutasAsociadas.splice(i, 1);
        // console.log(this.paradaServices.selectedParada.rutasAsociadas, '22');
        this.paradaServices.addParada2(this.paradaServices.selectedParada);
        this.obtenerRutasSinParada();
    }
};
ParadasComponent.ctorParameters = () => [
    { type: _services_parada_service__WEBPACK_IMPORTED_MODULE_2__["ParadasService"] },
    { type: _services_rutas_service__WEBPACK_IMPORTED_MODULE_4__["RutasService"] }
];
ParadasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-paradas',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./paradas.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/paradas/paradas.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./paradas.component.css */ "./src/app/components/paradas/paradas.component.css")).default]
    })
], ParadasComponent);



/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_rutas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/rutas.service */ "./src/app/services/rutas.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_parada_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/parada.service */ "./src/app/services/parada.service.ts");





let SearchComponent = class SearchComponent {
    constructor(activatedRoute, rutasServices, router, paradasService) {
        this.activatedRoute = activatedRoute;
        this.rutasServices = rutasServices;
        this.router = router;
        this.paradasService = paradasService;
        this.rutasSearch = [];
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.rutasSearch = this.rutasServices.buscarRutas(params.termino); // buscar por nombre bus
            // const arrayConNombreRutas = this.paradasService.buscarRutasPorNombreParada(params.termino);
            // this.rutasSearch = this.rutasServices.buscarRutasPorArraydeTerminos(arrayConNombreRutas);
            this.termino = params.termino;
            // console.log(this.termino, '222', params);
        });
    }
    irRutas() {
        this.router.navigate(['/buses']);
    }
};
SearchComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_rutas_service__WEBPACK_IMPORTED_MODULE_2__["RutasService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_parada_service__WEBPACK_IMPORTED_MODULE_4__["ParadasService"] }
];
SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search/search.component.html")).default
    })
], SearchComponent);



/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");




let NavbarComponent = class NavbarComponent {
    // UsuarioActivo = new UserI();
    constructor(router, auth) {
        this.router = router;
        this.auth = auth;
        this.admin = 'inline';
    }
    ngOnInit() {
        this.auth.getUser()
            .subscribe(res => {
            this.administrador();
            this.auth.getUsers();
            this.cerrarVentana();
            // this.UsuarioActivo = this.auth.getUserLogueado();
        });
    }
    buscarBus(termino) {
        // console.log(termino);
        this.router.navigate(['/search', termino]);
    }
    administrador() {
        this.auth.administrador();
    }
    salir() {
        this.auth.logout();
        this.administrador();
        this.router.navigateByUrl('/login');
    }
    cerrarVentana() {
        window.addEventListener('beforeunload', (e) => {
            const confirmationMessage = '\o/';
            this.auth.logout();
            // (e || window.event).returnValue = confirmationMessage; // Gecko + IE
            return confirmationMessage;
        });
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/navbar/navbar.component.html")).default
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/components/tarjeta-bus/tarjeta-bus.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/tarjeta-bus/tarjeta-bus.component.ts ***!
  \*****************************************************************/
/*! exports provided: TarjetaBusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TarjetaBusComponent", function() { return TarjetaBusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let TarjetaBusComponent = class TarjetaBusComponent {
    constructor(router) {
        this.router = router;
        this.ruta = {};
    }
    ngOnInit() {
    }
    verRuta() {
        this.router.navigate(['/bus', this.termino]);
    }
};
TarjetaBusComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TarjetaBusComponent.prototype, "ruta", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TarjetaBusComponent.prototype, "termino", void 0);
TarjetaBusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tarjeta-bus',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tarjeta-bus.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tarjeta-bus/tarjeta-bus.component.html")).default
    })
], TarjetaBusComponent);



/***/ }),

/***/ "./src/app/components/usuario/login/login.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/usuario/login/login.component.ts ***!
  \*************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "../node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





let LoginComponent = class LoginComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        // tslint:disable-next-line:max-line-length
        this.emailPattern = '/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/';
    }
    ngOnInit() {
    }
    onLogin(form) {
        // console.log(form.valid);
        if (form.valid) {
            // console.log('Valido');
            // console.log('login1', form.value);
            this.authService.login(form.value).subscribe(res => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    icon: 'success',
                    title: 'Sesión iniciada',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.authService.administrador();
                this.router.navigateByUrl('/inicio');
            }, error => {
                // console.log(error, 'Ultimo error');
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Email y/o Contrasena incorrecta!'
                });
                document.getElementById('errorEmail').style.display = 'inline';
                setTimeout(() => {
                    this.errorEmail();
                }, 3000);
            });
        }
        else {
            // console.log('No valido');
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Campo Email y/o Contrasena no valido!'
            });
        }
    }
    // Oculta el mensaje que aparece al escribir una direccion de correo y/o contrasena equivocada
    errorEmail() {
        document.getElementById('errorEmail').style.display = 'none';
        return 's';
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/usuario/login/login.component.html")).default
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/components/usuario/register/register.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/usuario/register/register.component.ts ***!
  \*******************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "../node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





let RegisterComponent = class RegisterComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        // tslint:disable-next-line:max-line-length
        this.emailPattern = '/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/';
    }
    ngOnInit() {
    }
    onRegister(form) {
        if (form.valid) {
            // console.log('Valido');
            form.value.estado = false;
            this.authService.register(form.value).subscribe(res => {
                // this.router.navigateByUrl('/');
                // form.controls.tipoUsuario.untouched = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    icon: 'success',
                    title: 'Usuario registrado exitosamente!',
                    showConfirmButton: false,
                    timer: 1500
                });
                form.reset();
                form.submitted = false;
                document.getElementById('UsuarioAgg').style.display = 'inline';
                setTimeout(() => {
                    this.usuarioAgg();
                }, 3000);
            }, error => {
                // console.log(error, error.error);
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.error
                });
            });
        }
        else {
            // console.log('No valido');
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Campos para el registro no validos!'
            });
        }
    }
    usuarioAgg() {
        document.getElementById('UsuarioAgg').style.display = 'none';
        return 's';
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/usuario/register/register.component.html")).default
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/guards/admin.guard.ts":
/*!***************************************!*\
  !*** ./src/app/guards/admin.guard.ts ***!
  \***************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");



let AdminGuard = class AdminGuard {
    constructor(auth) {
        this.auth = auth;
    }
    canActivate() {
        // console.log('guard');
        // return true;
        return this.auth.estaAutenticadoUnAdministrador();
    }
};
AdminGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
AdminGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AdminGuard);



/***/ }),

/***/ "./src/app/guards/conductor.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/guards/conductor.guard.ts ***!
  \*******************************************/
/*! exports provided: ConductorGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConductorGuard", function() { return ConductorGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");



let ConductorGuard = class ConductorGuard {
    constructor(auth) {
        this.auth = auth;
    }
    canActivate() {
        // console.log('guard');
        // return true;
        return this.auth.estaAutenticadoUnConductor();
    }
};
ConductorGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
ConductorGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ConductorGuard);



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");



// angular material







let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"]
        ],
        exports: [
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"]
        ]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/models/bus.ts":
/*!*******************************!*\
  !*** ./src/app/models/bus.ts ***!
  \*******************************/
/*! exports provided: Bus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bus", function() { return Bus; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_models_ruta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/ruta */ "./src/app/models/ruta.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./src/app/models/user.ts");



// esta clase es llamada conductor pero hace referencia a Bus.. que por errores a la hora del diseno se
// nombr[o conductor.. se debe cambiar a bus al final.
class Bus {
    // tslint:disable-next-line:variable-name
    constructor(_id = '', placa = '', tipoBus = '', ConductorAsociado = new _user__WEBPACK_IMPORTED_MODULE_2__["UserI"](), RutaAsociada = new src_app_models_ruta__WEBPACK_IMPORTED_MODULE_1__["Ruta"](), longitud = 0, latitud = 0, sentido = 0) {
        this._id = _id;
        // this.nombre = nombre;
        // this.email = email;
        // this.contrasena = contrasena;
        this.placa = placa;
        this.tipoBus = tipoBus;
        this.RutaAsociada = RutaAsociada;
        this.ConductorAsociado = ConductorAsociado;
        this.longitud = longitud;
        this.latitud = latitud;
        this.sentido = sentido;
    }
}


/***/ }),

/***/ "./src/app/models/parada.ts":
/*!**********************************!*\
  !*** ./src/app/models/parada.ts ***!
  \**********************************/
/*! exports provided: Parada */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Parada", function() { return Parada; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

// esta clase es llamada conductor pero hace referencia a Bus.. que por errores a la hora del diseno se
// nombr[o conductor.. se debe cambiar a bus al final.
class Parada {
    // tslint:disable-next-line:variable-name
    constructor(_id = '', nombre = '', rutasAsociadas = [], direccion = '', latitud = 0, longitud = 0, tipoParada = '') {
        this._id = _id;
        this.nombre = nombre;
        this.rutasAsociadas = rutasAsociadas;
        this.tipoParada = tipoParada;
        this.direccion = direccion;
        this.latitud = latitud;
        this.longitud = longitud;
    }
}


/***/ }),

/***/ "./src/app/models/ruta.ts":
/*!********************************!*\
  !*** ./src/app/models/ruta.ts ***!
  \********************************/
/*! exports provided: Ruta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ruta", function() { return Ruta; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

// import { Marcador } from '../Class/marcador.class';
class Ruta {
    // tslint:disable-next-line:variable-name
    constructor(_id = '', nombre = '', descripcion = '', imagenBus = '', Fecha = '', imagenTipoBus = '', NumBusesAsociados = 0, origen = '', destino = '') {
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
}


/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: UserI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserI", function() { return UserI; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class UserI {
    // tslint:disable-next-line:variable-name
    constructor(_id = '', nombre = '', email = '', contrasena = '', tipoUsuario = '', estado = false) {
        this._id = _id;
        this.nombre = nombre;
        this.email = email;
        this.contrasena = contrasena;
        this.tipoUsuario = tipoUsuario;
        this.estado = estado;
    }
}


/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _bus_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bus.service */ "./src/app/services/bus.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "../node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);








let AuthService = class AuthService {
    constructor(httpClient, busService) {
        this.httpClient = httpClient;
        this.busService = busService;
        // AUTH_SERVER = 'http://localhost:3000/user';
        // AUTH_SERVER2 = 'http://localhost:3000';
        this.AUTH_SERVER = '/user';
        this.AUTH_SERVER2 = '';
        this.authSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        this.token = '';
        this.getUsers();
        this.busService.getBuses();
        this.selectedUser = new _models_user__WEBPACK_IMPORTED_MODULE_3__["UserI"]();
    }
    // Obtiene todos los usuarios
    getUser() {
        return this.httpClient.get(this.AUTH_SERVER);
    }
    putUser(user) {
        return this.httpClient.put(this.AUTH_SERVER + `/${user._id}`, user);
    }
    putEstadoUser(user) {
        return this.httpClient.put(this.AUTH_SERVER + `/estado/${user._id}`, { estado: user.estado });
    }
    // tslint:disable-next-line:variable-name
    deleteUser(_id) {
        return this.httpClient.delete(this.AUTH_SERVER + `/${_id}`);
    }
    // Crea usuarios
    register(user) {
        return this.httpClient.post(`${this.AUTH_SERVER2}/register`, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            if (res) {
                // Nada
            }
        }));
    }
    // ********************************************************************************************
    // ********************************************************************************************
    // ********************************************************************************************
    // ********************************************************************************************
    // Obtener Users de la base de datos y guardarlos en la variable 'userConductores'
    // tambien podria decirse que este metodo actualiza la variable 'userConductores'
    getUsers() {
        this.getUser()
            .subscribe(res => {
            this.Users = res;
            this.userConductores = this.getUsersConductores(res);
            // console.log(this.userConductores, 'getUsers');
            this.getSelectedUserByEmail();
        });
    }
    // devuelve un array de UserI de tipo Conductor
    getUsersConductores(users) {
        const conductores = [];
        // console.log(users, 'XXX');
        for (let user of users) {
            user = user;
            if (user.tipoUsuario === 'Conductor') {
                conductores.push(user);
            }
        }
        // console.log(conductores, 'SSSS');
        this.userConductores = conductores;
        return this.userConductores;
    }
    // Obtener un UserI de tipo Conductor por el ID
    // tslint:disable-next-line:variable-name
    getUserIConductorById(_id) {
        for (let userConductor of this.userConductores) {
            userConductor = userConductor;
            if (userConductor._id === _id) {
                return userConductor;
            }
        }
    }
    // Se utiliza en el buscador, obtiene un array con los Conductores que tengan el termino en su nombre
    buscarConductores(termino) {
        let ConductorArr = [];
        ConductorArr = ConductorArr;
        termino = termino.toLowerCase();
        for (let userConductor of this.userConductores) {
            userConductor = userConductor;
            let nombre = userConductor.nombre.toLowerCase();
            nombre = nombre;
            if (nombre.indexOf(termino) >= 0) {
                ConductorArr.push(userConductor);
            }
        }
        return ConductorArr;
    }
    // ********************************************************************************************
    // ********************************************************************************************
    // ********************************************************************************************
    // ********************************************************************************************
    login(user) {
        return this.httpClient.post(`${this.AUTH_SERVER2}/login`, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            if (res) {
                user = this.getUserConductorbyEmail(user.email);
                user.estado = true; // Conectado
                // console.log(user, 'Auth User login');
                this.selectedUser = user;
                this.actualizarConductorEnBuses(this.selectedUser);
                this.putEstadoUser(this.selectedUser).subscribe(res2 => {
                    // console.log(res2, 'Usuario Activo');
                });
                this.administrador();
                // Guardar Token
                this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn, this.selectedUser.email);
            }
        }, error => { console.log(error, 'Email o Contrasena incorrecta'); }));
    }
    // asigna el id para luego ser borrado en logout, es usado en conductorComponent.ts
    borrarWatchPosition(id) {
        this.id = id;
    }
    // Cierra la sesion de un usuario anteriormente logueado y cambia su estado a false
    logout() {
        this.getSelectedUserByEmail();
        this.selectedUser.estado = false; // Desconectado
        this.putEstadoUser(this.selectedUser).subscribe(res => {
            // console.log(res, 'Usuario Desconectado');
        });
        navigator.geolocation.clearWatch(this.id);
        this.actualizarConductorEnBuses(this.selectedUser, 0);
        this.selectedUser = new _models_user__WEBPACK_IMPORTED_MODULE_3__["UserI"]();
        this.token = '';
        localStorage.removeItem('EMAIL');
        localStorage.removeItem('ACCESS_TOKEN');
        localStorage.removeItem('EXPIRES_IN');
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
            icon: 'success',
            title: 'Sesión finalizada',
            showConfirmButton: false,
            timer: 1000
        });
    }
    // Actualiza el estado del conductorAsociado a un bus a la hora de hacer login y logout
    actualizarConductorEnBuses(conductor, logout) {
        // this.busService.getBuses();
        for (const bus1 of this.busService.getBuses2()) {
            if (bus1.ConductorAsociado._id === conductor._id) {
                bus1.ConductorAsociado = conductor;
                if (logout === 0) {
                    bus1.latitud = 0;
                    bus1.longitud = 0;
                    bus1.sentido = 0;
                }
                this.busService.putBus(bus1)
                    .subscribe(res => {
                    this.busService.getBuses();
                });
            }
        }
    }
    // Al loguearse un usuario se crean diferentes datos en el localStorage para controlar el cierre de sesion automatico (aun no funciona)
    saveToken(token, expiresIn, email) {
        localStorage.setItem('EMAIL', email);
        localStorage.setItem('ACCESS_TOKEN', token);
        localStorage.setItem('EXPIRES_IN', expiresIn);
        this.token = token;
    }
    getToken() {
        if (!this.token) {
            this.token = localStorage.getItem('ACCESS_TOKEN');
        }
        return this.token;
    }
    // Se utiliza para saber que usuario es el que esta logueado, se utiliza porque al refrescar la pagina se pierde este usuario
    getSelectedUserByEmail() {
        if (localStorage.getItem('EMAIL')) {
            this.selectedUser = this.getUserConductorbyEmail(localStorage.getItem('EMAIL'));
        }
    }
    // Devuelve el usuario logueado
    getUserLogueado() {
        // this.getSelectedUserByEmail();
        return this.selectedUser;
    }
    // Obterner un usuario por el email (Tambien es usado para administradores)
    getUserConductorbyEmail(termino) {
        // console.log(this.Users, 'users getUserConductorbyEmail');
        for (let userConductor of this.Users) {
            userConductor = userConductor;
            if (userConductor.email === termino) {
                // console.log(userConductor, 'userConductor a devolver en getUserConductorbyEmail');
                return userConductor;
            }
        }
    }
    // Con este metodo sabemos si el usuario logueado se encuentra activo
    estaAutenticadoUnAdministrador() {
        // this.getToken();
        // if (localStorage.getItem('ACCESS_TOKEN')) {
        //   return this.token.length > 2;
        // } else { return false; }
        let esAdmin = false;
        // console.log(localStorage.getItem('EMAIL') , 'email localstoracge');
        if (localStorage.getItem('EMAIL')) {
            // this.getSelectedUserByEmail();
            // console.log(this.selectedUser, 'selectedUser');
            if (this.getUserConductorbyEmail(this.selectedUser.email)) {
                for (const conductor of this.userConductores) {
                    if (conductor.email === this.selectedUser.email) {
                        return false; // Es Conductor
                    }
                    else {
                        esAdmin = true;
                    } // Es Administrador
                }
            }
        }
        // console.log(esAdmin, 'es administrador?');
        return esAdmin;
    }
    estaAutenticadoUnConductor() {
        let esCondu = false;
        if (localStorage.getItem('EMAIL')) {
            // this.getSelectedUserByEmail();
            for (const conductor of this.userConductores) {
                if (conductor.email === this.selectedUser.email) {
                    return true; // Es Conductor
                }
                else {
                    esCondu = false;
                } // Es Administrador o no existe
            }
        }
        return esCondu;
    }
    // Oculta las diferentes funciones dependiendo del tipo de usuario logueado o invitado
    administrador() {
        if (this.estaAutenticadoUnAdministrador()) {
            // console.log(document.getElementById('ocultar1').style.display, 'hola');
            document.getElementById('ocultar1').style.display = 'inline';
            document.getElementById('ocultar2').style.display = 'inline';
            document.getElementById('ocultar3').style.display = 'inline';
            document.getElementById('ocultar4').style.display = 'none';
            document.getElementById('ocultar5').style.display = 'none';
            document.getElementById('ocultar6').style.display = 'inline';
            document.getElementById('ocultar7').style.display = 'inline';
        }
        else {
            document.getElementById('ocultar1').style.display = 'none';
            document.getElementById('ocultar2').style.display = 'none';
            document.getElementById('ocultar3').style.display = 'none';
            document.getElementById('ocultar5').style.display = 'none';
            document.getElementById('ocultar6').style.display = 'none';
            document.getElementById('ocultar7').style.display = 'none';
            document.getElementById('ocultar4').style.display = 'inline';
        }
        this.conductor();
    }
    conductor() {
        if (this.estaAutenticadoUnConductor()) {
            document.getElementById('ocultar3').style.display = 'inline';
            document.getElementById('ocultar4').style.display = 'none';
            document.getElementById('ocultar5').style.display = 'inline';
            document.getElementById('ocultar6').style.display = 'inline';
        }
        else {
            document.getElementById('ocultar5').style.display = 'none';
        }
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _bus_service__WEBPACK_IMPORTED_MODULE_6__["BusService"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthService);



/***/ }),

/***/ "./src/app/services/bus.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/bus.service.ts ***!
  \*****************************************/
/*! exports provided: BusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusService", function() { return BusService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _models_bus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/bus */ "./src/app/models/bus.ts");




let BusService = class BusService {
    constructor(http) {
        this.http = http;
        this.URL_API = '/api/conductores';
        this.selectedBus = new _models_bus__WEBPACK_IMPORTED_MODULE_3__["Bus"]();
        console.log('Servicio conductor listo para usarse');
    }
    getBus() {
        return this.http.get(this.URL_API);
    }
    // tslint:disable-next-line:no-shadowed-variable
    postBus(bus) {
        return this.http.post(this.URL_API, bus);
    }
    putBus(bus) {
        return this.http.put(this.URL_API + `/${bus._id}`, bus);
    }
    // tslint:disable-next-line:variable-name
    deleteBus(_id) {
        return this.http.delete(this.URL_API + `/${_id}`);
    }
    // ************************************************************
    // devuelve un array de buses
    getBuses2() {
        this.getBuses();
        return this.buses;
    }
    // Actualiza la variable local buses con los buses de la base de datos
    getBuses() {
        this.getBus()
            .subscribe(res => {
            this.buses = res;
        });
    }
    // Obtener un Bus por la placa
    getBusByPlaca(termino) {
        for (let bus of this.buses) {
            bus = bus;
            if (bus.placa === termino) {
                return bus;
            }
        }
    }
    // Obtener un Bus por el ID
    // tslint:disable-next-line:variable-name
    getBusById(_id) {
        for (let bus of this.buses) {
            bus = bus;
            if (bus._id === _id) {
                return bus;
            }
        }
    }
    // Se utiliza en el buscador, obtiene un array con los buses que tengan el termino en su placa
    buscarBuses(termino) {
        let busesArr = [];
        busesArr = busesArr;
        termino = termino.toLowerCase();
        for (let bus of this.buses) {
            bus = bus;
            let placa = bus.placa.toLowerCase();
            placa = placa;
            if (placa.indexOf(termino) >= 0) {
                busesArr.push(bus);
            }
        }
        return busesArr;
    }
    // devuelve un array con los buses asociados a un nombre de ruta
    busesPorRuta(nombreRuta) {
        this.getBuses();
        const busesAsociadosRuta = [];
        for (const bus of this.buses) {
            if (bus.RutaAsociada.nombre === nombreRuta) {
                busesAsociadosRuta.push(bus);
            }
        }
        return busesAsociadosRuta;
    }
};
BusService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
BusService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BusService);



/***/ }),

/***/ "./src/app/services/google-analytics.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/google-analytics.service.ts ***!
  \******************************************************/
/*! exports provided: GoogleAnalyticsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleAnalyticsService", function() { return GoogleAnalyticsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class GoogleAnalyticsService {
    constructor() { }
    eventEmitter(eventName, eventCategory, eventAction, eventLabel = 'rutas', eventValue = 1) {
        gtag('event', eventName, {
            eventCategory,
            eventLabel,
            eventAction,
            eventValue
        });
    }
}


/***/ }),

/***/ "./src/app/services/parada.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/parada.service.ts ***!
  \********************************************/
/*! exports provided: ParadasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParadasService", function() { return ParadasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _models_parada__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/parada */ "./src/app/models/parada.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "../node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





let ParadasService = class ParadasService {
    constructor(http) {
        this.http = http;
        this.busquedaParadas = [];
        this.URL_API = '/api/paradas';
        this.selectedParada = new _models_parada__WEBPACK_IMPORTED_MODULE_3__["Parada"]();
        console.log('Servicio parada listo para usarse');
    }
    getParada() {
        return this.http.get(this.URL_API);
    }
    // tslint:disable-next-line:no-shadowed-variable
    postParada(parada) {
        return this.http.post(this.URL_API, parada);
    }
    putParada(parada) {
        return this.http.put(this.URL_API + `/${parada._id}`, parada);
    }
    // tslint:disable-next-line:variable-name
    deleteParada(_id) {
        return this.http.delete(this.URL_API + `/${_id}`);
    }
    // ************************************************************
    // devuelve un array de paradas
    getParadas2() {
        this.getParadas();
        return this.paradas;
    }
    // Actualiza la variable local paradas con las paradas de la base de datos
    getParadas() {
        this.getParada()
            .subscribe(res => {
            this.paradas = res;
            this.busquedaParadas = res;
        });
    }
    // Obtener una parada por el nombre
    getParadaByPlaca(termino) {
        for (const parada of this.paradas) {
            if (parada.nombre === termino) {
                return parada;
            }
        }
    }
    // Obtener una parada por el ID
    // tslint:disable-next-line:variable-name
    getParadaById(_id) {
        for (const parada of this.paradas) {
            if (parada._id === _id) {
                return parada;
            }
        }
    }
    // Obtiene todas las paradas que tengan a 'nombreRuta' como una de sus Rutas
    getParadaByRuta(nombreRuta) {
        const array = [];
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
    buscarRutasPorNombreParada(nombreParada) {
        const rutas = [];
        this.getParada()
            .subscribe(res => {
            this.paradas = res;
            const paradasArr = this.buscarParadas(nombreParada);
            for (const parada of paradasArr) {
                for (const nombreRutadeParada of parada.rutasAsociadas) {
                    let agregar = true;
                    for (const nombreRutasExistentes of rutas) {
                        if (nombreRutasExistentes === nombreRutadeParada) {
                            agregar = false;
                            break;
                        }
                    }
                    if (agregar) {
                        rutas.push(nombreRutadeParada);
                    }
                }
            }
        });
        return rutas;
    }
    // obtiene un array con las paradas que tengan el termino en su nombre
    buscarParadas(termino) {
        const paradasArr = [];
        termino = termino.toLowerCase();
        for (const parada of this.paradas) {
            const placa = parada.nombre.toLowerCase();
            if (placa.indexOf(termino) >= 0) {
                paradasArr.push(parada);
            }
        }
        this.busquedaParadas = paradasArr;
        return paradasArr;
    }
    // devuelve un array con las paradas asociadas a un nombre de ruta
    paradasPorRuta(nombreRuta) {
        this.getParadas();
        const paradasAsociadasRuta = [];
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
    editParada(parada) {
        this.getParadas();
        this.selectedParada = parada;
    }
    addParada(form) {
        if (form.value._id) {
            this.putParada(form.value)
                .subscribe(res => {
                // console.log('Parada actualizada satisfactoriamente');
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    icon: 'success',
                    title: 'Parada actualizada exitosamente!',
                    showConfirmButton: false,
                    timer: 1500
                });
                this.getParadas();
            });
        }
        else {
            this.postParada(form.value)
                .subscribe(res => {
                // console.log('Parada Guardada satisfactoriamente');
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    icon: 'success',
                    title: 'Parada Registrada exitosamente!',
                    showConfirmButton: false,
                    timer: 1500
                });
                this.getParadas();
            });
        }
    }
    addParada2(parada) {
        if (parada._id) {
            this.putParada(parada)
                .subscribe(res => {
                console.log('parada2 actualizado satisfactoriamente');
                this.getParadas();
            });
        }
    }
    // tslint:disable-next-line:variable-name
    borrarParada(_id) {
        this.selectedParada = this.getParadaById(_id);
        this.deleteParada(_id).subscribe(res => {
            this.getParadas();
            // console.log('Eliminado satisfactoriamente');
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                icon: 'success',
                title: 'Parada eliminada exitosamente!',
                showConfirmButton: false,
                timer: 1500
            });
        });
        this.selectedParada = new _models_parada__WEBPACK_IMPORTED_MODULE_3__["Parada"]();
    }
};
ParadasService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ParadasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ParadasService);



/***/ }),

/***/ "./src/app/services/ruta.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/ruta.service.ts ***!
  \******************************************/
/*! exports provided: RutaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RutaService", function() { return RutaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _models_ruta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/ruta */ "./src/app/models/ruta.ts");




let RutaService = class RutaService {
    constructor(http) {
        this.http = http;
        this.URL_API = '/api/buses';
        this.selectedRuta = new _models_ruta__WEBPACK_IMPORTED_MODULE_3__["Ruta"]();
    }
    getRuta() {
        return this.http.get(this.URL_API);
    }
    // tslint:disable-next-line:no-shadowed-variable
    postRuta(Ruta) {
        return this.http.post(this.URL_API, Ruta);
    }
    putRuta(Ruta1) {
        return this.http.put(this.URL_API + `/${Ruta1._id}`, Ruta1);
    }
    // tslint:disable-next-line:variable-name
    deleteRuta(_id) {
        return this.http.delete(this.URL_API + `/${_id}`);
    }
};
RutaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
RutaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RutaService);



/***/ }),

/***/ "./src/app/services/rutas.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/rutas.service.ts ***!
  \*******************************************/
/*! exports provided: RutasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RutasService", function() { return RutasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ruta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ruta.service */ "./src/app/services/ruta.service.ts");



let RutasService = class RutasService {
    constructor(rutaService) {
        this.rutaService = rutaService;
        console.log('Servicio listo para usarse');
    }
    // Actualiza la variable 'rutas' y retorna este array
    getRutas2() {
        this.getRutas();
        return this.rutas;
    }
    // Obtener rutas de la base de datos y guardarlos en la variable 'rutas'
    // tambien podria decirse que este metodo actualiza la variable 'rutas'
    getRutas() {
        this.rutaService.getRuta()
            .subscribe(res => {
            this.rutas = res;
        });
    }
    // Obtiene las rutas dependiendo del tipo de bus que tengan (padron, articulado o alimentador)
    getRutasByTipoBus(tipoRuta) {
        const rutasPorTipo = [];
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
    getRuta(termino) {
        for (const ruta of this.rutas) {
            // console.log(ruta.nombre , '===', termino);
            if (ruta.nombre.toLowerCase() === termino.toLowerCase()) {
                return ruta;
            }
        }
    }
    // tslint:disable-next-line:variable-name
    getRutaById(_id) {
        for (const ruta of this.rutas) {
            if (ruta._id === _id) {
                return ruta;
            }
        }
    }
    // Obtener lista de rutas por nombre.. se usa en filtrar
    buscarRutas(termino) {
        const RutasArr = [];
        this.rutaService.getRuta()
            .subscribe(res => {
            this.rutas = res;
            termino = termino.toLowerCase();
            for (const ruta of this.rutas) {
                const nombre = ruta.nombre.toLowerCase();
                if (nombre.indexOf(termino) >= 0) {
                    RutasArr.push(ruta);
                }
            }
        });
        return RutasArr;
    }
    buscarRutasPorArraydeTerminos(terminos) {
        const RutasArr = [];
        this.rutaService.getRuta()
            .subscribe(res => {
            this.rutas = res;
            for (let termino of terminos) {
                termino = termino.toLowerCase();
                RutasArr.push(this.getRuta(termino));
            }
        });
        return RutasArr;
    }
};
RutasService.ctorParameters = () => [
    { type: _ruta_service__WEBPACK_IMPORTED_MODULE_2__["RutaService"] }
];
RutasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], RutasService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));
// const socket = io.connect('http://localhost:3001', {forceNew: true});
// socket.on('mensaaje', (data) => {
//   console.log(data);
// });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\crist\Desktop\inmetro\metrolinea\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map