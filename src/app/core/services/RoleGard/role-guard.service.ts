import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    //const expectedRole = route.data.expectedRole;
    //const token = this.auth.getFromLocalStorage('accessToken');
    // decode the token to get its payload
    //const tokenPayload = decode(token);
    //if (!this.auth.isAuthenticated() || tokenPayload.role !== expectedRole) {
    //  this.router.navigate(['login']);
    
    //return false;
   // }
    return true;
  }
}
