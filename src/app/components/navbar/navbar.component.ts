import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {AppGlobal} from '../../utilities/app-global';
import {Router} from '@angular/router';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items: MenuItem[];
  username: string;

  constructor(private router: Router,
              private app: AppComponent) {
    this.items = [
      {
        label: 'Inicio',
        routerLink: 'home'
      },
      {separator: true},
      {
        label: 'Repuestos',
        items: [
          {
            label: 'Registro Repuestos',
            routerLink: 'repuestos'
          },
          {label: 'Kardex Repuestos'}
        ]
      },
      {
        label: 'Servicios',
        items: [
          {label: 'Registrar Equipo'},
          {label: 'Servicios Pendientes'},
          {label: 'Consultar Servicios'}
        ]
      },
      {
        label: 'Clientes',
        items: [
          {label: 'Registro Clientes'},
          {label: 'Registro Empresas'}
        ]
      },
      {
        label: 'Empleados',
        items: [
          {label: 'Registro Empleados'},
          {label: 'Roles y Permisos'}
        ]
      },
      {
        label: '0',
        icon: 'pi pi-fw pi-bell'
      }
    ];
  }

  ngOnInit() {
    this.username = AppGlobal.getUserLogin().nombre;
  }

  logout() {
    AppGlobal.setUserLogin(null);
    this.router.navigate(['/']);
    this.app.showToast('Sesión cerrada', '', 'success');
  }

}
