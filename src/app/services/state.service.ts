import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {ConfigGlobal} from '../utilities/config-global';
import {HttpClient} from '@angular/common/http';

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
}
