import {Usuario} from './usuario';
import {Empresa} from './empresa';

export class Cliente {
  id: number;
  id_usuario: number;
  id_empresa: number;
  cedula: string;
  telefono: string;
  direccion: string;
  imagen: string;
  tipo: string;
  correo_opcional: string;
  usuario: Usuario;
  empresa: Empresa;

  constructor() {
    this.usuario = new Usuario();
  }
}
