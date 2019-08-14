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
    this.usuarioService.login(this.email, this.password).subscribe(value => {
      if (value['result']) {
        const usuario: Usuario = value['response'];
        if (usuario) {
          AppGlobal.setUserLogin(usuario);
          this.router.navigate(['home']);
          this.app.showToast(`¡¡¡Bienvenido ${usuario.nombre}!!!`, '', 'success');
        } else {
          this.app.showMessage('Usuario o contraseña incorrecta', '', 'warn');
        }
      } else {
        this.app.showErrorService(value);
      }
    }, error => {
      this.app.showErrorCatch(error);
    });
  }

}
