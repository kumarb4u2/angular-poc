// auth.guard.ts

import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate,
         ActivatedRouteSnapshot, 
         RouterStateSnapshot, 
         Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
 
      if (this.authService.authenticated) {
        return true;
      }

      this.router.navigateByUrl('/auth/login');

      return false; 
  }
}