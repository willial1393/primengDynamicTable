import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Item} from '../models/item';
import {AppGlobal} from '../utilities/app-global';

@Injectable({
    providedIn: 'root'
})
export class ItemService {

    url = environment.endpoint + 'items';

    constructor(private http: HttpClient,
                private appGlobal: AppGlobal) {
    }

    public getAll() {
        return this.http.get(this.url, {headers: this.appGlobal.headers});
    }

    public store(item: Item) {
        return this.http.post(this.url, item.getJson(), {headers: this.appGlobal.headers});
    }

    public destroy(item: Item) {
        return this.http.post(this.url + '/destroy', item.getJson(), {headers: this.appGlobal.headers});
    }
}
