import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UsuarioService} from '../../services/usuario.service';
import {Usuario} from '../../models/usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuario: Usuario;

  constructor(private router: Router,
              private usuarioService: UsuarioService) {
  }

  ngOnInit() {
  }
}
