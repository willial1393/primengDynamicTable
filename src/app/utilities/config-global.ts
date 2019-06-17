import {HttpHeaders} from '@angular/common/http';
import {User} from '../models/user';

export class ConfigGlobal {
    public static HEADERS = new HttpHeaders({
        'Content-Type': 'application/json',
        'api-key': 'base64:hiABIxt3cOrfVFWu3uXgB/TAtXkNW4PegtGxOxhLVsw='
    });

    constructor() {
    }

    public static getUserLogin(): User {
        return JSON.parse(localStorage.getItem('login'));
    }

    public static setUserLogin(user: User) {
        localStorage.setItem('login', JSON.stringify(user));
    }
}
