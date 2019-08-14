import {TipoUsuario} from './tipo-usuario';

export class Usuario {
  id_usuario: number;
  id_tipo_usuario: number;
  correo_electronico: string;
  nombre: string;
  clave: string;
  estado: string;
  tipo: string;
  notificaciones: string;
  tipo_usuario: TipoUsuario;
}
