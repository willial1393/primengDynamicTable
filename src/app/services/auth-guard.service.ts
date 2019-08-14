import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AppGlobal} from '../utilities/app-global';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public router: Router) {
  }

  canActivate(): boolean {
    if (!AppGlobal.getUserLogin()) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
