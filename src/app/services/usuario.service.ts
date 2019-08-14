import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {AppGlobal} from '../utilities/app-global';
import {Usuario} from '../models/usuario';
import {ConfigGlobal} from '../utilities/config-global';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = environment.endpoint + 'usuarios';

  constructor(private http: HttpClient,
              private appGlobal: AppGlobal) {
  }

  public getAll() {
    return this.http.get(this.url, {headers: ConfigGlobal.HEADERS});
  }

  public store(usuario: Usuario) {
    return this.http.post(this.url, usuario, {headers: ConfigGlobal.HEADERS});
  }

  public destroy(usuario: Usuario) {
    return this.http.post(this.url + '/destroy', usuario, {headers: ConfigGlobal.HEADERS});
  }

  public login(email: string, password: string) {
    return this.http.post(this.url + '/login', {correo_electronico: email, clave: password}, {headers: ConfigGlobal.HEADERS});
  }
}
