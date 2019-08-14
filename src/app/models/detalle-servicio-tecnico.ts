import {ServicioTecnico} from './servicio-tecnico';
import {Repuesto} from './repuesto';

export class DetalleServicioTecnico {
  id: number;
  id_servicio_tecnico: number;
  id_repuesto: number;
  precio: number;
  cantidad: string;
  servicio_tecnico: ServicioTecnico;
  repuesto: Repuesto;

  constructor() {
    this.servicio_tecnico = new ServicioTecnico();
    this.repuesto = new Repuesto();
  }

}
