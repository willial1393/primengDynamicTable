import {Component, OnInit} from '@angular/core';
import {Usuario} from '../../models/usuario';
import {UsuarioService} from '../../services/usuario.service';

@Component({
  selector: 'app-repuestos',
  templateUrl: './repuestos.component.html',
  styleUrls: ['./repuestos.component.css']
})
export class RepuestosComponent implements OnInit {

  usuarios: Usuario[] = [];
  cols: any[];

  constructor(private usuarioService: UsuarioService) {
  }

  ngOnInit() {
    this.cols = [
      {field: 'correo_electronico', header: 'Correo', type: 'text', required: true},
      {field: 'estado', header: 'Estado', type: 'text', required: true}
    ];
    this.usuarioService.getAll().subscribe(value => {
      if (value['result']) {
        this.usuarios = value['response'];
      }
    });
  }

  store($event: any) {
    console.log($event);
  }

  delete($event: any) {
    console.log($event);
  }
}
