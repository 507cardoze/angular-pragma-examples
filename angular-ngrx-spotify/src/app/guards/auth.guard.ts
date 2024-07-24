import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '@services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardGuard implements CanActivate {
  constructor(private router: Router, private authservice: AuthService) {}

  redirectToLogin() {
    this.router.navigate(['/login']);
  }

  canActivate() {
    return this.authservice.isAuthorized().pipe(
      map((isAuthenticated) => {
        if (!isAuthenticated) this.redirectToLogin();
        return isAuthenticated;
      })
    );
  }
}
