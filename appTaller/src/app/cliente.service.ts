import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Cliente } from './cliente';
import { Constants } from './shared/constants';

@Injectable()
export class ClienteService {

  constructor(private http: Http) { }

  read(query = '') {
    return this.http.get(Constants.build_url('clientes'), {
      params: { q: query },
      headers: new Headers(this.headers())
    });
  }

  insert(data: Cliente) {
    return this.http.post(Constants.build_url('clientes'), data, {
      headers: new Headers(this.headers())
    });
  }

  update(data: Cliente) {
    return this.http.put(Constants.build_url('clientes/' + data.id), data, {
      headers: new Headers(this.headers())
    });
  }

  delete(id) {
    return this.http.delete(Constants.build_url('clientes/' + id), {
      headers: new Headers(this.headers())
    });
  }

  findById(id) {
    return this.http.get(Constants.build_url('clientes/' + id), {
      headers: new Headers(this.headers())
    });
  }

  headers() {
    return {
        'Authorization': 'bearer ' + localStorage.getItem('token')
    }
  }
}
