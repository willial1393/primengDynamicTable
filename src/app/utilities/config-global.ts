import {HttpHeaders} from '@angular/common/http';

export class ConfigGlobal {

  static HEADERS = new HttpHeaders({
    'Content-Type': 'application/json',
    'api-key': ''
  });



}
