import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router} from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate{
  constructor(private authService: AuthService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): boolean | Observable<boolean> | Promise<boolean> {
      const isAuth = this.authService.getisAuth();
      if(!isAuth){
<<<<<<< HEAD
        this.router.navigate(['/login']);
=======
        this.router.navigate(['/auth/login']);
>>>>>>> 8e2c8daecafee80adf2baedd9d851df5b8d9bf7a
      }
      return isAuth;
  }
}
