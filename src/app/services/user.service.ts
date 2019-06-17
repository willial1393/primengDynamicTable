import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {ConfigGlobal} from '../utilities/config-global';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    url = environment.endpoint + 'users';
    headers = ConfigGlobal.HEADERS;

    constructor(private http: HttpClient) {
    }

    public getAll() {
        return this.http.get(this.url, {headers: this.headers});
    }

    public store(user: User) {
        return this.http.post(this.url, user.getJson(), {headers: this.headers});
    }

    public destroy(user: User) {
        return this.http.post(this.url + '/destroy', user.getJson(), {headers: this.headers});
    }

    public login(user: User) {
        return this.http.post(this.url + '/login', user.getJsonLogin(), {headers: this.headers});
    }
}
