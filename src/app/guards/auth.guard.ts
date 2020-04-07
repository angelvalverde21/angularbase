import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../servicios/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( 
    private auth: AuthService,
    private router: Router
  ){

  }

  canActivate(): boolean {
    console.log('guard');
    if ( this.auth.estaAutenticado() ){
      return true;
    }else{
      this.router.navigateByUrl('/login');
      return false;
    }
  }
  
}
