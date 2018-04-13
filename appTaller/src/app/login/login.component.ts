import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  name: string;
  email: string;
  password: string;
  constructor(private service: LoginService) { }

  ngOnInit() {
  }

  login() {
    this.service.login(this.email, this.password).subscribe(res => {
      let data = res.json();
      localStorage.setItem('token', data.token);
    });
  }

  registro() {
    this.service.registro(this.name, this.email, this.password).subscribe(res => {
      let data = res.json();
      localStorage.setItem('token', data.token);
    });
  }
}
