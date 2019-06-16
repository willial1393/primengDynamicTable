import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {ConfigGlobal} from '../utilities/config-global';

@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    url = environment.endpoint + 'projects';
    headers = ConfigGlobal.HEADERS;

    constructor(private http: HttpClient) {
    }

    public getAll() {
        return this.http.get(this.url, {headers: this.headers});
    }
}
