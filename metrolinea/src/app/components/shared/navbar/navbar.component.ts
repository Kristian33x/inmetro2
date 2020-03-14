import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  admin = 'inline' ;
  // UsuarioActivo = new UserI();

  constructor(private router: Router, public auth: AuthService) { }

  ngOnInit() {
    this.auth.getUser()
    .subscribe(res => {
      this.administrador();
      this.auth.getUsers();
      this.cerrarVentana();
      // this.UsuarioActivo = this.auth.getUserLogueado();
    });

  }

  buscarBus(termino: string) {
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

}
