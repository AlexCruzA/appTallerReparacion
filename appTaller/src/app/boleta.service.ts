import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Boleta } from './boleta';
import { Constants } from './shared/constants';

@Injectable()
export class BoletaService {

  constructor(private http: Http) { }

  read(query = '') {
    return this.http.get(Constants.build_url('boletas'), {
      params: { q: query },
      headers: new Headers(this.headers())
    });
  }

  insert(data: Boleta) {
    return this.http.post(Constants.build_url('boletas'), data, {
      headers: new Headers(this.headers())
    });
  }

  update(data: Boleta) {
    return this.http.put(Constants.build_url('boletas/' + data.id), data, {
      headers: new Headers(this.headers())
    });
  }

  delete(id) {
    return this.http.delete(Constants.build_url('boletas/' + id), {
      headers: new Headers(this.headers())
    });
  }

  findById(id) {
    return this.http.get(Constants.build_url('boletas/' + id), {
      headers: new Headers(this.headers())
    });
  }

  headers() {
    return {
        'Authorization': 'bearer ' + localStorage.getItem('token')
    }
  }
}
