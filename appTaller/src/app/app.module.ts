import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { PhoneService } from './phone.service';
import { BoletaService } from './boleta.service';
import { LoginService } from './login.service';
import { UserService } from './user.service';
import { RepuestoService } from './repuesto.service';
import { ClienteService } from './cliente.service';
import { OrdenService } from './orden.service';

import { PhoneDetailComponent } from './phone-detail/phone-detail.component';
import { PhonesCrudComponent } from './phones-crud/phones-crud.component';
import { OrdenesCrudComponent } from './ordenes-crud/ordenes-crud.component';
import { OrdenDetailComponent } from './orden-detail/orden-detail.component';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component';
import { UsersCrudComponent } from './users-crud/users-crud.component';
import { RepuestosCrudComponent } from './repuestos-crud/repuestos-crud.component';
import { ClientesCrudComponent } from './clientes-crud/clientes-crud.component';
import { BoletasCrudComponent } from './boletas-crud/boletas-crud.component';
import { BoletaDetailComponent } from './boleta-detail/boleta-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PhonesCrudComponent,
    HomeComponent,
    PhoneDetailComponent,
    LoginComponent,
    UsersCrudComponent,
    RepuestosCrudComponent,
    ClientesCrudComponent,
    OrdenesCrudComponent,
    OrdenDetailComponent,
    BoletasCrudComponent,
    BoletaDetailComponent
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
    ClienteService,
    UserService,
    BoletaService,
    OrdenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
