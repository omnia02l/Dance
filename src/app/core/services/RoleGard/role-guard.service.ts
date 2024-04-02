// role.guard.ts

import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { inject } from '@angular/core';
import { AuthService } from '../auth.service';

export function canActivateRoleGuard(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  const authService = inject(AuthService);
  const router = inject(Router);

  const expectedRole = route.data['expectedRole'];
  const token = authService.getFromLocalStorage('accessToken');
  const tokenPayload = authService.decodeToken(token!);

  if (!authService.isAuthenticated() || tokenPayload.role !== expectedRole) {
    router.navigate(['admin']);
    return false;
  }
  return true;
}
