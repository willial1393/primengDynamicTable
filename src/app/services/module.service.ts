import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {ConfigGlobal} from '../utilities/config-global';
import {HttpClient} from '@angular/common/http';
import {Module} from '../models/module';

@Injectable({
    providedIn: 'root'
})
export class ModuleService {

    url = environment.endpoint + 'projects';
    headers = ConfigGlobal.HEADERS;

    constructor(private http: HttpClient) {
    }

    public getAll() {
        return this.http.get(this.url, {headers: this.headers});
    }

    public store(module: Module) {
        return this.http.post(this.url, module.getJson(), {headers: this.headers});
    }

    public destroy(module: Module) {
        return this.http.post(this.url + '/destroy', module.getJson(), {headers: this.headers});
    }
}
