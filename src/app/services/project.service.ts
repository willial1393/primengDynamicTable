import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {ConfigGlobal} from '../utilities/config-global';
import {Project} from '../models/project';

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

    public store(project: Project) {
        return this.http.post(this.url, project.getJson(), {headers: this.headers});
    }

    public destroy(project: Project) {
        return this.http.post(this.url + '/destroy', project.getJson(), {headers: this.headers});
    }
}
