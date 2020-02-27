import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

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
      console.log('Valido');
      form.value.estado = false;
      this.authService.register(form.value).subscribe(res => {
        // this.router.navigateByUrl('/');
        console.log('Registrado', form.value);
      },
      error => {console.log(error, 'error U.u'); }
      );
    } else { console.log('No valido'); }
  }

}
