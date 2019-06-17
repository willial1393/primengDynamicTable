import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {ConfigGlobal} from '../utilities/config-global';
import {HttpClient} from '@angular/common/http';
import {Item} from '../models/item';

@Injectable({
    providedIn: 'root'
})
export class ItemService {

    url = environment.endpoint + 'items';
    headers = ConfigGlobal.HEADERS;

    constructor(private http: HttpClient) {
    }

    public getAll() {
        return this.http.get(this.url, {headers: this.headers});
    }

    public store(item: Item) {
        return this.http.post(this.url, item.getJson(), {headers: this.headers});
    }

    public destroy(item: Item) {
        return this.http.post(this.url + '/destroy', item.getJson(), {headers: this.headers});
    }
}
