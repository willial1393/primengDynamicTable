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
          {label: 'Registrar'}
        ]
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
