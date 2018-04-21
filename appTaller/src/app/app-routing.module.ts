import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PhonesCrudComponent } from './phones-crud/phones-crud.component';
import { PhoneDetailComponent } from './phone-detail/phone-detail.component';
import { UsersCrudComponent } from './users-crud/users-crud.component';
import { RepuestosCrudComponent } from './repuestos-crud/repuestos-crud.component';
import { ClientesCrudComponent } from './clientes-crud/clientes-crud.component';

import { BoletaDetailComponent } from './boleta-detail/boleta-detail.component';
import { BoletasCrudComponent } from './boletas-crud/boletas-crud.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersCrudComponent },
  { path: 'repuestos', component: RepuestosCrudComponent },
  { path: 'clientes', component: ClientesCrudComponent },
  { path: 'phones', component: PhonesCrudComponent },
  { path: 'boletas', component: BoletasCrudComponent },
  { path: 'boletas/:id', component: BoletaDetailComponent },
  { path: 'phones/:id', component: PhoneDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
