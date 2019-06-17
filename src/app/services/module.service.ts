import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Module} from '../models/module';
import {AppGlobal} from '../utilities/app-global';

@Injectable({
    providedIn: 'root'
})
export class ModuleService {

    url = environment.endpoint + 'modules';

    constructor(private http: HttpClient,
                private appGlobal: AppGlobal) {
    }

    public getAll() {
        return this.http.get(this.url, {headers: this.appGlobal.headers});
    }

    public store(module: Module) {
        return this.http.post(this.url, module.getJson(), {headers: this.appGlobal.headers});
    }

    public destroy(module: Module) {
        return this.http.post(this.url + '/destroy', module.getJson(), {headers: this.appGlobal.headers});
    }
}
