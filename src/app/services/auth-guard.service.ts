import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {ConfigGlobal} from '../utilities/config-global';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

    constructor(public router: Router) {
    }

    canActivate(): boolean {
        if (!ConfigGlobal.getUserLogin()) {
            this.router.navigate(['/']);
            return false;
        }
        return true;
    }
}
