import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhonesCrudComponent } from './phones-crud/phones-crud.component';
import { UsersCrudComponent } from './users-crud/users-crud.component';
import { RepuestosCrudComponent } from './repuestos-crud/repuestos-crud.component';
import { ClientesCrudComponent } from './clientes-crud/clientes-crud.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PhoneDetailComponent } from './phone-detail/phone-detail.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'phones', component: PhonesCrudComponent },
  { path: 'users', component: UsersCrudComponent },
  { path: 'repuestos', component: RepuestosCrudComponent },
  { path: 'clientes', component: ClientesCrudComponent },
  { path: 'phones/:id', component: PhoneDetailComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
