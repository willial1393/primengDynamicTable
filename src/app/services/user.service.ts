import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {AppGlobal} from '../utilities/app-global';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    url = environment.endpoint + 'users';

    constructor(private http: HttpClient,
                private appGlobal: AppGlobal) {
    }

    public getAll() {
        return this.http.get(this.url, {headers: this.appGlobal.headers});
    }

    public store(user: User) {
        return this.http.post(this.url, user.getJson(), {headers: this.appGlobal.headers});
    }

    public destroy(user: User) {
        return this.http.post(this.url + '/destroy', user.getJson(), {headers: this.appGlobal.headers});
    }

    public login(user: User) {
        return this.http.post(this.url + '/login', user.getJsonLogin(), {headers: this.appGlobal.headers});
    }
}
