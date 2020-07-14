import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  constructor(private src: AuthService, private router: Router){}
  canActivate() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      this.src.logout();
      this.router.navigate(['A/login']);
      return false;
    }
  }
}
