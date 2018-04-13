import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Phone } from './phone';
import { Constants } from './shared/constants';

@Injectable()
export class PhoneService {

  constructor(private http: Http) { }

  read(query = '') {
    return this.http.get(Constants.build_url('phones'), {
      params: { q: query },
      headers: new Headers(this.headers())
    });
  }

  insert(data: Phone) {
    return this.http.post(Constants.build_url('phones'), data, {
      headers: new Headers(this.headers())
    });
  }

  update(data: Phone) {
    return this.http.put(Constants.build_url('phones/' + data.id), data, {
      headers: new Headers(this.headers())
    });
  }

  delete(id) {
    return this.http.delete(Constants.build_url('phones/' + id), {
      headers: new Headers(this.headers())
    });
  }

  findById(id) {
    return this.http.get(Constants.build_url('phones/' + id), {
      headers: new Headers(this.headers())
    });
  }

  headers() {
    return {
        'Authorization': 'bearer ' + localStorage.getItem('token')
    }
  }
}
