import {ServicioTecnico} from './servicio-tecnico';
import {Empleado} from './empleado';

export class Diagnostico {
  id: number;
  id_servicio_tecnico: number;
  id_empleado: number;
  descripcion: string;
  imagen: string;
  servicio_tecnico: ServicioTecnico;
  empleado: Empleado;
}
