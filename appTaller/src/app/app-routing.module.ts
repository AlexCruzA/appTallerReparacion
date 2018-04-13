import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhonesCrudComponent } from './phones-crud/phones-crud.component';
import { UsersCrudComponent } from './users-crud/users-crud.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PhoneDetailComponent } from './phone-detail/phone-detail.component';
//import { RegistroComponent } from './registro/registro.component';


const routes: Routes = [
  //{ path: 'registro', component: RegistroComponent },
  { path: '', component: LoginComponent },
  { path: 'phones', component: PhonesCrudComponent },
  { path: 'users', component: UsersCrudComponent },
  { path: 'phones/:id', component: PhoneDetailComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
