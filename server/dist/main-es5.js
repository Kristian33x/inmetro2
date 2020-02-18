var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-navbar>\n</app-navbar>\n\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>\n\n<!-- //anterior de solo mapa\n\n<mat-toolbar color=\"primary\">\n    <span>Mapa</span>\n</mat-toolbar>\n\n<div class=\"main-container\"> -->\n<!-- <h3>Raised Buttons</h3>\n    <div class=\"example-button-row\">\n        <button mat-raised-button>Basic</button>\n        <button mat-raised-button color=\"primary\">Primary</button>\n        <button mat-raised-button color=\"accent\">Accent</button>\n        <button mat-raised-button color=\"warn\">Warn</button>\n        <button mat-raised-button disabled>Disabled</button>\n        <a mat-raised-button routerLink=\".\">Link</a>\n    </div>\n\n    <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar> -->\n<!-- <app-mapa></app-mapa>\n</div> -->");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/bus/bus.component.html": 
        /*!*****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/bus/bus.component.html ***!
          \*****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"animated fadeIn\">{{ruta.nombre | uppercase}} <small>({{ ruta.Fecha | date:'y' }})</small></h1>\n<hr>\n\n<div class=\"row animated fadeIn fast\">\n\n    <div class=\"col-md-4\">\n\n        <img [src]=\"ruta.imagenBus\" [alt]=\"ruta.nombre\" class=\"img-fluid\">\n        <br><br>\n        <a [routerLink]=\"['/buses']\" class=\" btn btn-outline-danger btn-block \"> Regresar..</a>\n    </div>\n\n    <div class=\"col-md-8 \">\n        <h3>{{ruta.nombre}}</h3>\n        <hr>\n        <p>\n            {{ruta.descripcion}}\n        </p>\n        <img [src]=\"ruta.imagenTipoBus \" [alt]=\"ruta.imagenTipoBus\" class=\"img-fluid\">\n    </div>\n\n</div>\n\n<div class=\"row animated fadeIn fast\">\n\n    <div class=\"col-md-4\">\n\n    </div>\n\n    <div class=\"col-md-8 \">\n        <h3>Numero de buses asociados a la ruta: {{ruta.NumBusesAsociados}}</h3>\n        <h3>Buses asociados a la ruta:</h3>\n\n        <table class=\"table table-bordered table-striped table-sm\">\n            <thead>\n                <tr>\n                    <th>Placa</th>\n                    <th>coordenadas</th>\n                    <th>Operaciones</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let bus of BusesAsociadosRuta\">\n                    <td>{{bus.placa}}</td>\n                    <td> {{bus.latitud}}, {{bus.longitud}}, {{bus.sentido}}</td>\n\n                    <td>\n                        <button (click)=\"UbicarEnMapa(bus.latitud,bus.longitud,bus.sentido);\" type=\"button\" class=\"btn btn-success btn-sm\" data-toggle=\"modal\" data-target=\"#modalAsignarRutaBus\">\n                        <i class=\"material-icons\">directions_bus</i>\n                    </button>&nbsp;\n                    </td>\n\n                </tr>\n            </tbody>\n        </table>\n    </div>\n\n</div>\n\n<mat-card>\n\n    <mat-card-title>\n        Mapa\n    </mat-card-title>\n\n    <!-- (centerChange)= (zoomChange) -->\n\n    <mat-card-content>\n        <agm-map [latitude]=\"latCentroMapa\" [longitude]=\"lngCentroMapa\" [zoom]=\"16\">\n            <!-- <agm-circle [latitude]=\"lat\" [longitude]=\"lng\" [radius]=\"30\" [fillColor]=\"'red'\" [circleDraggable]=\"true\" [editable]=\"true\">></agm-circle> -->\n            <agm-marker *ngFor=\"let marcador of marcadores; let i = index\" [iconUrl]=\"'assets/carro.bmp'\" [label]=\"marcador.placa\" [latitude]=\"marcador.latitud\" [longitude]=\"marcador.longitud\">\n\n                <agm-info-window>\n                    <strong>{{marcador.placa}}</strong>\n                    <p>\n                        {{marcador.ruta.nombre}} , {{marcador.ruta.descripcion}}\n                    </p>\n                    <div>\n                        <button (click)=\"CuadroDialogo(marcador)\" mat-raised-button color=\"primary\">Ver mas...</button>\n                    </div>\n                </agm-info-window>\n\n            </agm-marker>\n        </agm-map>\n    </mat-card-content>\n\n</mat-card>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/buses/buses.component.html": 
        /*!*********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/buses/buses.component.html ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h1>RUTAS DE LOS DIFERENTES BUSES DE METROLINEA</h1>\n<hr>\n<div class=\"card-columns\">\n\n    <!-- *ngFor=\"let bus of buses ; let i=index\" -->\n\n    <app-tarjeta-bus [termino]=\"ruta.nombre\" [ruta]=\"ruta\" *ngFor=\"let ruta of rutas ;\"></app-tarjeta-bus>\n    <!-- <app-tarjeta-bus [termino]=\"bus.nombre\" [bus]=\"bus\" *ngFor=\"let bus of busService.buses\"></app-tarjeta-bus> -->\n\n\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/conductor/conductor.component.html": 
        /*!*****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/conductor/conductor.component.html ***!
          \*****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid animated fadeIn \">\n    <div class=\"container\">\n        <h1 class=\"display-4\">Compartir Ubicacion GPS Para Conductores</h1>\n\n        <h2>La ruta Asignado es: {{busAsociadoConductor.RutaAsociada.nombre}} </h2>\n        <h2>La Placa del Bus Asignado es: {{busAsociadoConductor.placa}} </h2>\n    </div>\n\n    <!-- <div class=\"main-container\">\n        <h3>Raised Buttons</h3>\n        <div class=\"example-button-row\">\n            <button mat-raised-button>Basic</button>\n            <button mat-raised-button color=\"primary\">Primary</button>\n            <button mat-raised-button color=\"accent\">Accent</button>\n            <button mat-raised-button color=\"warn\">Warn</button>\n            <button mat-raised-button disabled>Disabled</button>\n            <a mat-raised-button routerLink=\".\">Link</a>\n        </div>\n\n        <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n\n    </div> -->\n\n\n\n    <form class=\"user\" #posicionForm=\"ngForm\">\n\n        <br><br><br><br>\n        <label class=\"col-md-4 form-control-label\" for=\"text-input\"></label>\n        <button id=\"mostrarPosicion\" mat-raised-button class=\"col-lg-3\" (click)=\"mostrarPosicion()\" color=\"accent\">Mostrar Posicion</button>\n        <!-- <label class=\"col-md-2 form-control-label\" for=\"text-input\"></label> -->\n        <button id=\"noMostrarPosicion\" mat-raised-button class=\"col-lg-3\" (click)=\"noMostrarPosicion()\" color=\"warn\">No Mostrar Posicion</button>\n        <br><br><br><br>\n        <div class=\"form-group row\">\n            <label class=\"col-md-3 form-control-label\" for=\"text-input\"></label>\n            <label class=\"col-md-3 form-control-label\" for=\"text-input\">Longitud</label>\n            <div class=\"col-md-3\">\n                <input class=\"form-control form-control-user\" type=\"text\" name=\"longitud\" #longitud=\"ngModel\" [(ngModel)]=\"busAsociadoConductor.longitud\" placeholder=\"Longitud\">\n            </div>\n        </div>\n\n        <div class=\"form-group row\">\n            <label class=\"col-md-3 form-control-label\" for=\"text-input\"></label>\n            <label class=\"col-md-3 form-control-label\" for=\"text-input\">Latitud</label>\n            <div class=\"col-md-3\">\n                <input class=\"form-control form-control-user\" type=\"text\" name=\"latitud\" #latitud=\"ngModel\" [(ngModel)]=\"busAsociadoConductor.latitud\" placeholder=\"Latitud\">\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <label class=\"col-md-3 form-control-label\" for=\"text-input\"></label>\n            <label class=\"col-md-3 form-control-label\" for=\"text-input\">Sentido</label>\n            <div class=\"col-md-3\">\n                <input class=\"form-control form-control-user\" type=\"text\" name=\"sentido\" #sentido=\"ngModel\" [(ngModel)]=\"busAsociadoConductor.sentido\" placeholder=\"Sentido\">\n            </div>\n        </div>\n    </form>\n\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/edit-buses/edit-buses.component.html": 
        /*!*******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/edit-buses/edit-buses.component.html ***!
          \*******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- COMPILED AND MINIFIED CSS -->\n<!-- <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\"> -->\n<!-- MATERIAL ICONS -->\n<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\n\n\n<div class=\"row\" style=\"align-content: initial\">\n\n    <div class=\"col-lg-12 my-5\">\n\n\n        <!-- Tabla Listado Rutas -->\n        <div class=\"card\">\n            <div class=\"card-header\">\n                <i class=\"fa fa-address-book\"></i> Rutas\n                <button (click)=\"resetForm(busForm)\" type=\"button\" title=\"Crear Ruta\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#modalActualizarRutas\">\n                            <i class=\"material-icons\">add_to_photos</i>&nbsp;Nueva Ruta&nbsp;\n                        </button>\n            </div>\n            <div class=\"card-body\">\n                <div class=\"form-group row\">\n                    <div class=\"col-md-6\">\n                        <div class=\"input-group\" ng-controller=\"ngifctrl\">\n                            <select class=\"form-control col-md-3\" id=\"opcion\" name=\"opcion\">\n                                      <option value=\"nombre\">Nombre</option>\n                                    </select>\n                            <!-- (keyup)=\"buscarBus(buscarTexto.value)\" (keydown.enter)=\"buscarBus(buscarTexto.value)\" -->\n                            <input (keyup)=\"buscarRuta(buscarTexto.value)\" (keydown.enter)=\"buscarRuta(buscarTexto.value)\" type=\"text\" id=\"texto\" name=\"texto\" class=\"form-control\" placeholder=\"Texto a buscar\" #buscarTexto>\n                            <!-- (click)=\"buscarBus(buscarTexto.value)\" -->\n                            <button (click)=\"buscarRuta(buscarTexto.value)\" type=\"button\" title=\"Buscar\" class=\"btn btn-primary\"><i class=\"fa fa-search\"></i> Buscar</button>\n                        </div>\n                    </div>\n                </div>\n                <table class=\"table table-hover table-bordered table-striped table-sm table-responsive\">\n                    <thead>\n                        <tr>\n                            <th>Nombre</th>\n                            <th>Descripcion</th>\n                            <th>ImagenRuta</th>\n                            <th>NumeroDeBuses</th>\n                            <th>Fecha</th>\n                            <th>ImagenTipoRuta</th>\n                            <th>Operaciones</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n\n                        <!-- <tr *ngFor=\"let bus of busService.buses\"> -->\n                        <tr *ngFor=\"let ruta of selectedRutas1\">\n\n                            <td>{{ruta.nombre}}</td>\n                            <td>{{ruta.descripcion}}</td>\n                            <td width=\"20%\">\n                                <!-- {{bus.imagenBus}} -->\n                                <img src=\"{{ruta.imagenBus}}\" height=\"30%\">\n                            </td>\n                            <td>{{ruta.NumBusesAsociados}}</td>\n                            <td>{{ruta.Fecha}}</td>\n                            <!-- <td>{{bus.imagenTipoBus}}</td> -->\n                            <td *ngIf=\"ruta.imagenTipoBus==='assets/img/padron.png'\">Padron</td>\n                            <td *ngIf=\"ruta.imagenTipoBus==='assets/img/alimentador.png'\">Alimentador</td>\n                            <td *ngIf=\"ruta.imagenTipoBus==='assets/img/articulado.png'\">Articulado</td>\n                            <td>\n                                <!-- <a (click)=\"editBus(bus)\">\n                                    <i class=\"material-icons\">edit</i>\n                                </a>\n                                <a (click)=\"deleteBus(bus._id)\">\n                                    <i class=\"material-icons\">delete</i>\n                                </a> -->\n                                &nbsp;\n                                <button (click)=\"editRuta(ruta)\" type=\"button\" title=\"Editar Ruta\" class=\"btn btn-warning btn-sm \" data-toggle=\"modal\" data-target=\"#modalActualizarRutas\">\n                                        <i class=\"material-icons\">edit</i>\n                                      </button> &nbsp;\n                                <button (click)=\"editRuta(ruta)\" type=\"button\" title=\"Eliminar Ruta\" class=\"btn btn-danger btn-sm\" data-toggle=\"modal\" data-target=\"#modalEliminarRutas\">\n                                        <i class=\"material-icons\">delete</i>\n                                      </button>\n\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n                <div class=\"row animated fadeIn fast\" *ngIf=\"selectedRutas1.length==0\">\n                    <div class=\"col-md-12\">\n                        <div class=\"alert alert-info\" role=\"alert\">\n                            No existen resultados pata la busqueda.\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n\n\n<!--Inicio del modal agregar/actualizar Rutas-->\n<div class=\"modal fade\" id=\"modalActualizarRutas\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" style=\"display: none;\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-primary modal-lg\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Agregar Ruta</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                      <span aria-hidden=\"true\">×</span>\n                    </button>\n            </div>\n            <div class=\"modal-body\">\n\n                <form class=\"user\" #rutaForm=\"ngForm\" (ngSubmit)=\"addRuta(rutaForm)\">\n\n                    <div class=\"form-group row\">\n                        <div class=\"col-md-9\">\n                            <input type=\"hidden\" name=\"_id\" #_id=\"ngModel\" [(ngModel)]=\"rutaService.selectedRuta._id\">\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <label class=\"col-md-3 form-control-label\" for=\"text-input\">Nombre</label>\n                        <div class=\"col-md-9\">\n                            <input class=\"form-control form-control-user\" type=\"text\" name=\"nombre\" #nombre=\"ngModel\" [(ngModel)]=\"rutaService.selectedRuta.nombre\" placeholder=\"Nombre\">\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-md-3 form-control-label\" for=\"text-input\">Descripcion</label>\n                        <div class=\"col-md-9\">\n                            <input class=\"form-control form-control-user\" type=\"text\" name=\"descripcion\" #descripcion=\"ngModel\" [(ngModel)]=\"rutaService.selectedRuta.descripcion\" placeholder=\"Descripcion\">\n                        </div>\n                    </div>\n                    <!-- <div class=\"form-group row\">\n                        <label class=\"col-md-3 form-control-label\" for=\"text-input\">ImagenRuta</label>\n                        <div class=\"col-md-9\">\n                            <input class=\"form-control form-control-user\" type=\"text\" name=\"imagenBus\" #imagenBus=\"ngModel\" [(ngModel)]=\"rutaService.selectedRuta.imagenBus\" placeholder=\"ImagenBus\">\n                        </div>\n                    </div> -->\n                    <div class=\"form-group row\">\n                        <label class=\"col-md-3 form-control-label\" for=\"text-input\">Fecha</label>\n                        <div class=\"col-md-9\">\n                            <input class=\"form-control form-control-user\" type=\"text\" name=\"Fecha\" #Fecha=\"ngModel\" [(ngModel)]=\"rutaService.selectedRuta.Fecha\" placeholder=\"Fecha\">\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-md-3 form-control-label\" for=\"text-input\"></label>\n                        <div class=\"col-md-9\">\n                            <input type=\"hidden\" name=\"imagenBus\" #imagenBus=\"ngModel\" [(ngModel)]=\"rutaService.selectedRuta.imagenBus\">\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-md-3 form-control-label\" for=\"text-input\">ImagenTipoRuta</label>\n                        <div class=\"col-md-9\">\n                            <!-- <input class=\"form-control form-control-user\" type=\"text\" name=\"imagenTipoBus\" #imagenTipoBus=\"ngModel\" [(ngModel)]=\"busService.selectedBus.imagenTipoBus\" placeholder=\"ImagenTipoBus\"> -->\n                            <input type=\"radio\" name=\"imagenTipoBus\" #imagenTipoBus=\"ngModel\" [(ngModel)]=\"rutaService.selectedRuta.imagenTipoBus\" value=\"assets/img/alimentador.png\" checked> <img src=\"assets/img/alimentador.png\" width=\"50%\" height=\"30%\">                            <br>\n                            <input type=\"radio\" name=\"imagenTipoBus\" #imagenTipoBus=\"ngModel\" [(ngModel)]=\"rutaService.selectedRuta.imagenTipoBus\" value=\"assets/img/padron.png\"> <img src=\"assets/img/padron.png\" width=\"50%\" height=\"30%\"><br>\n                            <input type=\"radio\" name=\"imagenTipoBus\" #imagenTipoBus=\"ngModel\" [(ngModel)]=\"rutaService.selectedRuta.imagenTipoBus\" value=\"assets/img/articulado.png\"> <img src=\"assets/img/articulado.png\" width=\"50%\" height=\"30%\">\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <!-- <label class=\"col-md-3 form-control-label\" for=\"text-input\"></label> -->\n                        <div class=\"col-md-9\">\n                            <input type=\"hidden\" name=\"NumBusesAsociados\" #NumBusesAsociados=\"ngModel\" [(ngModel)]=\"rutaService.selectedRuta.NumBusesAsociados\">\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <label class=\"col-md-3 form-control-label\" for=\"text-input\"></label>\n                        <div class=\"col-md-9\">\n                            <input type=\"hidden\" name=\"arrayBuses\" #arrayBuses=\"ngModel\" [(ngModel)]=\"rutaService.selectedRuta.arrayBuses\">\n                        </div>\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cerrar</button>\n                        <div class=\"card-action\">\n                            <div class=\"input-field\">\n                                <button class=\"btn btn-primary btn-user mce-btn-group\" style=\"margin-right: 7.5px;\" (click)=\"resetForm(rutaForm)\">\n                                                        Limpiar</button>\n                                <button class=\"btn btn-success btn-user mce-btn-group\" (click)=\"addRuta(rutaForm)\" data-dismiss=\"modal\">\n                                                        Guardar</button>\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </form>\n            </div>\n\n        </div>\n    </div>\n</div>\n<!--Fin del modal agregar/actualizar Rutas--->\n\n<!-- Inicio del modal Eliminar Ruta -->\n<div class=\"modal fade\" id=\"modalEliminarRutas\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" style=\"display: none;\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-danger\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Eliminar Ruta {{selectedRuta1.nombre}}</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                      <span aria-hidden=\"true\">×</span>\n                    </button>\n            </div>\n            <div class=\"modal-body\">\n                <p>Estas seguro de eliminar la Ruta?</p>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cerrar</button>\n                <button (click)=\"deleteRuta(selectedRuta1._id)\" type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Eliminar</button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Fin del modal Eliminar Ruta -->\n\n<div class=\"container\" style=\"left: initial\">\n    <!-- <div class=\"card o-hidden border-0 shadow-lg my-5\"> -->\n    <!-- <div class=\"card-body\"> -->\n    <!-- <div class=\"row\" style=\"align-content: initial\"> -->\n\n    <!-- <div class=\"col-lg-4\">\n            <div class=\"p-5\">\n                <div class=\"text-center\">\n                    <h1 class=\"h4 text-gray-900 mb-4\">Agregar Ruta!</h1>\n                </div>\n                <br>\n\n                <form class=\"user\" #busForm=\"ngForm\" (ngSubmit)=\"addBus(busForm)\">\n\n                    <div class=\"form-group\">\n                        <input type=\"hidden\" name=\"_id\" #_id=\"ngModel\" [(ngModel)]=\"busService.selectedBus._id\">\n                    </div>\n\n                    <div class=\"form-group\">\n                        <input class=\"form-control form-control-user\" type=\"text\" name=\"nombre\" #nombre=\"ngModel\" [(ngModel)]=\"busService.selectedBus.nombre\" placeholder=\"Nombre\">\n                    </div>\n                    <div class=\"form-group\">\n                        <input class=\"form-control form-control-user\" type=\"text\" name=\"descripcion\" #descripcion=\"ngModel\" [(ngModel)]=\"busService.selectedBus.descripcion\" placeholder=\"descripcion\">\n                    </div>\n                    <div class=\"form-group\">\n                        <input class=\"form-control form-control-user\" type=\"text\" name=\"imagenBus\" #imagenBus=\"ngModel\" [(ngModel)]=\"busService.selectedBus.imagenBus\" placeholder=\"imagenBus\">\n                    </div>\n                    <div class=\"form-group\">\n                        <input class=\"form-control form-control-user\" type=\"text\" name=\"Fecha\" #Fecha=\"ngModel\" [(ngModel)]=\"busService.selectedBus.Fecha\" placeholder=\"Fecha\">\n                    </div>\n                    <div class=\"form-group\">\n                        <input class=\"form-control form-control-user\" type=\"text\" name=\"imagenTipoBus\" #imagenTipoBus=\"ngModel\" [(ngModel)]=\"busService.selectedBus.imagenTipoBus\" placeholder=\"imagenTipoBus\">\n                    </div>\n\n                    <div class=\"form-group\">\n                        <input type=\"hidden\" name=\"NumBusesAsociados\" #NumBusesAsociados=\"ngModel\" [(ngModel)]=\"busService.selectedBus.NumBusesAsociados\">\n                    </div>\n\n                    <div class=\"form-group\">\n                        <input type=\"hidden\" name=\"arrayBuses\" #arrayBuses=\"ngModel\" [(ngModel)]=\"busService.selectedBus.arrayBuses\">\n                    </div>\n\n                    <div class=\"card-action\">\n                        <div class=\"input-field\">\n                            <button class=\"btn btn-primary btn-user mce-btn-group\" style=\"margin-right: 20px;\" (click)=\"resetForm(busForm)\">\n                                        Limpiar</button>\n                            <button class=\"btn btn-success btn-user mce-btn-group\">\n                                        Guardar</button>\n                        </div>\n\n                    </div>\n                </form>\n            </div>\n        </div> -->\n\n    <!-- <div class=\"col-lg-8\">\n            <div class=\"p-5\">\n                <div class=\"text-center\">\n                    <h1 class=\"h4 text-gray-900 mb-4\">Rutas!</h1>\n                </div>\n                <br>\n                <table class=\"w3-table-all\">\n                    <thead>\n                        <tr class=\"w3-light-grey w3-hover-red\">\n                            <th>Nombre</th>\n                            <th>descripcion</th>\n                            <th>imagenBus</th>\n                            <th>Fecha</th>\n                            <th>imagenTipoBus</th>\n                            <th>Operaciones</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr class=\"w3-hover-gray\" *ngFor=\"let bus of busService.buses\">\n\n                            <td>{{bus.nombre}}</td>\n                            <td>{{bus.descripcion}}</td>\n                            <td>{{bus.imagenBus}}</td>\n                            <td>{{bus.Fecha}}</td>\n                            <td>{{bus.imagenTipoBus}}</td>\n                            <td>\n                                <a (click)=\"editBus(bus)\">\n                                    <i class=\"material-icons\">edit</i>\n                                </a>\n                                <a (click)=\"deleteBus(bus._id)\">\n                                    <i class=\"material-icons\">delete</i>\n                                </a>\n                            </td>\n\n                        </tr>\n                    </tbody>\n                </table>\n\n            </div>\n        </div>\n    </div> -->\n    <!-- // *********************************************************************************************** ************************* -->\n\n    <!-- </div> -->\n</div>\n\n<div class=\"row\" style=\"align-content: initial\">\n\n    <div class=\"col-lg-12 my-5\">\n\n\n        <!-- Tabla Listado Buses -->\n        <div class=\"card\">\n            <div class=\"card-header\">\n                <i class=\"fa fa-address-book\"></i> Buses\n                <button (click)=\"resetForm1(busForm)\" type=\"button\" title=\"Crear Bus\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#modalActualizarBus\">\n                            <i class=\"material-icons\">add_to_photos</i>&nbsp;Nuevo Bus&nbsp;\n                        </button>\n            </div>\n            <div class=\"card-body\">\n                <div class=\"form-group row\">\n                    <div class=\"col-md-6\">\n                        <div class=\"input-group\" ng-controller=\"ngifctrl\">\n                            <select class=\"form-control col-md-3\" id=\"opcion\" name=\"opcion\">\n                                      <option value=\"placa\">Placa</option>\n                                    </select>\n                            <!-- (keyup)=\"buscarBus(buscarTexto.value)\" (keydown.enter)=\"buscarBus(buscarTexto.value)\" -->\n                            <input (keyup)=\"buscarBus(buscarTexto1.value)\" (keydown.enter)=\"buscarBus(buscarTexto1.value)\" type=\"text\" id=\"texto1\" name=\"texto1\" class=\"form-control\" placeholder=\"Texto a buscar\" #buscarTexto1>\n                            <!-- (click)=\"buscarBus(buscarTexto.value)\" -->\n                            <button (click)=\"buscarBus(buscarTexto1.value)\" type=\"button\" title=\"Buscar\" class=\"btn btn-primary\"><i class=\"fa fa-search\"></i> Buscar</button>\n                        </div>\n                    </div>\n                </div>\n                <table class=\"table table-hover table-bordered table-striped table-sm table-responsive\">\n                    <thead>\n                        <tr>\n                            <th>Placa</th>\n                            <th>Tipo Bus</th>\n                            <th>Ruta Asociada</th>\n                            <th>Conductor Asociado</th>\n                            <th>Coordenadas</th>\n                            <th>Operaciones</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n\n                        <!-- <tr *ngFor=\"let bus of conductorService.conductores\"> -->\n                        <tr *ngFor=\"let bus of selectedBuses1\">\n\n                            <td>{{bus.placa}}</td>\n                            <!-- <td>{{bus.tipoBus}}</td> -->\n                            <td *ngIf=\"bus.tipoBus==='assets/img/padron.png'\">Padron</td>\n                            <td *ngIf=\"bus.tipoBus==='assets/img/alimentador.png'\">Alimentador</td>\n                            <td *ngIf=\"bus.tipoBus==='assets/img/articulado.png'\">Articulado</td>\n\n                            <td>{{bus.RutaAsociada.nombre}}</td>\n                            <td>{{bus.ConductorAsociado.nombre}}</td>\n                            <!-- <td><img src=\"{{conductor.RutaAsociada.imagenBus}}\" width=\"30%\" height=\"30%\"></td> -->\n                            <td> {{bus.latitud}}, {{bus.longitud}}, {{bus.sentido}}</td>\n                            <!-- <td> {{conductor.RutaAsociada.nombre}}, {{conductor.RutaAsociada.NumBusesAsociados}}</td> -->\n                            <td>\n                                <!-- <a (click)=\"editBus(conductor)\">\n                                    <i class=\"material-icons\">edit</i>\n                                </a>\n                                <a (click)=\"deleteBus(conductor._id)\">\n                                    <i class=\"material-icons\">delete</i>\n                                </a> -->\n                                &nbsp;\n                                <button (click)=\"editBus(bus); getRutasByTipoBus(bus.tipoBus); resetForm2(asignarRutaBusForm);\" type=\"button\" title=\"Asignar Ruta\" class=\"btn btn-success btn-sm mce-btn-group\" data-toggle=\"modal\" data-target=\"#modalAsignarRutaBus\">\n                                    <i class=\"material-icons\">directions_bus</i>\n                                </button>&nbsp;\n                                <button (click)=\"editBus(bus); resetForm3(asignarconductorBusForm);\" type=\"button\" title=\"Asignar Conductor\" class=\"btn btn-success btn-sm mce-btn-group\" data-toggle=\"modal\" data-target=\"#modalAsignarConductorBus\">\n                                    <i class=\"material-icons\">assignment_ind</i>\n                                </button>&nbsp;\n                                <button (click)=\"editBus(bus)\" type=\"button\" title=\"Editar Bus\" class=\"btn btn-warning btn-sm mce-btn-group\" data-toggle=\"modal\" data-target=\"#modalActualizarBus\">\n                                    <i class=\"material-icons\">edit</i>\n                                </button> &nbsp;\n                                <button (click)=\"editBus(bus)\" type=\"button\" title=\"Eliminar Bus\" class=\"btn btn-danger btn-sm mce-btn-group\" data-toggle=\"modal\" data-target=\"#modalEliminarBus\">\n                                    <i class=\"material-icons\">delete</i>\n                                </button> &nbsp;\n                                <button (click)=\"editBus(bus); CuadroDialogo1()\" type=\"button\" title=\"Info Bus\" class=\"btn btn-dark btn-sm mce-btn-group\">\n                                    <i class=\"material-icons\">info</i>\n                                </button>\n\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n\n                <div class=\"row animated fadeIn fast\" *ngIf=\"selectedBuses1.length==0\">\n                    <div class=\"col-md-12\">\n                        <div class=\"alert alert-info\" role=\"alert\">\n                            No existen resultados pata la busqueda.\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n\n    </div>\n</div>\n<!-- Fin tabla listado Buses -->\n\n<!--Inicio del modal agregar/actualizar Bus-->\n<div class=\"modal fade\" id=\"modalActualizarBus\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" style=\"display: none;\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-primary modal-lg\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Agregar Bus</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                      <span aria-hidden=\"true\">×</span>\n                    </button>\n            </div>\n            <div class=\"modal-body\">\n\n                <form class=\"user\" #busForm=\"ngForm\" (ngSubmit)=\"addBus(busForm)\">\n\n                    <div class=\"form-group row\">\n                        <div class=\"col-md-9\">\n                            <input type=\"hidden\" name=\"_id\" #_id=\"ngModel\" [(ngModel)]=\"busesService.selectedBus._id\">\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <label class=\"col-md-3 form-control-label\" for=\"text-input\">Placa</label>\n                        <div class=\"col-md-9\">\n                            <input class=\"form-control form-control-user\" type=\"text\" name=\"placa\" #placa=\"ngModel\" [(ngModel)]=\"busesService.selectedBus.placa\" placeholder=\"Placa\">\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-md-3 form-control-label\" for=\"text-input\">Tipo Bus</label>\n                        <div class=\"col-md-9\">\n                            <!-- <input class=\"form-control form-control-user\" type=\"text\" name=\"imagenTipoBus\" #imagenTipoBus=\"ngModel\" [(ngModel)]=\"busService.selectedBus.imagenTipoBus\" placeholder=\"ImagenTipoBus\"> -->\n                            <input type=\"radio\" name=\"tipoBus\" #tipoBus=\"ngModel\" [(ngModel)]=\"busesService.selectedBus.tipoBus\" value=\"assets/img/alimentador.png\" checked> <img src=\"assets/img/alimentador.png\" width=\"50%\" height=\"30%\"> <br>\n                            <input type=\"radio\" name=\"tipoBus\" #tipoBus=\"ngModel\" [(ngModel)]=\"busesService.selectedBus.tipoBus\" value=\"assets/img/padron.png\"> <img src=\"assets/img/padron.png\" width=\"50%\" height=\"30%\"><br>\n                            <input type=\"radio\" name=\"tipoBus\" #tipoBus=\"ngModel\" [(ngModel)]=\"busesService.selectedBus.tipoBus\" value=\"assets/img/articulado.png\"> <img src=\"assets/img/articulado.png\" width=\"50%\" height=\"30%\">\n                        </div>\n                    </div>\n                    <!-- <div class=\"form-group row\">\n                        <label class=\"col-md-3 form-control-label\" for=\"text-input\">Tipo Bus</label>\n                        <div class=\"col-md-9\">\n                            <input class=\"form-control form-control-user\" type=\"text\" name=\"tipoBus\" #tipoBus=\"ngModel\" [(ngModel)]=\"busesService.selectedBus.tipoBus\" placeholder=\"tipoBus\">\n                        </div>\n                    </div> -->\n                    <div class=\"form-group row\">\n                        <div class=\"col-md-9\">\n                            <!-- <input class=\"form-control form-control-user\" type=\"text\" name=\"RutaAsociada\" #RutaAsociada=\"ngModel\" [(ngModel)]=\"conductorService.selectedConductor.RutaAsociada\" placeholder=\"RutaAsociada\"> -->\n                            <input type=\"hidden\" name=\"RutaAsociada\" #RutaAsociada=\"ngModel\" [(ngModel)]=\"busesService.selectedBus.RutaAsociada\">\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <div class=\"col-md-9\">\n                            <!-- <input class=\"form-control form-control-user\" type=\"text\" name=\"RutaAsociada\" #RutaAsociada=\"ngModel\" [(ngModel)]=\"conductorService.selectedConductor.RutaAsociada\" placeholder=\"RutaAsociada\"> -->\n                            <input type=\"hidden\" name=\"ConductorAsociado\" #ConductorAsociado=\"ngModel\" [(ngModel)]=\"busesService.selectedBus.ConductorAsociado\">\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <div class=\"col-md-9\">\n                            <input type=\"hidden\" value=0 name=\"longitud\" #longitud=\"ngModel\" [(ngModel)]=\"busesService.selectedBus.longitud\">\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <div class=\"col-md-9\">\n                            <input type=\"hidden\" name=\"latitud\" #latitud=\"ngModel\" [(ngModel)]=\"busesService.selectedBus.latitud\">\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <label class=\"col-md-3 form-control-label\" for=\"text-input\"></label>\n                        <div class=\"col-md-9\">\n                            <input type=\"hidden\" name=\"sentido\" #sentido=\"ngModel\" [(ngModel)]=\"busesService.selectedBus.sentido\">\n                        </div>\n                    </div>\n\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cerrar</button>\n                        <div class=\"card-action\">\n                            <div class=\"input-field\">\n                                <button class=\"btn btn-primary btn-user mce-btn-group\" style=\"margin-right: 7.5px;\" (click)=\"resetForm1(busForm)\">\n                                                        Limpiar</button>\n                                <button class=\"btn btn-success btn-user mce-btn-group\" (click)=\"addBus(busForm)\" data-dismiss=\"modal\">\n                                                        Guardar</button>\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </form>\n            </div>\n\n        </div>\n    </div>\n</div>\n<!--Fin del modal agg/act Bus-->\n\n\n<!-- Inicio del modal Eliminar Bus -->\n<div class=\"modal fade\" id=\"modalEliminarBus\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" style=\"display: none;\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-danger\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Eliminar el Bus con Placa: {{selectedBus1.placa}}</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                      <span aria-hidden=\"true\">×</span>\n                    </button>\n            </div>\n            <div class=\"modal-body\">\n                <p>Estas seguro de eliminar el Bus?</p>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cerrar</button>\n                <button (click)=\"deleteBus(selectedBus1._id)\" type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Eliminar</button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Fin del modal Eliminar Bus -->\n\n<!-- Inicio del modal Asignar Ruta a Bus -->\n<div class=\"modal fade\" id=\"modalAsignarRutaBus\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" style=\"display: none;\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-danger\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Asignar una Ruta para el Bus: <b>{{selectedBus1.placa}}</b>.</h4>\n                <h4 class=\"modal-title\">Ruta Actual: <b>{{selectedBus1.RutaAsociada.nombre}} </b>.</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                      <span aria-hidden=\"true\">×</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <p>Seleccione la ruta que va ser asignada. </p>\n\n                <form class=\"user\" #asignarRutaBusForm=\"ngForm\">\n                    <div class=\"form-group row\">\n                        <!-- <div class=\"col-1\"></div>\n                    <div class=\"col-11\"> -->\n                        <select class=\"modal-body\" name=\"ruta\" ngModel> \n                            <option value=\"\" selected disabled>Seleccione una ruta</option>\n                            <option value=\"\">Quitar Ruta </option>\n                            <!-- <option *ngFor=\"let ruta of selectedRutas1\" [ngValue]=\"ruta\" >{{ruta.nombre}}</option> -->\n                            <option *ngFor=\"let ruta of selectedRutas2\" [ngValue]=\"ruta\" >{{ruta.nombre}}</option>\n                        </select>\n                    </div>\n\n                    <!-- </div> -->\n                </form>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cerrar</button>\n                <button (click)=\"asignarRutaBus(asignarRutaBusForm)\" type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\"><i class=\"material-icons\">save</i> Guardar</button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Fin del modal Asignar Ruta a Bus -->\n\n<!-- Inicio del modal Asignar Conductor a Bus -->\n<div class=\"modal fade\" id=\"modalAsignarConductorBus\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" style=\"display: none;\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-danger\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Asignar un Conductor para el Bus: <b>{{selectedBus1.placa}}</b>.</h4>\n                <!-- // **ngIf=\"selectedBus1.ConductorAsociado != ''\"  -->\n                <h4 class=\"modal-title\">Conductor Actual: <b>{{selectedBus1.ConductorAsociado.nombre}} </b>.</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                      <span aria-hidden=\"true\">×</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <p>Seleccione el Conductor que va ser asignado. </p>\n\n                <form class=\"user\" #asignarconductorBusForm=\"ngForm\">\n                    <div class=\"form-group row\">\n                        <select class=\"modal-body\" name=\"conductor\" ngModel> \n                            <option value=\"\" disabled selected>Seleccione un Conductor</option>\n                            <option value=\"\">Quitar Conductor : </option>\n                            <option *ngFor=\"let conductor of conductoresSinBus\" [ngValue]=\"conductor\" >{{conductor.nombre}}</option>\n                        </select>\n                    </div>\n                </form>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cerrar</button>\n                <button (click)=\"asignarConductorBus(asignarconductorBusForm)\" type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\"><i class=\"material-icons\">save</i> Guardar</button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Fin del modal Asignar Conductor a Bus -->\n\n<!-- // *********************************************************************************************** ************************* -->\n<!-- // *********************************************************************************************** ************************* -->\n<!-- // *********************************************************************************************** ************************* -->\n<!-- // *********************************************************************************************** ************************* -->\n<!-- // *********************************************************************************************** ************************* -->\n\n<!-- Tabla Listado Conductores UserI -->\n<div class=\"row\" style=\"align-content: initial\">\n\n    <div class=\"col-lg-12 my-5\">\n\n\n        <div class=\"card\">\n            <div class=\"card-header\">\n                <i class=\"fa fa-address-book\"></i> Conductores\n            </div>\n            <div class=\"card-body\">\n                <div class=\"form-group row\">\n                    <div class=\"col-md-6\">\n                        <div class=\"input-group\" ng-controller=\"ngifctrl\">\n                            <select class=\"form-control col-md-3\" id=\"opcion\" name=\"opcion\">\n                                      <option value=\"nombre\">Nombre</option>\n                                    </select>\n                            <!-- (keyup)=\"buscarBus(buscarTexto.value)\" (keydown.enter)=\"buscarBus(buscarTexto.value)\" -->\n                            <input (keyup)=\"buscarConductor(buscarTexto2.value)\" (keydown.enter)=\"buscarConductor(buscarTexto2.value)\" type=\"text\" id=\"texto2\" name=\"texto2\" class=\"form-control\" placeholder=\"Texto a buscar\" #buscarTexto2>\n                            <!-- (click)=\"buscarBus(buscarTexto.value)\" -->\n                            <button (click)=\"buscarConductor(buscarTexto2.value)\" type=\"button\" title=\"Buscar\" class=\"btn btn-primary\"><i class=\"fa fa-search\"></i> Buscar</button>\n                        </div>\n                    </div>\n                </div>\n                <table class=\"table table-hover table-bordered table-striped table-sm table-responsive\">\n                    <thead>\n                        <tr>\n                            <th>Nombre</th>\n                            <th>Email</th>\n                            <th>Contrasena</th>\n                            <th>TipoUsuario</th>\n                            <th>Estado</th>\n                            <th>Operaciones</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n\n                        <!-- <tr *ngFor=\"let bus of conductorService.conductores\"> -->\n                        <tr *ngFor=\"let conductor of selectedConductores1\">\n\n                            <td>{{conductor.nombre}}</td>\n                            <td>{{conductor.email}}</td>\n                            <td>{{conductor.contrasena}}</td>\n                            <td>{{conductor.tipoUsuario}}</td>\n                            <td>{{conductor.estado}}</td>\n                            <td>\n                                <button (click)=\"editConductor(conductor)\" type=\"button\" title=\"Editar Conductor\" class=\"btn btn-warning btn-sm\" data-toggle=\"modal\" data-target=\"#modalActualizarConductor\">\n                                    <i class=\"material-icons\">edit</i>\n                                </button> &nbsp;\n                                <button (click)=\"editConductor(conductor)\" type=\"button\" title=\"Eliminar Conductor\" class=\"btn btn-danger btn-sm\" data-toggle=\"modal\" data-target=\"#modalEliminarConductor\">\n                                    <i class=\"material-icons\">delete</i>\n                                </button>\n\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n\n                <div class=\"row animated fadeIn fast\" *ngIf=\"selectedConductores1.length==0\">\n                    <div class=\"col-md-12\">\n                        <div class=\"alert alert-info\" role=\"alert\">\n                            No existen resultados pata la busqueda.\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n\n    </div>\n</div>\n<!-- Fin tabla listado Buses -->\n\n<!--Inicio del modal actualizar Bus-->\n<div class=\"modal fade\" id=\"modalActualizarConductor\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" style=\"display: none;\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-primary modal-lg\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Editar Conductor</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                      <span aria-hidden=\"true\">×</span>\n                    </button>\n            </div>\n            <div class=\"modal-body\">\n\n                <form class=\"user\" #conductorForm=\"ngForm\" (ngSubmit)=\"addConductor(conductorForm)\">\n\n                    <div class=\"form-group row\">\n                        <div class=\"col-md-9\">\n                            <input type=\"hidden\" name=\"_id\" #_id=\"ngModel\" [(ngModel)]=\"selectedConductor1._id\">\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <label class=\"col-md-3 form-control-label\" for=\"text-input\">Nombre</label>\n                        <div class=\"col-md-9\">\n                            <input class=\"form-control form-control-user\" type=\"text\" name=\"nombre\" #nombre=\"ngModel\" [(ngModel)]=\"selectedConductor1.nombre\" placeholder=\"nombre\">\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-md-3 form-control-label\" for=\"text-input\">Email</label>\n                        <div class=\"col-md-9\">\n                            <input class=\"form-control form-control-user\" type=\"text\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"selectedConductor1.email\" placeholder=\"email\">\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-md-3 form-control-label\" for=\"text-input\">Contrasena</label>\n                        <div class=\"col-md-9\">\n                            <input class=\"form-control form-control-user\" type=\"text\" name=\"contrasena\" #contrasena=\"ngModel\" [(ngModel)]=\"selectedConductor1.contrasena\" placeholder=\"contrasena\">\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <div class=\"col-md-9\">\n                            <input type=\"hidden\" name=\"tipoUsuario\" #tipoUsuario=\"ngModel\" [(ngModel)]=\"selectedConductor1.tipoUsuario\">\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <div class=\"col-md-9\">\n                            <input type=\"hidden\" name=\"estado\" #estado=\"ngModel\" [(ngModel)]=\"selectedConductor1.estado\">\n                        </div>\n                    </div>\n\n\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cerrar</button>\n                        <div class=\"card-action\">\n                            <div class=\"input-field\">\n                                <button class=\"btn btn-primary btn-user mce-btn-group\" style=\"margin-right: 7.5px;\" (click)=\"resetForm3(conductorForm)\">\n                                                        Limpiar</button>\n                                <button class=\"btn btn-success btn-user mce-btn-group\" (click)=\"addConductor(conductorForm)\" data-dismiss=\"modal\">\n                                                        Guardar</button>\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </form>\n            </div>\n\n        </div>\n    </div>\n</div>\n<!--Fin del modal agg/act Bus-->\n\n<!-- Inicio del modal Eliminar Bus -->\n<div class=\"modal fade\" id=\"modalEliminarConductor\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" style=\"display: none;\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-danger\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Eliminar el Conductor: {{selectedConductor1.nombre}}</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                      <span aria-hidden=\"true\">×</span>\n                    </button>\n            </div>\n            <div class=\"modal-body\">\n                <p>Estas seguro de eliminar el Conductor?</p>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cerrar</button>\n                <button (click)=\"deleteConductor(selectedConductor1._id)\" type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Eliminar</button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Fin del modal Eliminar Bus -->");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid animated fadeIn \">\n    <div class=\"container\">\n        <h1 class=\"display-4\">Metrolinea App</h1>\n        <mat-toolbar color=\"primary\">\n            <span>Mapa</span>\n        </mat-toolbar>\n\n        <p class=\"lead\">Esta es la aplicacion para rastrear buses de metrolinea</p>\n    </div>\n    <img src='assets/img/mami.jpg' alt=\"123\" class=\"img-fluid\">\n    <!-- <div #map style=\"width:100%;height:400px\"></div> -->\n    <!-- <app-mapa></app-mapa> -->\n</div>\n\n\n<div class=\"main-container\">\n    <!-- <h3>Raised Buttons</h3>\n    <div class=\"example-button-row\">\n        <button mat-raised-button>Basic</button>\n        <button mat-raised-button color=\"primary\">Primary</button>\n        <button mat-raised-button color=\"accent\">Accent</button>\n        <button mat-raised-button color=\"warn\">Warn</button>\n        <button mat-raised-button disabled>Disabled</button>\n        <a mat-raised-button routerLink=\".\">Link</a>\n    </div>\n\n    <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar> -->\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mapa/mapa-editar.component.html": 
        /*!**************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/mapa/mapa-editar.component.html ***!
          \**************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- <form [formGroup]=\"forma\">\n    <mat-form-field>\n        <input matInput placeholder=\"Nombre\" formControlName=\"placa\">\n    </mat-form-field>\n\n    <mat-form-field>\n        <textarea rows=\"3\" matInput placeholder=\"Ruta\" formControlName=\"ruta\"></textarea>\n    </mat-form-field>\n\n    <div>\n        <button (click)=\"guardarCambios()\" mat-raised-button color=\"primary\">Guardar</button>\n        <button type=\"button\" (click)=\"onNoClick()\" mat-raised-button color=\"warn\">Cancelar</button>\n    </div>\n</form> -->\n\n<div>\n    <div class=\"row\">\n        <div class=\"col-md-4\">\n            <strong>Ruta Bus: </strong> <b>{{data.ruta.nombre}}</b>, <strong>Placa Bus: </strong> <b>{{data.placa}}</b>\n        </div>\n        <div class=\"col-md-8\">\n            Paradas: {{data.ruta.descripcion}}\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-4\">\n        </div>\n        <div class=\"col-md-2\">\n            <button type=\"button\" (click)=\"onNoClick()\" mat-raised-button color=\"warn\">Cerrar</button>\n        </div>\n        <div class=\"col-md-4\">\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mapa/mapa.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/mapa/mapa.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n\n    <mat-card-title>\n        Mapa\n    </mat-card-title>\n\n    <!-- (centerChange)= (zoomChange) -->\n\n    <mat-card-content>\n        <agm-map (mapClick)=\"agregarMarcador( $event )\" (boundsChange)=\"moverMapa( $event);\" [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"16\">\n            <!-- <agm-circle [latitude]=\"lat\" [longitude]=\"lng\" [radius]=\"30\" [fillColor]=\"'red'\" [circleDraggable]=\"true\" [editable]=\"true\">></agm-circle> -->\n            <agm-marker *ngFor=\"let marcador of marcadores; let i = index\" [iconUrl]=\"'assets/carro.bmp'\" [label]=\"marcador.placa\" [latitude]=\"marcador.latitud\" [longitude]=\"marcador.longitud\">\n\n                <agm-info-window>\n                    <strong>{{marcador.placa}}</strong>\n                    <p>\n                        {{marcador.ruta}}\n                    </p>\n                    <div>\n                        <button (click)=\"editarMarcador(marcador)\" mat-raised-button color=\"primary\">Editar</button>\n                        <button (click)=\"borrarMarcador(i)\" mat-raised-button color=\"warn\">Borrar</button>\n                    </div>\n                </agm-info-window>\n\n            </agm-marker>\n        </agm-map>\n    </mat-card-content>\n\n</mat-card>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mapa2/mapa2.component.html": 
        /*!*********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/mapa2/mapa2.component.html ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- <div id=\"map\"></div>\nReplace the value of the key parameter with your own API key.\n<script async defer src=\"https://maps.googleapis.com/maps/api/js?key=AIzaSyCkUOdZ5y7hMm0yrcCQoCvLwzdM6M8s5qk&callback=initMap\">\n    navigator.geolocation.getCurrentPosition(\n        function(datos) {\n            console.log(\"lat: \" + datos.coords.latitude);\n        }\n    )\n</script> -->\n\n<div #map style=\"width:100%;height:400px\"></div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search/search.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/search/search.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h1>Buscando: <small>{{termino}}</small></h1>\n\n<div *ngIf='termino==\"\"' (keyup)=\"irRutas()\">\n\n</div>\n\n<div class=\"row animated fadeIn fast\" *ngIf=\"rutasSearch.length==0\">\n    <div class=\"col-md-12\">\n        <div class=\"alert alert-info\" role=\"alert\">\n            No existen resultados con el termino: {{termino}}\n        </div>\n    </div>\n</div>\n\n<div class=\"card-columns\">\n    <app-tarjeta-bus [termino]=\"ruta.nombre\" [ruta]=\"ruta\" *ngFor=\"let ruta of rutasSearch ;\"></app-tarjeta-bus>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/navbar/navbar.component.html": 
        /*!******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/navbar/navbar.component.html ***!
          \******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n\n    <a class=\"navbar-brand\" href=\"#\">\n        <img src=\"assets/img/A-64.png\" width=\"30\" height=\"30\" alt=\"\">\n    </a>\n\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo02\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo02\">\n\n        <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n            <li class=\"nav-item \" routerLinkActive=\"active\" id=\"ocultar6\">\n                <!-- <a class=\"nav-link\">{{UsuarioActivo.tipoUsuario}} : {{ UsuarioActivo.nombre }}   .</a> -->\n                <a class=\"nav-link\">{{auth.getUserLogueado().tipoUsuario}} : {{ auth.getUserLogueado().nombre }}   </a>\n            </li>\n        </ul>\n\n        <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n            <li class=\"nav-item\" routerLinkActive=\"active\">\n                <a class=\"nav-link \" [routerLink]=\"[ 'home'] \"><i class=\"material-icons\">home</i>Inicio </a>\n            </li>\n            <li class=\"nav-item \" routerLinkActive=\"active\">\n                <a class=\"nav-link \" [routerLink]=\"[ 'buses'] \"><i class=\"material-icons\">commute</i>Rutas</a>\n            </li>\n            <li class=\"nav-item \" routerLinkActive=\"active\" id=\"ocultar1\">\n                <a class=\"nav-link \" [routerLink]=\"[ 'about'] \"><i class=\"material-icons\">build</i>Administrador</a>\n            </li>\n            <li class=\"nav-item \" routerLinkActive=\"active\" id=\"ocultar2\">\n                <a class=\"nav-link \" [routerLink]=\"[ 'registrar'] \"><i class=\"material-icons\">supervised_user_circle</i>Registrar</a>\n            </li>\n            <li class=\"nav-item \" routerLinkActive=\"active\" id=\"ocultar4\">\n                <a class=\"nav-link \" [routerLink]=\"[ 'login'] \"><i class=\"material-icons\">account_box</i>Inicio Sesion</a>\n            </li>\n            <li class=\"nav-item \" routerLinkActive=\"active\" id=\"ocultar5\">\n                <a class=\"nav-link \" [routerLink]=\"[ 'conductor'] \"><i class=\"material-icons\">directions_bus</i>Conductor</a>\n            </li>\n\n        </ul>\n\n\n        <form class=\"form-inline my-2 my-lg-0 \">\n            <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Buscar bus\" (keyup)=\"buscarBus(buscarTexto.value)\" (keydown.enter)=\"buscarBus(buscarTexto.value)\" #buscarTexto>\n            <button (click)=\"buscarBus(buscarTexto.value)\" class=\"btn btn-outline-success my-2 my-sm-0 \" type=\"button\">Buscar</button>\n        </form>\n        <li>\n            <button id=\"ocultar3\" class=\"btn btn-outline-danger\" (click)=\"salir()\">Salir</button>\n        </li>\n    </div>\n</nav>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tarjeta-bus/tarjeta-bus.component.html": 
        /*!*********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tarjeta-bus/tarjeta-bus.component.html ***!
          \*********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card animated fadeIn fast\">\n    <img [src]=\"ruta.imagenBus\" class=\"card-img-top\" [alt]=\"ruta.nombre\">\n    <div class=\"card-body\">\n        <h5 class=\"card-title\">{{ ruta.nombre }}</h5>\n        <p class=\"card-text\">{{ ruta.descripcion }}</p>\n        <p class=\"card-text\"><small class=\"text-muted\">{{ ruta.Fecha }}</small></p>\n    </div>\n\n    <button (click)=\"verRuta()\" type=\"button\" class=\"btn btn-outline-success btn-block\">ver más...</button>\n\n    <!-- <a [routerLink]=\"['/bus',i]\" class=\"btn btn-outline-success\">Ver mas link..</a> -->\n\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/usuario/login/login.component.html": 
        /*!*****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/usuario/login/login.component.html ***!
          \*****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<body>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\n                <div class=\"card card-signin my-5\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title text-center\">Inicio de Sesion</h5>\n\n                        <form #frmLogin=\"ngForm\" class=\"form-signin\" (ngSubmit)=\"onLogin(frmLogin)\">\n                            <div class=\"form-label-group\">\n                                <input type=\"email\" name=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Correo Electronico\" ngModel required autofocus>\n                                <label for=\"inputEmail\">Correo Electronico</label>\n                            </div>\n\n                            <div class=\"form-label-group\">\n                                <input type=\"password\" name=\"contrasena\" class=\"form-control\" placeholder=\"Contrasena\" ngModel required>\n                                <label for=\"inputPassword\">Contrasena</label>\n                            </div>\n\n                            <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"submit\" value=\"Send\">Ingresar</button>\n                            <hr class=\"my-4\">\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</body>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/usuario/register/register.component.html": 
        /*!***********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/usuario/register/register.component.html ***!
          \***********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<body>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\n                <div class=\"card card-signin my-5\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title text-center\">Crear un Usuario</h5>\n\n                        <form #frmRegister=\"ngForm\" class=\"form-signin\" (ngSubmit)=\"onRegister(frmRegister)\">\n\n                            <div class=\"form-label-group\">\n                                <input type=\"text\" name=\"nombre\" class=\"form-control\" placeholder=\"Nombre\" ngModel required autofocus>\n                                <label for=\"inputEmail\">Nombre</label>\n                            </div>\n\n                            <div class=\"form-label-group\">\n                                <input type=\"email\" name=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Correo Electronico\" ngModel required>\n                                <label for=\"inputEmail\">Correo Electronico</label>\n                            </div>\n\n                            <div class=\"form-label-group\">\n                                <input type=\"password\" name=\"contrasena\" class=\"form-control\" placeholder=\"Contrasena\" ngModel required>\n                                <label for=\"inputPassword\">Contrasena</label>\n                            </div>\n\n                            <div class=\"form-label-group\">\n                                <input type=\"radio\" name=\"tipoUsuario\" value=\"Conductor\" ngModel required> Conductor\n                                <input type=\"radio\" name=\"tipoUsuario\" value=\"Administrador\" ngModel required> Administrador\n                            </div>\n                            <label for=\"tipoUsuario\">Tipo de Usuario</label>\n                            <div class=\"form-label-group\">\n                                <input type=\"hidden\" name=\"estado\" value=\"false\" class=\"form-control\" ngModel>\n                            </div>\n\n                            <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"submit\" value=\"Register\">Registrar</button>\n                            <hr class=\"my-4\">\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</body>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
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
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/Class/marcador.class.ts": 
        /*!*****************************************!*\
          !*** ./src/app/Class/marcador.class.ts ***!
          \*****************************************/
        /*! exports provided: Marcador */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Marcador", function () { return Marcador; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Marcador = /** @class */ (function () {
                function Marcador(bus) {
                    this.placa = bus.placa;
                    this.ruta = bus.RutaAsociada;
                    this.latitud = bus.latitud;
                    this.longitud = bus.longitud;
                    this.sentido = bus.sentido;
                }
                return Marcador;
            }());
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'metrolinea';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
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
            /* harmony import */ var _components_mapa2_mapa2_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/mapa2/mapa2.component */ "./src/app/components/mapa2/mapa2.component.ts");
            /* harmony import */ var _components_edit_buses_edit_buses_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/edit-buses/edit-buses.component */ "./src/app/components/edit-buses/edit-buses.component.ts");
            /* harmony import */ var _components_bus_bus_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/bus/bus.component */ "./src/app/components/bus/bus.component.ts");
            /* harmony import */ var _components_buses_buses_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/buses/buses.component */ "./src/app/components/buses/buses.component.ts");
            /* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
            /* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
            /* harmony import */ var _components_tarjeta_bus_tarjeta_bus_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/tarjeta-bus/tarjeta-bus.component */ "./src/app/components/tarjeta-bus/tarjeta-bus.component.ts");
            /* harmony import */ var _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/shared/navbar/navbar.component */ "./src/app/components/shared/navbar/navbar.component.ts");
            /* harmony import */ var _components_usuario_register_register_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/usuario/register/register.component */ "./src/app/components/usuario/register/register.component.ts");
            /* harmony import */ var _components_conductor_conductor_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/conductor/conductor.component */ "./src/app/components/conductor/conductor.component.ts");
            /* harmony import */ var _components_usuario_login_login_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/usuario/login/login.component */ "./src/app/components/usuario/login/login.component.ts");
            // Rutas
            // Servicios
            // Componentes
            // maps
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    entryComponents: [
                        _components_mapa_mapa_editar_component__WEBPACK_IMPORTED_MODULE_13__["MapaEditarComponent"]
                    ],
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                        _components_mapa_mapa_component__WEBPACK_IMPORTED_MODULE_12__["MapaComponent"],
                        _components_mapa_mapa_editar_component__WEBPACK_IMPORTED_MODULE_13__["MapaEditarComponent"],
                        _components_mapa2_mapa2_component__WEBPACK_IMPORTED_MODULE_14__["Mapa2Component"],
                        _components_edit_buses_edit_buses_component__WEBPACK_IMPORTED_MODULE_15__["EditBusesComponent"],
                        _components_bus_bus_component__WEBPACK_IMPORTED_MODULE_16__["BusComponent"],
                        _components_buses_buses_component__WEBPACK_IMPORTED_MODULE_17__["BusesComponent"],
                        _components_home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
                        _components_search_search_component__WEBPACK_IMPORTED_MODULE_19__["SearchComponent"],
                        _components_tarjeta_bus_tarjeta_bus_component__WEBPACK_IMPORTED_MODULE_20__["TarjetaBusComponent"],
                        _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_21__["NavbarComponent"],
                        _components_usuario_login_login_component__WEBPACK_IMPORTED_MODULE_24__["LoginComponent"],
                        _components_usuario_register_register_component__WEBPACK_IMPORTED_MODULE_22__["RegisterComponent"],
                        _components_conductor_conductor_component__WEBPACK_IMPORTED_MODULE_23__["ConductorComponent"],
                        _components_usuario_login_login_component__WEBPACK_IMPORTED_MODULE_24__["LoginComponent"]
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
                        })
                    ],
                    providers: [
                        _services_rutas_service__WEBPACK_IMPORTED_MODULE_6__["RutasService"],
                        _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
                    ],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/app.routes.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.routes.ts ***!
          \*******************************/
        /*! exports provided: APP_ROUTING */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTING", function () { return APP_ROUTING; });
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
            var APP_ROUTES = [
                { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
                { path: 'about', component: _components_edit_buses_edit_buses_component__WEBPACK_IMPORTED_MODULE_3__["EditBusesComponent"], canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_9__["AdminGuard"]] },
                { path: 'buses', component: _components_buses_buses_component__WEBPACK_IMPORTED_MODULE_4__["BusesComponent"] },
                { path: 'login', component: _components_usuario_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
                { path: 'conductor', component: _components_conductor_conductor_component__WEBPACK_IMPORTED_MODULE_10__["ConductorComponent"], canActivate: [_guards_conductor_guard__WEBPACK_IMPORTED_MODULE_11__["ConductorGuard"]] },
                { path: 'registrar', component: _components_usuario_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"], canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_9__["AdminGuard"]] },
                { path: 'bus/:termino', component: _components_bus_bus_component__WEBPACK_IMPORTED_MODULE_5__["BusComponent"] },
                { path: 'search/:termino', component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"] },
                { path: '', pathMatch: 'full', redirectTo: '/home' },
            ];
            var APP_ROUTING = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(APP_ROUTES);
            /***/ 
        }),
        /***/ "./src/app/components/bus/bus.component.css": 
        /*!**************************************************!*\
          !*** ./src/app/components/bus/bus.component.css ***!
          \**************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("agm-map {\n    height: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9idXMvYnVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9idXMvYnVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwIHtcbiAgICBoZWlnaHQ6IDQwMHB4O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/bus/bus.component.ts": 
        /*!*************************************************!*\
          !*** ./src/app/components/bus/bus.component.ts ***!
          \*************************************************/
        /*! exports provided: BusComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusComponent", function () { return BusComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_rutas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/rutas.service */ "./src/app/services/rutas.service.ts");
            /* harmony import */ var _services_bus_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/bus.service */ "./src/app/services/bus.service.ts");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _Class_marcador_class__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Class/marcador.class */ "./src/app/Class/marcador.class.ts");
            /* harmony import */ var _mapa_mapa_editar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../mapa/mapa-editar.component */ "./src/app/components/mapa/mapa-editar.component.ts");
            var BusComponent = /** @class */ (function () {
                function BusComponent(activatedRoute, rutasService, busService, dialog) {
                    var _this = this;
                    this.activatedRoute = activatedRoute;
                    this.rutasService = rutasService;
                    this.busService = busService;
                    this.dialog = dialog;
                    this.ruta = {};
                    this.marcadores = [];
                    this.latCentroMapa = 7.11392;
                    this.lngCentroMapa = -73.1198;
                    this.activatedRoute.params.subscribe(function (params) {
                        _this.ruta = _this.rutasService.getRuta(params.termino);
                    });
                    this.busService.getBuses();
                    this.BusesAsociadosRuta = this.busService.busesPorRuta(this.ruta.nombre);
                    this.Watcher();
                }
                BusComponent.prototype.ngOnDestroy = function () {
                    if (this.MysetInterval) {
                        clearInterval(this.MysetInterval);
                    }
                };
                BusComponent.prototype.UbicarEnMapa = function (latitud, longitud, sentido) {
                    console.log(latitud, ',', longitud, ',', sentido);
                };
                // Se encarga de actualizar cada 3 segundos la posicion de los buses en todos los usuarios
                BusComponent.prototype.Watcher = function () {
                    var _this = this;
                    this.MysetInterval = setInterval(function () {
                        console.log(2);
                        _this.BusesAsociadosRuta = _this.busService.busesPorRuta(_this.ruta.nombre);
                        _this.crearMarcadoresPorRuta();
                    }, 3000);
                };
                // recorre los buses asociados a la ruta y por cada uno que su conductorAsociado tenga estado true
                // crea un marcador para mostrar en el mapa
                BusComponent.prototype.crearMarcadoresPorRuta = function () {
                    this.marcadores = [];
                    for (var _i = 0, _a = this.BusesAsociadosRuta; _i < _a.length; _i++) {
                        var bus = _a[_i];
                        if (bus.ConductorAsociado.estado === true) {
                            var nuevoMarcador = new _Class_marcador_class__WEBPACK_IMPORTED_MODULE_6__["Marcador"](bus);
                            this.marcadores.push(nuevoMarcador);
                        }
                    }
                };
                BusComponent.prototype.CuadroDialogo = function (marcador) {
                    var dialogRef = this.dialog.open(_mapa_mapa_editar_component__WEBPACK_IMPORTED_MODULE_7__["MapaEditarComponent"], {
                        width: '250px',
                        data: { placa: marcador.placa, ruta: marcador.ruta }
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                        console.log('The dialog was closed');
                        // aqui podemos actuliazar la posicion del bus cada vez que sea cerrado el dialogo
                        // this.snackBar.open(' Marcador actualizado ', 'Cerrar', {duration: 3000});
                    });
                };
                return BusComponent;
            }());
            BusComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _services_rutas_service__WEBPACK_IMPORTED_MODULE_3__["RutasService"] },
                { type: _services_bus_service__WEBPACK_IMPORTED_MODULE_4__["BusService"] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
            ]; };
            BusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-bus',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bus.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/bus/bus.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bus.component.css */ "./src/app/components/bus/bus.component.css")).default]
                })
            ], BusComponent);
            /***/ 
        }),
        /***/ "./src/app/components/buses/buses.component.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/components/buses/buses.component.ts ***!
          \*****************************************************/
        /*! exports provided: BusesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusesComponent", function () { return BusesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_rutas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/rutas.service */ "./src/app/services/rutas.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_ruta_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/ruta.service */ "./src/app/services/ruta.service.ts");
            var BusesComponent = /** @class */ (function () {
                function BusesComponent(rutaService, rutasServices, router) {
                    this.rutaService = rutaService;
                    this.rutasServices = rutasServices;
                    this.router = router;
                    this.rutas = [];
                }
                BusesComponent.prototype.ngOnInit = function () {
                    this.rutas = this.rutasServices.getRutas2();
                    this.getRutas();
                };
                // No es lo ideal pero aqui funciona.
                BusesComponent.prototype.getRutas = function () {
                    var _this = this;
                    this.rutaService.getRuta()
                        .subscribe(function (res) {
                        // this.busService.buses = res as Bus[];
                        _this.rutas = res;
                    });
                };
                return BusesComponent;
            }());
            BusesComponent.ctorParameters = function () { return [
                { type: _services_ruta_service__WEBPACK_IMPORTED_MODULE_4__["RutaService"] },
                { type: _services_rutas_service__WEBPACK_IMPORTED_MODULE_2__["RutasService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            BusesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-buses',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./buses.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/buses/buses.component.html")).default
                })
            ], BusesComponent);
            /***/ 
        }),
        /***/ "./src/app/components/conductor/conductor.component.css": 
        /*!**************************************************************!*\
          !*** ./src/app/components/conductor/conductor.component.css ***!
          \**************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29uZHVjdG9yL2NvbmR1Y3Rvci5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/components/conductor/conductor.component.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/components/conductor/conductor.component.ts ***!
          \*************************************************************/
        /*! exports provided: ConductorComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConductorComponent", function () { return ConductorComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
            /* harmony import */ var src_app_services_bus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/bus.service */ "./src/app/services/bus.service.ts");
            /* harmony import */ var src_app_models_bus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/bus */ "./src/app/models/bus.ts");
            var ConductorComponent = /** @class */ (function () {
                function ConductorComponent(auth, busService) {
                    this.auth = auth;
                    this.busService = busService;
                    this.busAsociadoConductor = new src_app_models_bus__WEBPACK_IMPORTED_MODULE_4__["Bus"]();
                }
                ConductorComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    document.getElementById('noMostrarPosicion').style.display = 'none';
                    document.getElementById('mostrarPosicion').style.display = 'inline';
                    this.busService.getBus().
                        subscribe(function (res) {
                        _this.busService.getBuses();
                        _this.auth.getUser()
                            .subscribe(function (res1) {
                            _this.auth.getUsers();
                            _this.encontrarBusConductor(res);
                        });
                    });
                };
                // Busca el bus Asignado al conductor y lo muestra en conductor.html
                ConductorComponent.prototype.encontrarBusConductor = function (buses) {
                    for (var _i = 0, buses_1 = buses; _i < buses_1.length; _i++) {
                        var bus = buses_1[_i];
                        if (this.auth.getUserLogueado().email === bus.ConductorAsociado.email) {
                            this.busAsociadoConductor = bus;
                        }
                    }
                    // console.log(this.busAsociadoConductor);
                };
                // Actualiza el id en authService para que pueda ser eliminado el watchPosition al hacer logout
                ConductorComponent.prototype.eliminarPosicion = function () {
                    this.auth.id = this.id;
                    this.auth.borrarWatchPosition(this.id);
                };
                // borra el warchPosition mediante un boton y deja de mostrar y actualizar la posicion
                ConductorComponent.prototype.noMostrarPosicion = function () {
                    document.getElementById('noMostrarPosicion').style.display = 'none';
                    document.getElementById('mostrarPosicion').style.display = 'inline';
                    navigator.geolocation.clearWatch(this.id);
                    this.reiniciarPosicion();
                };
                ConductorComponent.prototype.reiniciarPosicion = function () {
                    this.busAsociadoConductor.latitud = 0;
                    this.busAsociadoConductor.longitud = 0;
                    this.busAsociadoConductor.sentido = 0;
                    this.actualizarPosicionEnBaseDeDatos();
                };
                // muestra y actualiza la posicion del conductor en la base de datos
                ConductorComponent.prototype.mostrarPosicion = function () {
                    var _this = this;
                    document.getElementById('noMostrarPosicion').style.display = 'inline';
                    document.getElementById('mostrarPosicion').style.display = 'none';
                    if (this.auth.getUserLogueado().tipoUsuario === 'Conductor') {
                        if (navigator.geolocation) {
                            this.id = navigator.geolocation.watchPosition(function (datos) {
                                _this.eliminarPosicion();
                                if (_this.busAsociadoConductor.latitud !== datos.coords.latitude || _this.busAsociadoConductor.longitud !== datos.coords.longitude
                                    || _this.busAsociadoConductor.sentido !== datos.coords.heading) {
                                    _this.busAsociadoConductor.latitud = datos.coords.latitude;
                                    _this.busAsociadoConductor.longitud = datos.coords.longitude;
                                    _this.busAsociadoConductor.sentido = datos.coords.heading;
                                    _this.actualizarPosicionEnBaseDeDatos();
                                }
                            }, function () { console.log('No esta activado el gps'); M.toast({ html: 'No esta activado el gps' }); });
                        }
                        else {
                            this.reiniciarPosicion();
                        }
                    }
                };
                // Actualiza la posicion en base de datos
                ConductorComponent.prototype.actualizarPosicionEnBaseDeDatos = function () {
                    var _this = this;
                    this.busService.putBus(this.busAsociadoConductor).subscribe(function (res) {
                        M.toast({ html: 'Posicion actualizada satisfactoriamente' });
                        _this.busService.getBuses();
                    });
                };
                return ConductorComponent;
            }());
            ConductorComponent.ctorParameters = function () { return [
                { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
                { type: src_app_services_bus_service__WEBPACK_IMPORTED_MODULE_3__["BusService"] }
            ]; };
            ConductorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-conductor',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./conductor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/conductor/conductor.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./conductor.component.css */ "./src/app/components/conductor/conductor.component.css")).default]
                })
            ], ConductorComponent);
            /***/ 
        }),
        /***/ "./src/app/components/edit-buses/edit-buses.component.css": 
        /*!****************************************************************!*\
          !*** ./src/app/components/edit-buses/edit-buses.component.css ***!
          \****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("th,\ntd {\n    padding: 10px;\n    text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lZGl0LWJ1c2VzL2VkaXQtYnVzZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lZGl0LWJ1c2VzL2VkaXQtYnVzZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRoLFxudGQge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/edit-buses/edit-buses.component.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/components/edit-buses/edit-buses.component.ts ***!
          \***************************************************************/
        /*! exports provided: EditBusesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBusesComponent", function () { return EditBusesComponent; });
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
            var EditBusesComponent = /** @class */ (function () {
                function EditBusesComponent(rutaService, rutasService, busesService, authService, dialog) {
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
                EditBusesComponent.prototype.ngOnInit = function () {
                    this.getRutas();
                    this.rutasService.getRutas();
                    this.getBuses();
                    this.busesService.getBuses();
                    this.getConductores();
                    this.authService.getUsers();
                };
                EditBusesComponent.prototype.getRutasByTipoBus = function (tipoBus) {
                    this.selectedRutas2 = this.rutasService.getRutasByTipoBus(tipoBus);
                };
                EditBusesComponent.prototype.buscarRuta = function (buscarTexto) {
                    this.selectedRutas1 = this.rutasService.buscarRutas(buscarTexto);
                };
                EditBusesComponent.prototype.addRuta = function (form) {
                    var _this = this;
                    form.value.imagenBus = "assets/img/" + form.value.nombre + ".png ";
                    // console.log(form.value);
                    if (form.value._id) {
                        // console.log('Paso 1', form.value);
                        this.rutaService.putRuta(form.value)
                            .subscribe(function (res) {
                            _this.actualizarRutaEnBuses(form.value);
                            // this.resetForm(form);
                            M.toast({ html: 'Bus actualizado satisfactoriamente' });
                            _this.getRutas();
                        });
                    }
                    else {
                        // console.log('Paso 1.1', form.value);
                        form.value.NumBusesAsociados = 0;
                        this.rutaService.postRuta(form.value)
                            .subscribe(function (res) {
                            // console.log(form.value, 'XXXXXX');
                            // console.log('Paso 2.1');
                            // this.resetForm(form);
                            M.toast({ html: 'Guardado satisfactoriamente' });
                            _this.getRutas();
                        });
                    }
                };
                EditBusesComponent.prototype.addRuta2 = function (bus) {
                    var _this = this;
                    // this.actualizarBusEnConductores(bus);
                    if (bus._id) {
                        this.rutaService.putRuta(bus)
                            .subscribe(function (res) {
                            _this.actualizarRutaEnBuses(bus);
                            M.toast({ html: 'bus2 actualizado satisfactoriamente' });
                            _this.getRutas();
                        });
                    }
                };
                EditBusesComponent.prototype.getRutas = function () {
                    var _this = this;
                    this.rutasService.getRutas();
                    this.rutaService.getRuta()
                        .subscribe(function (res) {
                        _this.rutaService.rutas = res;
                        _this.selectedRutas1 = res;
                        // console.log(res, 'yyyyyyyyyyy');
                    });
                };
                EditBusesComponent.prototype.editRuta = function (bus) {
                    this.getRutas();
                    this.rutaService.selectedRuta = bus;
                    this.selectedRuta1 = bus;
                };
                // tslint:disable-next-line:variable-name
                EditBusesComponent.prototype.deleteRuta = function (_id) {
                    var _this = this;
                    // No permitir eliminar un bus si este tiene conductores asociados
                    this.selectedRuta1 = this.rutasService.getRutaById(_id);
                    if (this.selectedRuta1.NumBusesAsociados === 0 || this.selectedRuta1.NumBusesAsociados === null) {
                        this.rutaService.deleteRuta(_id)
                            .subscribe(function (res) {
                            _this.getRutas();
                            M.toast({ html: 'Eliminado satisfactoriamente' });
                        });
                        this.selectedRuta1 = new src_app_models_ruta__WEBPACK_IMPORTED_MODULE_2__["Ruta"]();
                    }
                    else {
                        console.log('El bus tiene conductores asociados');
                    }
                };
                EditBusesComponent.prototype.resetForm = function (form) {
                    if (form) {
                        form.reset();
                        this.rutaService.selectedRuta = new src_app_models_ruta__WEBPACK_IMPORTED_MODULE_2__["Ruta"]();
                        // console.log(this.selectedBus1, 'RRRRR');
                    }
                    this.getRutas();
                };
                EditBusesComponent.prototype.resetForm2 = function (form) {
                    if (form) {
                        form.reset();
                        this.selectedRuta1 = new src_app_models_ruta__WEBPACK_IMPORTED_MODULE_2__["Ruta"]();
                    }
                };
                // ********************************************************************************************************************************
                // ********************************************************************************************************************************
                // ********************************************************************************************************************************
                // ********************************************************************************************************************************
                // Es utilizado en el buscador de buses por nombre
                EditBusesComponent.prototype.buscarBus = function (buscarTexto) {
                    this.selectedBuses1 = this.busesService.buscarBuses(buscarTexto);
                };
                // Crea un nuevo bus o edita uno existente en base de datos
                EditBusesComponent.prototype.addBus = function (form) {
                    var _this = this;
                    // el formulario siempre envia null a estos parametros, por ende esta es una solucion a ese problema
                    form.value.latitud = 0;
                    form.value.longitud = 0;
                    form.value.sentido = 0;
                    if (form.value._id) {
                        // form.value.posicion = {
                        //   lat: 1 , lng: 2, nombre: form.value.nombre, ruta: form.value.bio
                        // };
                        this.busesService.putBus(form.value)
                            .subscribe(function (res) {
                            // this.resetForm1(form);
                            M.toast({ html: 'Bus actualizado satisfactoriamente' });
                            _this.getBuses();
                        });
                    }
                    else {
                        this.busesService.postBus(form.value)
                            .subscribe(function (res) {
                            // this.resetForm1(form);
                            M.toast({ html: 'Guardado satisfactoriamente' });
                            _this.getBuses();
                        });
                    }
                };
                // Obtiene los buses de la base de datos y actualiza las variables busesService.bus y selectedBuses1 con estos
                EditBusesComponent.prototype.getBuses = function () {
                    var _this = this;
                    this.busesService.getBuses();
                    this.busesService.getBus()
                        .subscribe(function (res) {
                        _this.busesService.bus = res;
                        _this.selectedBuses1 = res;
                        // console.log(this.selectedConductores1, 'yyyyyyyyyyy');
                    });
                };
                // no edita buses, recive el bus que va a ser editado o eliminado
                EditBusesComponent.prototype.editBus = function (bus) {
                    this.getBuses();
                    this.busesService.selectedBus = bus;
                    this.selectedBus1 = bus;
                    // console.log(conductor, 'XXXXXXXXXXX');
                };
                // tslint:disable-next-line:variable-name
                EditBusesComponent.prototype.deleteBus = function (_id) {
                    var _this = this;
                    // Actualiza el numero de conductores asociados a la ruta del conductor a eliminar
                    this.selectedBus1 = this.busesService.getBusById(_id);
                    this.selectedBus1.RutaAsociada.NumBusesAsociados -= 1;
                    this.addRuta2(this.selectedBus1.RutaAsociada);
                    // Elimina el conductor
                    this.busesService.deleteBus(_id)
                        .subscribe(function (res) {
                        _this.getBuses();
                        M.toast({ html: 'Bus Eliminado satisfactoriamente' });
                    });
                    this.selectedBus1 = new src_app_models_bus__WEBPACK_IMPORTED_MODULE_6__["Bus"]();
                };
                EditBusesComponent.prototype.resetForm1 = function (form) {
                    if (form) {
                        form.reset();
                        this.busesService.selectedBus = new src_app_models_bus__WEBPACK_IMPORTED_MODULE_6__["Bus"]();
                        this.selectedBus1 = new src_app_models_bus__WEBPACK_IMPORTED_MODULE_6__["Bus"]();
                    }
                    this.getBuses();
                };
                // Permite asociar una Ruta a un bus, ademas actualiza el numero de buses asociados a una ruta
                EditBusesComponent.prototype.asignarRutaBus = function (form) {
                    // esto es un form que se convierte en Ruta y es la nueva ruta para el bus y selectedBus1.rutaAsociada es la ruta actual
                    this.selectedRuta1 = form.value.ruta;
                    if (form.value.ruta === '' || form.value.ruta === null) {
                        this.selectedRuta1 = new src_app_models_ruta__WEBPACK_IMPORTED_MODULE_2__["Ruta"]();
                    }
                    // this.selectedBus1.arrayBuses = '';
                    if (this.selectedBus1.RutaAsociada._id === this.selectedRuta1._id) {
                        console.log('No hacer nada porque no se esta cambiando el bus');
                        // this.selectedBus1.NumBusesAsociados = 0;
                        // this.addBus2(this.selectedBus1);
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
                    }
                };
                // Permite asociar un Conductor a un bus
                EditBusesComponent.prototype.asignarConductorBus = function (form) {
                    // esto es un form que se convierte en UserI y es el nuevo Conductor para el bus y selectedBus1.ConductorAsociado es el Conductor actual
                    this.selectedConductor1 = form.value.conductor;
                    if (form.value.conductor === '' || form.value.conductor === null) {
                        this.selectedConductor1 = new src_app_models_user__WEBPACK_IMPORTED_MODULE_8__["UserI"]();
                    }
                    if (this.selectedBus1.ConductorAsociado._id === this.selectedConductor1._id) {
                        console.log('No hacer nada porque no se esta cambiando el Conductor');
                    }
                    else {
                        this.selectedBus1.ConductorAsociado = this.selectedConductor1;
                        this.addBus2(this.selectedBus1);
                    }
                };
                EditBusesComponent.prototype.addBus2 = function (bus) {
                    var _this = this;
                    this.getBuses();
                    if (bus._id) {
                        this.busesService.putBus(bus)
                            .subscribe(function (res) {
                            _this.getBuses();
                        });
                    }
                };
                EditBusesComponent.prototype.actualizarRutaEnBuses = function (ruta) {
                    this.getBuses();
                    // tslint:disable-next-line:prefer-const
                    for (var _i = 0, _a = this.selectedBuses1; _i < _a.length; _i++) {
                        var bus1 = _a[_i];
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
                };
                // Al hacer un cambio en un conductor este metodo actualiza esos cambios en el bus asociado al conductor
                EditBusesComponent.prototype.actualizarConductorEnBuses = function (conductor) {
                    this.getBuses();
                    for (var _i = 0, _a = this.selectedBuses1; _i < _a.length; _i++) {
                        var bus1 = _a[_i];
                        if (bus1.ConductorAsociado._id === conductor._id) {
                            bus1.ConductorAsociado = conductor;
                            this.addBus2(bus1);
                        }
                    }
                };
                // ********************************************************************************************************************************
                // ********************************************************************************************************************************
                // ********************************************************************************************************************************
                // ********************************************************************************************************************************
                // Es utilizado en el buscador de buses por nombre
                EditBusesComponent.prototype.buscarConductor = function (buscarTexto) {
                    this.selectedConductores1 = this.authService.buscarConductores(buscarTexto);
                };
                // Edita un Conductor existente en base de datos
                // por precaucion de debe arreglar en el html que solo permita editar un usuario mientras el estado sea false*****
                // (al parecer arreglado .. er unproblema de restForm innecesario)
                EditBusesComponent.prototype.addConductor = function (form) {
                    var _this = this;
                    // form.value.estado = false;
                    if (form.value._id) {
                        this.authService.putUser(form.value)
                            .subscribe(function (res) {
                            _this.actualizarConductorEnBuses(form.value);
                            // this.resetForm3(form);
                            M.toast({ html: 'Conductor actualizado satisfactoriamente' });
                            _this.getConductores();
                        });
                    }
                };
                // Obtiene los Conductores de la base de datos y actualiza las variables selectedConductores1 con estos
                EditBusesComponent.prototype.getConductores = function () {
                    var _this = this;
                    this.authService.getUsers();
                    this.authService.getUser()
                        .subscribe(function (res) {
                        _this.selectedConductores1 = _this.authService.getUsersConductores(res);
                        _this.authService.userConductores = _this.selectedConductores1;
                        _this.getConductoresSinBus();
                    });
                };
                // Obtiene los conductores que aun no han sido asociados a un bus
                EditBusesComponent.prototype.getConductoresSinBus = function () {
                    this.conductoresSinBus = [];
                    var tieneBus;
                    for (var _i = 0, _a = this.selectedConductores1; _i < _a.length; _i++) {
                        var conductor = _a[_i];
                        tieneBus = false;
                        for (var _b = 0, _c = this.selectedBuses1; _b < _c.length; _b++) {
                            var bus = _c[_b];
                            if (conductor.email === bus.ConductorAsociado.email) {
                                tieneBus = true;
                            }
                        }
                        if (tieneBus === false) {
                            this.conductoresSinBus.push(conductor);
                        }
                    }
                };
                // no edita conductores, recibe el conductor que va a ser editado o eliminado
                EditBusesComponent.prototype.editConductor = function (conductor) {
                    this.getConductores();
                    // this.authService.selectedUser = conductor;
                    this.selectedConductor1 = conductor;
                };
                // tslint:disable-next-line:variable-name
                EditBusesComponent.prototype.deleteConductor = function (_id) {
                    var _this = this;
                    // this.selectedConductor1 = this.authService.getUserIConductorById(_id);
                    // Elimina un conductor
                    var sePuedeEliminar = false;
                    for (var _i = 0, _a = this.conductoresSinBus; _i < _a.length; _i++) {
                        var conductor = _a[_i];
                        if (conductor._id === _id) {
                            sePuedeEliminar = true;
                        }
                    }
                    if (sePuedeEliminar) {
                        this.authService.deleteUser(_id)
                            .subscribe(function (res) {
                            _this.getConductores();
                            M.toast({ html: 'Conductor Eliminado satisfactoriamente' });
                        });
                        this.selectedConductor1 = new src_app_models_user__WEBPACK_IMPORTED_MODULE_8__["UserI"]();
                    }
                    else {
                        console.log('No se puede eliminar, primero debe desvicularlo del bus');
                    }
                };
                EditBusesComponent.prototype.resetForm3 = function (form) {
                    if (form) {
                        form.reset();
                        this.selectedConductor1 = new src_app_models_user__WEBPACK_IMPORTED_MODULE_8__["UserI"]();
                    }
                    this.getConductores();
                };
                // edita un conductor pero recibiendo como parametro ese conductor y no un NgForm
                EditBusesComponent.prototype.addConductor2 = function (conductor) {
                    var _this = this;
                    this.getConductores();
                    if (conductor._id) {
                        this.authService.putUser(conductor)
                            .subscribe(function (res) {
                            _this.actualizarConductorEnBuses(conductor);
                            _this.getConductores();
                        });
                    }
                };
                EditBusesComponent.prototype.CuadroDialogo1 = function () {
                    var dialogRef = this.dialog.open(_mapa_mapa_editar_component__WEBPACK_IMPORTED_MODULE_9__["MapaEditarComponent"], {
                        width: '450px',
                        data: { placa: this.selectedBus1.placa, ruta: this.selectedBus1.RutaAsociada }
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                        console.log('The dialog was closed');
                        // aqui podemos actuliazar la posicion del bus cada vez que sea cerrado el dialogo
                        // this.snackBar.open(' Marcador actualizado ', 'Cerrar', {duration: 3000});
                    });
                };
                return EditBusesComponent;
            }());
            EditBusesComponent.ctorParameters = function () { return [
                { type: _services_ruta_service__WEBPACK_IMPORTED_MODULE_3__["RutaService"] },
                { type: _services_rutas_service__WEBPACK_IMPORTED_MODULE_4__["RutasService"] },
                { type: _services_bus_service__WEBPACK_IMPORTED_MODULE_5__["BusService"] },
                { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] }
            ]; };
            EditBusesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-edit-buses',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-buses.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/edit-buses/edit-buses.component.html")).default,
                    providers: [_services_ruta_service__WEBPACK_IMPORTED_MODULE_3__["RutaService"], _services_bus_service__WEBPACK_IMPORTED_MODULE_5__["BusService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-buses.component.css */ "./src/app/components/edit-buses/edit-buses.component.css")).default]
                })
            ], EditBusesComponent);
            /***/ 
        }),
        /***/ "./src/app/components/home/home.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/components/home/home.component.ts ***!
          \***************************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            // import {} from 'googlemaps';
            // import { ViewChild } from '@angular/core';
            var HomeComponent = /** @class */ (function () {
                //   @ViewChild('map') mapElement: any;
                //   map: google.maps.Map;
                function HomeComponent() {
                }
                HomeComponent.prototype.ngOnInit = function () { };
                return HomeComponent;
            }());
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/components/mapa/mapa-editar.component.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/components/mapa/mapa-editar.component.ts ***!
          \**********************************************************/
        /*! exports provided: MapaEditarComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaEditarComponent", function () { return MapaEditarComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var MapaEditarComponent = /** @class */ (function () {
                function MapaEditarComponent(fb, dialogRef, data) {
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
                MapaEditarComponent.prototype.ngOnInit = function () {
                };
                // guardarCambios() {
                //   this.dialogRef.close(this.forma.value);
                // }
                MapaEditarComponent.prototype.onNoClick = function () {
                    this.dialogRef.close();
                };
                return MapaEditarComponent;
            }());
            MapaEditarComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
            ]; };
            MapaEditarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-mapa-editar',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mapa-editar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mapa/mapa-editar.component.html")).default
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], MapaEditarComponent);
            /***/ 
        }),
        /***/ "./src/app/components/mapa/mapa.component.css": 
        /*!****************************************************!*\
          !*** ./src/app/components/mapa/mapa.component.css ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("agm-map {\n    height: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYXBhL21hcGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21hcGEvbWFwYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XG4gICAgaGVpZ2h0OiA0MDBweDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/mapa/mapa.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/components/mapa/mapa.component.ts ***!
          \***************************************************/
        /*! exports provided: MapaComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaComponent", function () { return MapaComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _mapa_editar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mapa-editar.component */ "./src/app/components/mapa/mapa-editar.component.ts");
            var MapaComponent = /** @class */ (function () {
                function MapaComponent(snackBar, dialog) {
                    // const nuevoMarcador = new Marcador(this.lat, this.lng);
                    // this.marcadores.push(nuevoMarcador);
                    //   if (navigator.geolocation) {
                    //     navigator.geolocation.watchPosition( async ( datos ) => {
                    //       // await console.log(datos.coords.latitude, 'asdasdasdasd3');
                    //       // await console.log(datos.coords.longitude, 'asdasdasdasd4');
                    //       this.lat1 = datos.coords.latitude;
                    //       this.lng1 = datos.coords.longitude;
                    //       console.log(this.lat1, ' ZZZZZZ ', this.lng1);
                    this.snackBar = snackBar;
                    this.dialog = dialog;
                    this.marcadores = [];
                    this.lat = 7.11392;
                    this.lng = -73.1198;
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
                MapaComponent.prototype.ngOnInit = function () {
                    console.log(this.lat, 'DDDDD');
                };
                MapaComponent.prototype.moverMapa = function (evento) {
                    console.log('it changed');
                    this.lat = this.lat1;
                    this.lng = this.lng1;
                };
                MapaComponent.prototype.agregarMarcador = function (evento) {
                    var coords = evento.coords;
                    console.log(coords.lat, ' YYYYY ', coords.lng);
                    // const nuevoMarcador = new Marcador(coords.lat, coords.lng);
                    // this.marcadores.push(nuevoMarcador);
                    this.guardarStorage();
                };
                MapaComponent.prototype.guardarStorage = function () {
                    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
                    this.snackBar.open(' Marcador agregado ', 'Cerrar', { duration: 3000 });
                };
                MapaComponent.prototype.editarMarcador = function (marcador) {
                    var _this = this;
                    var dialogRef = this.dialog.open(_mapa_editar_component__WEBPACK_IMPORTED_MODULE_4__["MapaEditarComponent"], {
                        width: '250px',
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                        console.log('The dialog was closed');
                        if (!result) {
                            return;
                        }
                        // marcador.nombre = result.nombre;
                        marcador.ruta = result.ruta;
                        _this.guardarStorage();
                        _this.snackBar.open(' Marcador actualizado ', 'Cerrar', { duration: 3000 });
                    });
                };
                MapaComponent.prototype.borrarMarcador = function (i) {
                    this.marcadores.splice(i, 1);
                    this.guardarStorage();
                    this.snackBar.open(' Marcador borrado ', 'Cerrar', { duration: 3000 });
                };
                return MapaComponent;
            }());
            MapaComponent.ctorParameters = function () { return [
                { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
            ]; };
            MapaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-mapa',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mapa.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mapa/mapa.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mapa.component.css */ "./src/app/components/mapa/mapa.component.css")).default]
                })
            ], MapaComponent);
            /***/ 
        }),
        /***/ "./src/app/components/mapa2/mapa2.component.css": 
        /*!******************************************************!*\
          !*** ./src/app/components/mapa2/mapa2.component.css ***!
          \******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFwYTIvbWFwYTIuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/components/mapa2/mapa2.component.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/components/mapa2/mapa2.component.ts ***!
          \*****************************************************/
        /*! exports provided: Mapa2Component */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mapa2Component", function () { return Mapa2Component; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var Mapa2Component = /** @class */ (function () {
                function Mapa2Component() {
                }
                Mapa2Component.prototype.ngOnInit = function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.posicion()];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                Mapa2Component.prototype.posicion = function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            if (navigator.geolocation) {
                                navigator.geolocation.getCurrentPosition(function (datos) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                    var _a, _b, mapProperties, marker;
                                    return __generator(this, function (_c) {
                                        switch (_c.label) {
                                            case 0:
                                                // console.log( await datos.coords.latitude, 'asdasdasdasd3');
                                                // console.log( await datos.coords.longitude, 'asdasdasdasd4');
                                                _a = this;
                                                return [4 /*yield*/, datos.coords.latitude];
                                            case 1:
                                                // console.log( await datos.coords.latitude, 'asdasdasdasd3');
                                                // console.log( await datos.coords.longitude, 'asdasdasdasd4');
                                                _a.lat = _c.sent();
                                                _b = this;
                                                return [4 /*yield*/, datos.coords.longitude];
                                            case 2:
                                                _b.lng = _c.sent();
                                                console.log(this.lat, ' @@@@@@@ ', this.lng);
                                                mapProperties = {
                                                    center: new google.maps.LatLng(this.lat, this.lng),
                                                    zoom: 15,
                                                    mapTypeId: google.maps.MapTypeId.ROADMAP
                                                };
                                                this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
                                                marker = new google.maps.Marker({
                                                    position: new google.maps.LatLng(7.1315202, -73.123147),
                                                    icon: 'assets/bus-solid.svg',
                                                    map: this.map
                                                });
                                                return [2 /*return*/];
                                        }
                                    });
                                }); }, function () { console.log('No esta activado el gps'); });
                            }
                            else {
                                this.lat = 7.11392;
                                this.lng = -73.1198;
                            }
                            console.log(this.lat, ' @@@@@@@2 ', this.lng);
                            return [2 /*return*/];
                        });
                    });
                };
                return Mapa2Component;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', { static: true })
            ], Mapa2Component.prototype, "mapElement", void 0);
            Mapa2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-mapa2',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mapa2.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mapa2/mapa2.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mapa2.component.css */ "./src/app/components/mapa2/mapa2.component.css")).default]
                })
            ], Mapa2Component);
            /***/ 
        }),
        /***/ "./src/app/components/search/search.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/components/search/search.component.ts ***!
          \*******************************************************/
        /*! exports provided: SearchComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function () { return SearchComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_rutas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/rutas.service */ "./src/app/services/rutas.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var SearchComponent = /** @class */ (function () {
                function SearchComponent(activatedRoute, rutasServices, router) {
                    this.activatedRoute = activatedRoute;
                    this.rutasServices = rutasServices;
                    this.router = router;
                    this.rutasSearch = [];
                }
                SearchComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.activatedRoute.params.subscribe(function (params) {
                        _this.rutasSearch = _this.rutasServices.buscarRutas(params.termino);
                        _this.termino = params.termino;
                    });
                };
                SearchComponent.prototype.irRutas = function () {
                    this.router.navigate(['/buses']);
                };
                return SearchComponent;
            }());
            SearchComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _services_rutas_service__WEBPACK_IMPORTED_MODULE_2__["RutasService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-search',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search/search.component.html")).default
                })
            ], SearchComponent);
            /***/ 
        }),
        /***/ "./src/app/components/shared/navbar/navbar.component.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/components/shared/navbar/navbar.component.ts ***!
          \**************************************************************/
        /*! exports provided: NavbarComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () { return NavbarComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
            var NavbarComponent = /** @class */ (function () {
                // UsuarioActivo = new UserI();
                function NavbarComponent(router, auth) {
                    this.router = router;
                    this.auth = auth;
                    this.admin = 'inline';
                }
                NavbarComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.auth.getUser()
                        .subscribe(function (res) {
                        _this.administrador();
                        _this.auth.getUsers();
                        _this.hola();
                        // this.UsuarioActivo = this.auth.getUserLogueado();
                    });
                };
                NavbarComponent.prototype.buscarBus = function (termino) {
                    // console.log(termino);
                    this.router.navigate(['/search', termino]);
                };
                NavbarComponent.prototype.administrador = function () {
                    this.auth.administrador();
                };
                NavbarComponent.prototype.salir = function () {
                    this.auth.logout();
                    this.administrador();
                    this.router.navigateByUrl('/login');
                };
                NavbarComponent.prototype.hola = function () {
                    var _this = this;
                    window.addEventListener('beforeunload', function (e) {
                        var confirmationMessage = '\o/';
                        _this.auth.logout();
                        (e || window.event).returnValue = confirmationMessage; // Gecko + IE
                        return confirmationMessage;
                    });
                };
                return NavbarComponent;
            }());
            NavbarComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
            ]; };
            NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-navbar',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/navbar/navbar.component.html")).default
                })
            ], NavbarComponent);
            /***/ 
        }),
        /***/ "./src/app/components/tarjeta-bus/tarjeta-bus.component.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/components/tarjeta-bus/tarjeta-bus.component.ts ***!
          \*****************************************************************/
        /*! exports provided: TarjetaBusComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TarjetaBusComponent", function () { return TarjetaBusComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var TarjetaBusComponent = /** @class */ (function () {
                function TarjetaBusComponent(router) {
                    this.router = router;
                    this.ruta = {};
                }
                TarjetaBusComponent.prototype.ngOnInit = function () {
                };
                TarjetaBusComponent.prototype.verRuta = function () {
                    this.router.navigate(['/bus', this.termino]);
                };
                return TarjetaBusComponent;
            }());
            TarjetaBusComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
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
            /***/ 
        }),
        /***/ "./src/app/components/usuario/login/login.component.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/components/usuario/login/login.component.ts ***!
          \*************************************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(authService, router) {
                    this.authService = authService;
                    this.router = router;
                }
                LoginComponent.prototype.ngOnInit = function () {
                };
                LoginComponent.prototype.onLogin = function (form) {
                    var _this = this;
                    console.log('login', form.value);
                    this.authService.login(form.value).subscribe(function (res) {
                        _this.authService.administrador();
                        _this.router.navigateByUrl('/home');
                    });
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/usuario/login/login.component.html")).default
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/components/usuario/register/register.component.ts": 
        /*!*******************************************************************!*\
          !*** ./src/app/components/usuario/register/register.component.ts ***!
          \*******************************************************************/
        /*! exports provided: RegisterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () { return RegisterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
            var RegisterComponent = /** @class */ (function () {
                function RegisterComponent(authService, router) {
                    this.authService = authService;
                    this.router = router;
                }
                RegisterComponent.prototype.ngOnInit = function () {
                };
                RegisterComponent.prototype.onRegister = function (form) {
                    form.value.estado = false;
                    this.authService.register(form.value).subscribe(function (res) {
                        // this.router.navigateByUrl('/');
                        console.log('Registrado', form.value);
                    });
                };
                return RegisterComponent;
            }());
            RegisterComponent.ctorParameters = function () { return [
                { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-register',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/usuario/register/register.component.html")).default
                })
            ], RegisterComponent);
            /***/ 
        }),
        /***/ "./src/app/guards/admin.guard.ts": 
        /*!***************************************!*\
          !*** ./src/app/guards/admin.guard.ts ***!
          \***************************************/
        /*! exports provided: AdminGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function () { return AdminGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
            var AdminGuard = /** @class */ (function () {
                function AdminGuard(auth) {
                    this.auth = auth;
                }
                AdminGuard.prototype.canActivate = function () {
                    // console.log('guard');
                    return this.auth.estaAutenticadoUnAdministrador();
                };
                return AdminGuard;
            }());
            AdminGuard.ctorParameters = function () { return [
                { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
            ]; };
            AdminGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AdminGuard);
            /***/ 
        }),
        /***/ "./src/app/guards/conductor.guard.ts": 
        /*!*******************************************!*\
          !*** ./src/app/guards/conductor.guard.ts ***!
          \*******************************************/
        /*! exports provided: ConductorGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConductorGuard", function () { return ConductorGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
            var ConductorGuard = /** @class */ (function () {
                function ConductorGuard(auth) {
                    this.auth = auth;
                }
                ConductorGuard.prototype.canActivate = function () {
                    // console.log('guard');
                    return this.auth.estaAutenticadoUnConductor();
                };
                return ConductorGuard;
            }());
            ConductorGuard.ctorParameters = function () { return [
                { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
            ]; };
            ConductorGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ConductorGuard);
            /***/ 
        }),
        /***/ "./src/app/material.module.ts": 
        /*!************************************!*\
          !*** ./src/app/material.module.ts ***!
          \************************************/
        /*! exports provided: MaterialModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function () { return MaterialModule; });
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
            var MaterialModule = /** @class */ (function () {
                function MaterialModule() {
                }
                return MaterialModule;
            }());
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
            /***/ 
        }),
        /***/ "./src/app/models/bus.ts": 
        /*!*******************************!*\
          !*** ./src/app/models/bus.ts ***!
          \*******************************/
        /*! exports provided: Bus */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bus", function () { return Bus; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var src_app_models_ruta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/ruta */ "./src/app/models/ruta.ts");
            /* harmony import */ var _user2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user2 */ "./src/app/models/user2.ts");
            // esta clase es llamada conductor pero hace referencia a Bus.. que por errores a la hora del diseno se
            // nombr[o conductor.. se debe cambiar a bus al final.
            var Bus = /** @class */ (function () {
                // tslint:disable-next-line:variable-name
                function Bus(_id, placa, tipoBus, ConductorAsociado, RutaAsociada, longitud, latitud, sentido) {
                    if (_id === void 0) { _id = ''; }
                    if (placa === void 0) { placa = ''; }
                    if (tipoBus === void 0) { tipoBus = ''; }
                    if (ConductorAsociado === void 0) { ConductorAsociado = new _user2__WEBPACK_IMPORTED_MODULE_2__["UserI2"](); }
                    if (RutaAsociada === void 0) { RutaAsociada = new src_app_models_ruta__WEBPACK_IMPORTED_MODULE_1__["Ruta"](); }
                    if (longitud === void 0) { longitud = 0; }
                    if (latitud === void 0) { latitud = 0; }
                    if (sentido === void 0) { sentido = 0; }
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
                return Bus;
            }());
            /***/ 
        }),
        /***/ "./src/app/models/ruta.ts": 
        /*!********************************!*\
          !*** ./src/app/models/ruta.ts ***!
          \********************************/
        /*! exports provided: Ruta */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ruta", function () { return Ruta; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // import { Marcador } from '../Class/marcador.class';
            var Ruta = /** @class */ (function () {
                // tslint:disable-next-line:variable-name
                function Ruta(_id, nombre, descripcion, imagenBus, Fecha, imagenTipoBus, NumBusesAsociados, arrayBuses) {
                    if (_id === void 0) { _id = ''; }
                    if (nombre === void 0) { nombre = ''; }
                    if (descripcion === void 0) { descripcion = ''; }
                    if (imagenBus === void 0) { imagenBus = ''; }
                    if (Fecha === void 0) { Fecha = ''; }
                    if (imagenTipoBus === void 0) { imagenTipoBus = ''; }
                    if (NumBusesAsociados === void 0) { NumBusesAsociados = 0; }
                    if (arrayBuses === void 0) { arrayBuses = ''; }
                    this._id = _id;
                    this.nombre = nombre;
                    this.descripcion = descripcion;
                    this.imagenBus = imagenBus;
                    this.Fecha = Fecha;
                    this.imagenTipoBus = imagenTipoBus;
                    this.NumBusesAsociados = NumBusesAsociados;
                    this.arrayBuses = arrayBuses;
                }
                return Ruta;
            }());
            /***/ 
        }),
        /***/ "./src/app/models/user.ts": 
        /*!********************************!*\
          !*** ./src/app/models/user.ts ***!
          \********************************/
        /*! exports provided: UserI */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserI", function () { return UserI; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var UserI = /** @class */ (function () {
                // tslint:disable-next-line:variable-name
                function UserI(_id, nombre, email, contrasena, tipoUsuario, estado) {
                    if (_id === void 0) { _id = ''; }
                    if (nombre === void 0) { nombre = ''; }
                    if (email === void 0) { email = ''; }
                    if (contrasena === void 0) { contrasena = ''; }
                    if (tipoUsuario === void 0) { tipoUsuario = ''; }
                    if (estado === void 0) { estado = false; }
                    this._id = _id;
                    this.nombre = nombre;
                    this.email = email;
                    this.contrasena = contrasena;
                    this.tipoUsuario = tipoUsuario;
                    this.estado = estado;
                }
                return UserI;
            }());
            /***/ 
        }),
        /***/ "./src/app/models/user2.ts": 
        /*!*********************************!*\
          !*** ./src/app/models/user2.ts ***!
          \*********************************/
        /*! exports provided: UserI2 */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserI2", function () { return UserI2; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var UserI2 = /** @class */ (function () {
                // tslint:disable-next-line:variable-name
                function UserI2(_id, nombre, email, tipoUsuario, estado) {
                    if (_id === void 0) { _id = ''; }
                    if (nombre === void 0) { nombre = ''; }
                    if (email === void 0) { email = ''; }
                    if (tipoUsuario === void 0) { tipoUsuario = ''; }
                    if (estado === void 0) { estado = false; }
                    this._id = _id;
                    this.nombre = nombre;
                    this.email = email;
                    this.tipoUsuario = tipoUsuario;
                    this.estado = estado;
                }
                return UserI2;
            }());
            /***/ 
        }),
        /***/ "./src/app/services/auth.service.ts": 
        /*!******************************************!*\
          !*** ./src/app/services/auth.service.ts ***!
          \******************************************/
        /*! exports provided: AuthService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function () { return AuthService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _bus_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bus.service */ "./src/app/services/bus.service.ts");
            var AuthService = /** @class */ (function () {
                function AuthService(httpClient, busService) {
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
                AuthService.prototype.getUser = function () {
                    return this.httpClient.get(this.AUTH_SERVER);
                };
                AuthService.prototype.putUser = function (user) {
                    return this.httpClient.put(this.AUTH_SERVER + ("/" + user._id), user);
                };
                AuthService.prototype.putEstadoUser = function (user) {
                    return this.httpClient.put(this.AUTH_SERVER + ("/estado/" + user._id), { estado: user.estado });
                };
                // tslint:disable-next-line:variable-name
                AuthService.prototype.deleteUser = function (_id) {
                    return this.httpClient.delete(this.AUTH_SERVER + ("/" + _id));
                };
                // Crea usuarios
                AuthService.prototype.register = function (user) {
                    return this.httpClient.post(this.AUTH_SERVER2 + "/register", user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
                        if (res) {
                            // Nada
                        }
                    }));
                };
                // ********************************************************************************************
                // ********************************************************************************************
                // ********************************************************************************************
                // ********************************************************************************************
                // Obtener Users de la base de datos y guardarlos en la variable 'userConductores'
                // tambien podria decirse que este metodo actualiza la variable 'userConductores'
                AuthService.prototype.getUsers = function () {
                    var _this = this;
                    this.getUser()
                        .subscribe(function (res) {
                        _this.Users = res;
                        _this.userConductores = _this.getUsersConductores(res);
                        // console.log(this.userConductores, 'getUsers');
                        _this.getSelectedUserByEmail();
                    });
                };
                // devuelve un array de UserI de tipo Conductor
                AuthService.prototype.getUsersConductores = function (users) {
                    var conductores = [];
                    // console.log(users, 'XXX');
                    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
                        var user = users_1[_i];
                        user = user;
                        if (user.tipoUsuario === 'Conductor') {
                            conductores.push(user);
                        }
                    }
                    // console.log(conductores, 'SSSS');
                    this.userConductores = conductores;
                    return this.userConductores;
                };
                // Obtener un UserI de tipo Conductor por el ID
                // tslint:disable-next-line:variable-name
                AuthService.prototype.getUserIConductorById = function (_id) {
                    for (var _i = 0, _a = this.userConductores; _i < _a.length; _i++) {
                        var userConductor = _a[_i];
                        userConductor = userConductor;
                        if (userConductor._id === _id) {
                            return userConductor;
                        }
                    }
                };
                // Se utiliza en el buscador, obtiene un array con los Conductores que tengan el termino en su nombre
                AuthService.prototype.buscarConductores = function (termino) {
                    var ConductorArr = [];
                    ConductorArr = ConductorArr;
                    termino = termino.toLowerCase();
                    for (var _i = 0, _a = this.userConductores; _i < _a.length; _i++) {
                        var userConductor = _a[_i];
                        userConductor = userConductor;
                        var nombre = userConductor.nombre.toLowerCase();
                        nombre = nombre;
                        if (nombre.indexOf(termino) >= 0) {
                            ConductorArr.push(userConductor);
                        }
                    }
                    return ConductorArr;
                };
                // ********************************************************************************************
                // ********************************************************************************************
                // ********************************************************************************************
                // ********************************************************************************************
                AuthService.prototype.login = function (user) {
                    var _this = this;
                    return this.httpClient.post(this.AUTH_SERVER2 + "/login", user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
                        if (res) {
                            user = _this.getUserConductorbyEmail(user.email);
                            user.estado = true; // Conectado
                            _this.selectedUser = user;
                            _this.actualizarConductorEnBuses(_this.selectedUser);
                            _this.putEstadoUser(_this.selectedUser).subscribe(function (res2) {
                                // console.log(res2, 'Usuario Activo');
                            });
                            // Guardar Token
                            _this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn, _this.selectedUser.email);
                        }
                    }));
                };
                // asigna el id para luego ser borrado en logout, es usado en conductorComponent.ts
                AuthService.prototype.borrarWatchPosition = function (id) {
                    this.id = id;
                };
                // Cierra la sesion de un usuario anteriormente logueado y cambia su estado a false
                AuthService.prototype.logout = function () {
                    this.getSelectedUserByEmail();
                    this.selectedUser.estado = false; // Desconectado
                    this.putEstadoUser(this.selectedUser).subscribe(function (res) {
                        // console.log(res, 'Usuario Desconectado');
                    });
                    navigator.geolocation.clearWatch(this.id);
                    this.actualizarConductorEnBuses(this.selectedUser, 0);
                    this.selectedUser = new _models_user__WEBPACK_IMPORTED_MODULE_3__["UserI"]();
                    this.token = '';
                    localStorage.removeItem('EMAIL');
                    localStorage.removeItem('ACCESS_TOKEN');
                    localStorage.removeItem('EXPIRES_IN');
                };
                // Actualiza el estado del conductorAsociado a un bus a la hora de hacer login y logout
                AuthService.prototype.actualizarConductorEnBuses = function (conductor, logout) {
                    var _this = this;
                    // this.busService.getBuses();
                    for (var _i = 0, _a = this.busService.getBuses2(); _i < _a.length; _i++) {
                        var bus1 = _a[_i];
                        if (bus1.ConductorAsociado._id === conductor._id) {
                            bus1.ConductorAsociado = conductor;
                            if (logout === 0) {
                                bus1.latitud = 0;
                                bus1.longitud = 0;
                                bus1.sentido = 0;
                            }
                            this.busService.putBus(bus1)
                                .subscribe(function (res) {
                                _this.busService.getBuses();
                            });
                        }
                    }
                };
                // Al loguearse un usuario se crean diferentes datos en el localStorage para controlar el cierre de sesion automatico (aun no funciona)
                AuthService.prototype.saveToken = function (token, expiresIn, email) {
                    localStorage.setItem('EMAIL', email);
                    localStorage.setItem('ACCESS_TOKEN', token);
                    localStorage.setItem('EXPIRES_IN', expiresIn);
                    this.token = token;
                };
                AuthService.prototype.getToken = function () {
                    if (!this.token) {
                        this.token = localStorage.getItem('ACCESS_TOKEN');
                    }
                    return this.token;
                };
                // Se utiliza para saber que usuario es el que esta logueado, se utiliza porque al refrescar la pagina se pierde este usuario
                AuthService.prototype.getSelectedUserByEmail = function () {
                    if (localStorage.getItem('EMAIL')) {
                        this.selectedUser = this.getUserConductorbyEmail(localStorage.getItem('EMAIL'));
                    }
                };
                // Devuelve el usuario logueado
                AuthService.prototype.getUserLogueado = function () {
                    // this.getSelectedUserByEmail();
                    return this.selectedUser;
                };
                // Obterner un usuario por el email (Tambien es usado para administradores)
                AuthService.prototype.getUserConductorbyEmail = function (termino) {
                    for (var _i = 0, _a = this.Users; _i < _a.length; _i++) {
                        var userConductor = _a[_i];
                        userConductor = userConductor;
                        if (userConductor.email === termino) {
                            return userConductor;
                        }
                    }
                };
                // Con este metodo sabemos si el usuario logueado se encuentra activo
                AuthService.prototype.estaAutenticadoUnAdministrador = function () {
                    // this.getToken();
                    // if (localStorage.getItem('ACCESS_TOKEN')) {
                    //   return this.token.length > 2;
                    // } else { return false; }
                    var esAdmin = false;
                    if (localStorage.getItem('EMAIL')) {
                        // this.getSelectedUserByEmail();
                        if (this.getUserConductorbyEmail(this.selectedUser.email)) {
                            for (var _i = 0, _a = this.userConductores; _i < _a.length; _i++) {
                                var conductor = _a[_i];
                                if (conductor.email === this.selectedUser.email) {
                                    return false; // Es Conductor
                                }
                                else {
                                    esAdmin = true;
                                } // Es Administrador
                            }
                        }
                    }
                    return esAdmin;
                };
                AuthService.prototype.estaAutenticadoUnConductor = function () {
                    var esCondu = false;
                    if (localStorage.getItem('EMAIL')) {
                        // this.getSelectedUserByEmail();
                        for (var _i = 0, _a = this.userConductores; _i < _a.length; _i++) {
                            var conductor = _a[_i];
                            if (conductor.email === this.selectedUser.email) {
                                return true; // Es Conductor
                            }
                            else {
                                esCondu = false;
                            } // Es Administrador o no existe
                        }
                    }
                    return esCondu;
                };
                // Oculta las diferentes funciones dependiendo del tipo de usuario logueado o invitado
                AuthService.prototype.administrador = function () {
                    if (this.estaAutenticadoUnAdministrador()) {
                        document.getElementById('ocultar1').style.display = 'inline';
                        document.getElementById('ocultar2').style.display = 'inline';
                        document.getElementById('ocultar3').style.display = 'inline';
                        document.getElementById('ocultar4').style.display = 'none';
                        document.getElementById('ocultar5').style.display = 'none';
                        document.getElementById('ocultar6').style.display = 'inline';
                    }
                    else {
                        document.getElementById('ocultar1').style.display = 'none';
                        document.getElementById('ocultar2').style.display = 'none';
                        document.getElementById('ocultar3').style.display = 'none';
                        document.getElementById('ocultar5').style.display = 'none';
                        document.getElementById('ocultar6').style.display = 'none';
                        document.getElementById('ocultar4').style.display = 'inline';
                    }
                    this.conductor();
                };
                AuthService.prototype.conductor = function () {
                    if (this.estaAutenticadoUnConductor()) {
                        document.getElementById('ocultar3').style.display = 'inline';
                        document.getElementById('ocultar4').style.display = 'none';
                        document.getElementById('ocultar5').style.display = 'inline';
                        document.getElementById('ocultar6').style.display = 'inline';
                    }
                    else {
                        document.getElementById('ocultar5').style.display = 'none';
                    }
                };
                return AuthService;
            }());
            AuthService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: _bus_service__WEBPACK_IMPORTED_MODULE_6__["BusService"] }
            ]; };
            AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], AuthService);
            /***/ 
        }),
        /***/ "./src/app/services/bus.service.ts": 
        /*!*****************************************!*\
          !*** ./src/app/services/bus.service.ts ***!
          \*****************************************/
        /*! exports provided: BusService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusService", function () { return BusService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _models_bus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/bus */ "./src/app/models/bus.ts");
            var BusService = /** @class */ (function () {
                function BusService(http) {
                    this.http = http;
                    this.URL_API = '/api/conductores';
                    this.selectedBus = new _models_bus__WEBPACK_IMPORTED_MODULE_3__["Bus"]();
                    console.log('Servicio conductor listo para usarse');
                }
                BusService.prototype.getBus = function () {
                    return this.http.get(this.URL_API);
                };
                // tslint:disable-next-line:no-shadowed-variable
                BusService.prototype.postBus = function (bus) {
                    return this.http.post(this.URL_API, bus);
                };
                BusService.prototype.putBus = function (bus) {
                    return this.http.put(this.URL_API + ("/" + bus._id), bus);
                };
                // tslint:disable-next-line:variable-name
                BusService.prototype.deleteBus = function (_id) {
                    return this.http.delete(this.URL_API + ("/" + _id));
                };
                // ************************************************************
                // devuelve un array de buses
                BusService.prototype.getBuses2 = function () {
                    this.getBuses();
                    return this.buses;
                };
                // Actualiza la variable local buses con los buses de la base de datos
                BusService.prototype.getBuses = function () {
                    var _this = this;
                    this.getBus()
                        .subscribe(function (res) {
                        _this.buses = res;
                    });
                };
                // Obtener un Bus por la placa
                BusService.prototype.getBusByPlaca = function (termino) {
                    for (var _i = 0, _a = this.buses; _i < _a.length; _i++) {
                        var bus = _a[_i];
                        bus = bus;
                        if (bus.placa === termino) {
                            return bus;
                        }
                    }
                };
                // Obtener un Bus por el ID
                // tslint:disable-next-line:variable-name
                BusService.prototype.getBusById = function (_id) {
                    for (var _i = 0, _a = this.buses; _i < _a.length; _i++) {
                        var bus = _a[_i];
                        bus = bus;
                        if (bus._id === _id) {
                            return bus;
                        }
                    }
                };
                // Se utiliza en el buscador, obtiene un array con los buses que tengan el termino en su placa
                BusService.prototype.buscarBuses = function (termino) {
                    var busesArr = [];
                    busesArr = busesArr;
                    termino = termino.toLowerCase();
                    for (var _i = 0, _a = this.buses; _i < _a.length; _i++) {
                        var bus = _a[_i];
                        bus = bus;
                        var placa = bus.placa.toLowerCase();
                        placa = placa;
                        if (placa.indexOf(termino) >= 0) {
                            busesArr.push(bus);
                        }
                    }
                    return busesArr;
                };
                // devuelve un array con los buses asociados a un nombre de ruta
                BusService.prototype.busesPorRuta = function (nombreRuta) {
                    this.getBuses();
                    var busesAsociadosRuta = [];
                    for (var _i = 0, _a = this.buses; _i < _a.length; _i++) {
                        var bus = _a[_i];
                        if (bus.RutaAsociada.nombre === nombreRuta) {
                            busesAsociadosRuta.push(bus);
                        }
                    }
                    return busesAsociadosRuta;
                };
                return BusService;
            }());
            BusService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            BusService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], BusService);
            /***/ 
        }),
        /***/ "./src/app/services/ruta.service.ts": 
        /*!******************************************!*\
          !*** ./src/app/services/ruta.service.ts ***!
          \******************************************/
        /*! exports provided: RutaService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RutaService", function () { return RutaService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _models_ruta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/ruta */ "./src/app/models/ruta.ts");
            var RutaService = /** @class */ (function () {
                function RutaService(http) {
                    this.http = http;
                    this.URL_API = '/api/buses';
                    this.selectedRuta = new _models_ruta__WEBPACK_IMPORTED_MODULE_3__["Ruta"]();
                }
                RutaService.prototype.getRuta = function () {
                    return this.http.get(this.URL_API);
                };
                // tslint:disable-next-line:no-shadowed-variable
                RutaService.prototype.postRuta = function (Ruta) {
                    return this.http.post(this.URL_API, Ruta);
                };
                RutaService.prototype.putRuta = function (Ruta1) {
                    return this.http.put(this.URL_API + ("/" + Ruta1._id), Ruta1);
                };
                // tslint:disable-next-line:variable-name
                RutaService.prototype.deleteRuta = function (_id) {
                    return this.http.delete(this.URL_API + ("/" + _id));
                };
                return RutaService;
            }());
            RutaService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            RutaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], RutaService);
            /***/ 
        }),
        /***/ "./src/app/services/rutas.service.ts": 
        /*!*******************************************!*\
          !*** ./src/app/services/rutas.service.ts ***!
          \*******************************************/
        /*! exports provided: RutasService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RutasService", function () { return RutasService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ruta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ruta.service */ "./src/app/services/ruta.service.ts");
            var RutasService = /** @class */ (function () {
                // private buses: Bus[] = [
                //     {
                //       _id: '1',
                //       nombre: 'P10',
                //       bio:  'Lorem ipsum dolor sit, ametmus quas alias.',
                //       img: 'assets/img/P10.png',
                //       aparicion: '2012-01-01',
                //       casa: 'assets/img/padron.png'
                //     },
                //     {
                //       _id: '1',
                //       nombre: 'AB2',
                //       bio: 'Lorem ipsum dolorum inventore debitis libero, non id voluptas accusantium consequuntur nesciunt',
                //       img: 'assets/img/AB2.png',
                //       aparicion: '2012-01-01',
                //       casa: 'assets/img/alimentador.png'
                //     },
                //     {
                //       _id: '1',
                //       nombre: 'P13',
                //       bio: 'Lorem ipsum, non id voluptas accusantium consequuntur nesciunt incidunt possimus blanditiis',
                //       img: 'assets/img/P13.png',
                //       aparicion: '2010-01-01',
                //       casa: 'assets/img/padron.png'
                //     },
                //     {
                //       _id: '1',
                //       nombre: 'T1',
                //       bio: 'Lorem ipsum dolor, earum inventoidunt possimus blanditiis molestias accusamus',
                //       img: 'assets/img/T1.png',
                //       aparicion: '2013-01-01',
                //       casa: 'assets/img/articulado.png'
                //     },
                //     {
                //       _id: '1',
                //       nombre: 'AB1',
                //       bio: 'Lo earum inventore debitis libero, non id voluptas accusantium consequuntur nesciunt incidu',
                //       img: 'assets/img/AB1.png',
                //       aparicion: '2013-01-01',
                //       casa: 'assets/img/alimentador.png'
                //     },
                //     {
                //       _id: '1',
                //       nombre: 'P8',
                //       bio: 'Lorem um invi adipisicing elit. Recusandae veniam excepturi quidem quasi, earum inventore de',
                //       img: 'assets/img/P8.png',
                //       aparicion: '2015-01-01',
                //       casa: 'assets/img/articulado.png'
                //     },
                //     {
                //       _id: '1',
                //       nombre: 'T3',
                //       bio: 'Loren id voluptas accusantium consequuntur nesciunt incidunt possimus blanditiis molestias accusamus quas alias.',
                //       img: 'assets/img/T3.png',
                //       aparicion: '2015-01-01',
                //       casa: 'assets/img/padron.png'
                //     }
                //   ];
                function RutasService(rutaService) {
                    this.rutaService = rutaService;
                    console.log('Servicio listo para usarse');
                }
                // Actualiza la variable 'buses' y retorna este array
                RutasService.prototype.getRutas2 = function () {
                    this.getRutas();
                    return this.rutas;
                };
                // Obtener buses de la base de datos y guardarlos en la variable 'buses'
                // tambien podria decirse que este metodo actualiza la variable 'buses'
                RutasService.prototype.getRutas = function () {
                    var _this = this;
                    this.rutaService.getRuta()
                        .subscribe(function (res) {
                        // this.busService.buses = res as Bus[];
                        _this.rutas = res;
                    });
                };
                // Obtiene las rutas dependiendo del tipo de bus que tengan (padron, articulado o alimentador)
                RutasService.prototype.getRutasByTipoBus = function (tipoRuta) {
                    var rutasPorTipo = [];
                    if (this.rutas !== null) {
                        for (var _i = 0, _a = this.rutas; _i < _a.length; _i++) {
                            var ruta = _a[_i];
                            if (ruta.imagenTipoBus === tipoRuta) {
                                rutasPorTipo.push(ruta);
                            }
                        }
                    }
                    return rutasPorTipo;
                };
                // Obtener un bus por nombre
                RutasService.prototype.getRuta = function (termino) {
                    for (var _i = 0, _a = this.rutas; _i < _a.length; _i++) {
                        var ruta = _a[_i];
                        ruta = ruta;
                        if (ruta.nombre === termino) {
                            return ruta;
                        }
                    }
                };
                // tslint:disable-next-line:variable-name
                RutasService.prototype.getRutaById = function (_id) {
                    for (var _i = 0, _a = this.rutas; _i < _a.length; _i++) {
                        var ruta = _a[_i];
                        ruta = ruta;
                        if (ruta._id === _id) {
                            return ruta;
                        }
                    }
                };
                // Obtener lista de buses por nombre.. se usa en filtrar
                RutasService.prototype.buscarRutas = function (termino) {
                    var RutasArr = [];
                    RutasArr = RutasArr;
                    termino = termino.toLowerCase();
                    for (var _i = 0, _a = this.rutas; _i < _a.length; _i++) {
                        var bus = _a[_i];
                        bus = bus;
                        var nombre = bus.nombre.toLowerCase();
                        nombre = nombre;
                        if (nombre.indexOf(termino) >= 0) {
                            RutasArr.push(bus);
                            // console.log(busesArr);
                        }
                    }
                    return RutasArr;
                };
                return RutasService;
            }());
            RutasService.ctorParameters = function () { return [
                { type: _ruta_service__WEBPACK_IMPORTED_MODULE_2__["RutaService"] }
            ]; };
            RutasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], RutasService);
            //     export interface Bus {
            //           nombre: string;
            //           bio: string;
            //           img: string;
            //           aparicion: string;
            //           casa: string;
            // }
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
                .catch(function (err) { return console.error(err); });
            // const socket = io.connect('http://localhost:3001', {forceNew: true});
            // socket.on('mensaaje', (data) => {
            //   console.log(data);
            // });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\crist\Desktop\inmetro\metrolinea\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map