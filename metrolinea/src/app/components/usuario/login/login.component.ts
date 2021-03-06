import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import Swal from 'sweetalert2';

declare var M: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'

})
export class LoginComponent implements OnInit {


  // tslint:disable-next-line:max-line-length
  emailPattern = '/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/';


  constructor(private authService: AuthService, private router: Router) {
   }

  ngOnInit() {
  }


  onLogin(form): void {

    // console.log(form.valid);
    if (form.valid) {
      // console.log('Valido');
      // console.log('login1', form.value);
      this.authService.login(form.value).subscribe(res => {
        Swal.fire({
          icon: 'success',
          title: 'Sesión iniciada',
          showConfirmButton: false,
          timer: 1000
        });
        this.authService.administrador();
        this.router.navigateByUrl('/inicio');
    },
    error => {
        // console.log(error, 'Ultimo error');
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Email y/o Contrasena incorrecta!'
        });
        document.getElementById('errorEmail').style.display = 'inline';
        setTimeout(() => {
          this.errorEmail();
        }, 3000);
         }
    );
    } else {
            // console.log('No valido');
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Campo Email y/o Contrasena no valido!'
            });
          }
  }

  // Oculta el mensaje que aparece al escribir una direccion de correo y/o contrasena equivocada
  errorEmail(): string {
    document.getElementById('errorEmail').style.display = 'none';
    return 's';
  }


}
