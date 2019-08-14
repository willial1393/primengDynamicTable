import {Repuesto} from './repuesto';
import {Empleado} from './empleado';

export class KardexRepuestos {
  id: number;
  id_repuesto: number;
  id_empleado: number;
  fecha: string;
  cantidad: string;
  precio: number;
  tipo: string;
  total: string;
  repuesto: Repuesto;
  empleado: Empleado;

  constructor(empleado: Empleado, repuesto: Repuesto) {
    this.empleado = empleado;
    this.repuesto = repuesto;
    this.id_repuesto = repuesto.id;
    this.id_empleado = empleado.id;
    this.fecha = new Date().toISOString();
    this.total = repuesto.cantidad;
    this.precio = repuesto.precio;
  }
}
