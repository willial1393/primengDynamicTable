import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {State} from '../models/state';
import {AppGlobal} from '../utilities/app-global';

@Injectable({
    providedIn: 'root'
})
export class StateService {
    url = environment.endpoint + 'states';

    constructor(private http: HttpClient,
                private appGlobal: AppGlobal) {
    }

    public getAll() {
        return this.http.get(this.url, {headers: this.appGlobal.headers});
    }

    public store(state: State) {
        return this.http.post(this.url, state.getJson(), {headers: this.appGlobal.headers});
    }

    public destroy(state: State) {
        return this.http.post(this.url + '/destroy', state.getJson(), {headers: this.appGlobal.headers});
    }
}
