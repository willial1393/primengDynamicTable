import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Project} from '../models/project';
import {AppGlobal} from '../utilities/app-global';

@Injectable({
    providedIn: 'root'
})
export class ProjectService {

    url = environment.endpoint + 'projects';

    constructor(private http: HttpClient,
                private appGlobal: AppGlobal) {
    }

    public getAll() {
        return this.http.get(this.url, {headers: this.appGlobal.headers});
    }

    public store(project: Project) {
        return this.http.post(this.url, project.getJson(), {headers: this.appGlobal.headers});
    }

    public destroy(project: Project) {
        return this.http.post(this.url + '/destroy', project.getJson(), {headers: this.appGlobal.headers});
    }
}
