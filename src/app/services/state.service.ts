import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {ConfigGlobal} from '../utilities/config-global';
import {HttpClient} from '@angular/common/http';
import {State} from '../models/state';

@Injectable({
    providedIn: 'root'
})
export class StateService {
    url = environment.endpoint + 'states';
    headers = ConfigGlobal.HEADERS;

    constructor(private http: HttpClient) {
    }

    public getAll() {
        return this.http.get(this.url, {headers: this.headers});
    }

    public store(state: State) {
        return this.http.post(this.url, state.getJson(), {headers: this.headers});
    }

    public destroy(state: State) {
        return this.http.post(this.url + '/destroy', state.getJson(), {headers: this.headers});
    }
}
