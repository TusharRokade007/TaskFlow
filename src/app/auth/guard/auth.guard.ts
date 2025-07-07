import { inject } from '@angular/core';
import {
  CanActivateFn,
  Router,
} from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);

  const email = localStorage.getItem('email'); // Or 'token'

  if (email) {
    return true; // allow navigation
  } else {
    router.navigate(['/login']);
    return false;
  }
};
