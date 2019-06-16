import {HttpHeaders} from '@angular/common/http';

export class ConfigGlobal {
    public static HEADERS = new HttpHeaders({
        'Content-Type': 'application/json',
        'api-key': 'base64:hiABIxt3cOrfVFWu3uXgB/TAtXkNW4PegtGxOxhLVsw='
    });

    constructor() {
    }
}
