import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PhonesCrudComponent } from './phones-crud/phones-crud.component';
import { HomeComponent } from './home/home.component';

import { PhoneService } from './phone.service';
import { LoginService } from './login.service';
import { UserService } from './user.service';
import { RepuestoService } from './repuesto.service';


import { PhoneDetailComponent } from './phone-detail/phone-detail.component';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component';
import { UsersCrudComponent } from './users-crud/users-crud.component';
import { RepuestosCrudComponent } from './repuestos-crud/repuestos-crud.component';

@NgModule({
  declarations: [
    AppComponent,
    PhonesCrudComponent,
    HomeComponent,
    PhoneDetailComponent,
    LoginComponent,
    UsersCrudComponent,
    RepuestosCrudComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    PhoneService,
    LoginService,
    RepuestoService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
