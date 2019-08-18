import {Component, OnInit} from '@angular/core';
import {Usuario} from '../../models/usuario';
import {UsuarioService} from '../../services/usuario.service';
import {TipousuarioService} from '../../services/tipousuario.service';
import {DynamicTableComponent} from '../dynamic-table/dynamic-table.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];
  cols: any[];

  constructor(private usuarioService: UsuarioService,
              private tipousuarioService: TipousuarioService) {
  }

  ngOnInit() {
    this.usuarioService.getAll().subscribe(value => {
      this.usuarios = [];
      Array.prototype.push.apply(this.usuarios, value);
    });

    this.tipousuarioService.getAll().subscribe(value => {
        const opt: any[] = [];
        Array.prototype.push.apply(opt, value);
        this.cols = [
          {field: 'correo_electronico', header: 'Correo', type: DynamicTableComponent.TYPE.text, required: true},
          {field: 'estado', header: 'Estado', type: DynamicTableComponent.TYPE.text, required: true},
          {field: 'id_usuario', header: 'ID', type: DynamicTableComponent.TYPE.number, required: true},
          {field: 'notificaciones', header: 'Notificaciones', type: DynamicTableComponent.TYPE.currency, required: true},
          {
            field: 'tipo_usuario',
            header: 'Tipo usuario',
            type: DynamicTableComponent.TYPE.select,
            options: opt,
            label: 'nombre',
            required: true
          },
          {
            field: 'tipos_usuarios',
            header: 'Tipos usuarios',
            type: DynamicTableComponent.TYPE.multiselect,
            options: opt,
            label: 'nombre',
            required: true
          }
        ];
      }
    );
  }

  store(usuario: Usuario) {
    const user: Usuario = this.usuarios.find(x => x.id_usuario === usuario.id_usuario);
    if (user) {
      Object.assign(user, usuario);
    } else {
      this.usuarios.push(usuario);
    }
  }

  delete(usuario: Usuario) {
    this.usuarios = this.usuarios.filter(x => x.id_usuario !== usuario.id_usuario);
  }

}
