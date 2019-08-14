import {Injectable} from '@angular/core';
import {Usuario} from '../models/usuario';

@Injectable()
export class AppGlobal {
  // login
  public static getUserLogin(): Usuario {
    return JSON.parse(localStorage.getItem('login'));
  }

  public static setUserLogin(user: Usuario) {
    localStorage.setItem('login', JSON.stringify(user));
  }
}
