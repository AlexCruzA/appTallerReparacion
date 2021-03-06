import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { User } from './user';
import { Constants } from './shared/constants';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  read(query = '') {
    return this.http.get(Constants.build_url('users'), {
      params: { q: query },
      headers: new Headers(this.headers())
    });
  }
  
  insert(data: User) {
    return this.http.post(Constants.build_url('users'), data, {
      headers: new Headers(this.headers())
    });
  }

  update(data: User) {
    return this.http.put(Constants.build_url('users/' + data.id), data, {
      headers: new Headers(this.headers())
    });
  }

  delete(id) {
    return this.http.delete(Constants.build_url('users/' + id), {
      headers: new Headers(this.headers())
    });
  }

  findById(id) {
    return this.http.get(Constants.build_url('users/' + id), {
      headers: new Headers(this.headers())
    });
  }

  headers() {
    return {
        'Authorization': 'bearer ' + localStorage.getItem('token')
    }
  }
}
