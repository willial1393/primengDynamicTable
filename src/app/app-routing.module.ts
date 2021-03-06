import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AuthGuardService} from './services/auth-guard.service';
import {LoginComponent} from './components/login/login.component';
import {UsuariosComponent} from './components/usuarios/usuarios.component';
// AuthGuardService
// https://medium.com/@ryanchenkie_40935/angular-authentication-using-route-guards-bf7a4ca13ae3
const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuardService]},
  {path: 'usuarios', component: UsuariosComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ]
})
export class AppRoutingModule {
}
