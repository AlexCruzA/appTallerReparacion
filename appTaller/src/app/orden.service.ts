import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Orden } from './orden';
import { Constants } from './shared/constants';

@Injectable()
export class OrdenService {

  constructor(private http: Http) { }

  read(query = '') {
    return this.http.get(Constants.build_url('ordenes'), {
      params: { q: query },
      headers: new Headers(this.headers())
    });
  }

  insert(data: Orden) {
    return this.http.post(Constants.build_url('ordenes'), data, {
      headers: new Headers(this.headers())
    });
  }

  update(data: Orden) {
    return this.http.put(Constants.build_url('ordenes/' + data.id), data, {
      headers: new Headers(this.headers())
    });
  }

  delete(id) {
    return this.http.delete(Constants.build_url('ordenes/' + id), {
      headers: new Headers(this.headers())
    });
  }

  findById(id) {
    return this.http.get(Constants.build_url('ordenes/' + id), {
      headers: new Headers(this.headers())
    });
  }

  headers() {
    return {
        'Authorization': 'bearer ' + localStorage.getItem('token')
    }
  }
}
