import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {AppGlobal} from '../utilities/app-global';
import {ConfigGlobal} from '../utilities/config-global';

@Injectable({
  providedIn: 'root'
})
export class TipousuarioService {

  url = environment.endpoint + 'tiposusuarios';

  constructor(private http: HttpClient,
              private appGlobal: AppGlobal) {
  }

  public getAll() {
    return this.http.get('../assets/tiposUsuarios.json', {headers: ConfigGlobal.HEADERS});
  }
}
