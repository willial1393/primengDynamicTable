import {Component, OnInit} from '@angular/core';
import {UsuarioService} from '../../services/usuario.service';
import {AppComponent} from '../../app.component';
import {Usuario} from '../../models/usuario';
import {Router} from '@angular/router';
import {AppGlobal} from '../../utilities/app-global';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarios: Usuario[];
  password: string;
  email: string;

  constructor(private usuarioService: UsuarioService,
              private app: AppComponent,
              private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    this.app.showLoading(true);
    this.usuarioService.getAll().subscribe(value => {
      this.usuarios = [];
      Array.prototype.push.apply(this.usuarios, value);
      const usuario: Usuario = this.usuarios.find(x =>
        x.correo_electronico === this.email &&
        x.clave === this.password
      );
      if (usuario) {
        AppGlobal.setUserLogin(usuario);
        this.router.navigate(['home']);
        this.app.showToast(`¡¡¡Bienvenido ${usuario.nombre}!!!`, '', 'success');
      } else {
        this.app.showMessage('Usuario o contraseña incorrecta', '', 'warn');
      }
    });
  }

}
