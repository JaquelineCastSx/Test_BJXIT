import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const isAuthenticated = localStorage.getItem('token') !== null;

  if (isAuthenticated) {
    return true;
  } else {
    // Redirect to login or show an error message
    return false;
  }
};
