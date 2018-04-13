import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  login(email, password) {
    return this.http.post('http://localhost:8000/api/login',
      {email: email, password: password});
  }

  registro(name, email, password) {
    return this.http.post('http://localhost:8000/registro',
      {name: name,  email: email, password: password});
  }
}
