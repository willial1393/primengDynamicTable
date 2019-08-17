import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {AppGlobal} from '../utilities/app-global';
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
    return this.http.get('../assets/usuarios.json', {headers: ConfigGlobal.HEADERS});
  }
}
