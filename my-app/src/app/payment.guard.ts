import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class PaymentGuard implements CanActivate {

  private authService:AuthService;

  constructor(p_auth:AuthService) {
    this.authService = p_auth;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log("PaymentGuard.canActivate");
      return this.authService.isAuthenticated();
  }
}
