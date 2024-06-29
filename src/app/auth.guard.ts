import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth-service.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router= inject(Router);
  const userRole = authService.getUserRole();

  if (userRole === 'admin') {
    return true;
  } else {
    // Redirect to a different page or show an error message
    router.navigate(['landing/error']);
        return false;

  }
};

export const islogged: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router= inject(Router);
  const userRole = authService.getUserEmail()
  if (userRole) {
    return true;
  } else {
    router.navigate(['landing/error']);
        return false;

  }
};
