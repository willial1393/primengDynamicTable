import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Icon} from '../models/icon';
import {AppGlobal} from '../utilities/app-global';

@Injectable({
    providedIn: 'root'
})
export class IconService {

    url = environment.endpoint + 'icons';

    constructor(private http: HttpClient,
                private appGlobal: AppGlobal) {
    }

    public getAll() {
        return this.http.get(this.url, {headers: this.appGlobal.headers});
    }

    public store(icon: Icon) {
        return this.http.post(this.url, icon.getJson(), {headers: this.appGlobal.headers});
    }

    public destroy(icon: Icon) {
        return this.http.post(this.url + '/destroy', icon.getJson(), {headers: this.appGlobal.headers});
    }
}
