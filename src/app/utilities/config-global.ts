import {User} from '../models/user';
import {Project} from '../models/project';

export class ConfigGlobal {

    constructor() {
    }

    // login
    public static getUserLogin(): User {
        return JSON.parse(localStorage.getItem('login'));
    }

    public static setUserLogin(user: User) {
        localStorage.setItem('login', JSON.stringify(user));
    }

    // project
    public static getProject(): Project {
        return JSON.parse(localStorage.getItem('project'));
    }

    public static setProject(project: Project) {
        localStorage.setItem('project', JSON.stringify(project));
    }


}
