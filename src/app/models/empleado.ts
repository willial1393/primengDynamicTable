import {Usuario} from './usuario';

export class Empleado {
  id: number;
  id_usuario: number;
  cedula: string;
  telefono: string;
  direccion: string;
  usuario: Usuario;

  constructor() {
    this.usuario = new Usuario();
  }
}
