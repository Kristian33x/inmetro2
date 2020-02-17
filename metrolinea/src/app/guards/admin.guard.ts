import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private auth: AuthService) { }
  canActivate(): boolean {
    // console.log('guard');
    return this.auth.estaAutenticadoUnAdministrador();
  }
}

