import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  emailPattern = '/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onRegister(form): void {

    if (form.valid) {
      // console.log('Valido');
      form.value.estado = false;
      this.authService.register(form.value).subscribe(res => {
        // this.router.navigateByUrl('/');
        // form.controls.tipoUsuario.untouched = false;
        Swal.fire({
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

      },
      error => {
                  // console.log(error, error.error);
                  Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.error
                  });
              }
      );
    } else {
              // console.log('No valido');
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Campos para el registro no validos!'
              }); }
  }

  usuarioAgg(): string {
    document.getElementById('UsuarioAgg').style.display = 'none';
    return 's';
  }

}
