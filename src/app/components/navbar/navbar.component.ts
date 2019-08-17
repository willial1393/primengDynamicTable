import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {AppGlobal} from '../../utilities/app-global';
import {Router} from '@angular/router';
import {AppComponent} from '../../app.component';
import {Usuario} from '../../models/usuario';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items: MenuItem[];
  usuario: Usuario;

  constructor(private router: Router,
              private app: AppComponent) {
    this.usuario = AppGlobal.getUserLogin();
    this.items = [
      {
        label: 'Inicio',
        routerLink: 'home'
      },
      {separator: true},
      {
        label: 'Usuarios',
        routerLink: 'usuarios'
      },
      {
        label: this.usuario.notificaciones,
        icon: 'pi pi-fw pi-bell'
      }
    ];
  }

  ngOnInit() {
  }

  logout() {
    AppGlobal.setUserLogin(null);
    this.router.navigate(['/']);
    this.app.showToast('Sesión cerrada', '', 'success');
  }

}
