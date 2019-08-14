import {Empleado} from './empleado';
import {Cliente} from './cliente';
import {EstadoEquipo} from './estado-equipo';
import {EquipoServicioTecnico} from './equipo-servicio-tecnico';

export class ServicioTecnico {
  id: number;
  id_empleado: number;
  id_cliente: number;
  id_estado_equipo: number;
  id_equipo_servicio_tecnico: number;
  fecha_recibido: string;
  fecha_entrega: string;
  descripcion_problema: string;
  costo_mano_obra: number;
  costo_repuestos: number;
  iva: number;
  estado: string;
  empleado: Empleado;
  cliente: Cliente;
  estado_equipo: EstadoEquipo;
  equipo_servicio_tecnico: EquipoServicioTecnico;

  // varibles funcionales
  subtotal: number;
  total: number;

  constructor() {
    this.empleado = new Empleado();
    this.cliente = new Cliente();
    this.estado_equipo = new EstadoEquipo();
    this.equipo_servicio_tecnico = new EquipoServicioTecnico();
  }

  setEmpleado(empleado: Empleado) {
    this.empleado = empleado;
    this.id_empleado = empleado.id;
  }

  setCliente(cliente: Cliente) {
    this.cliente = cliente;
    this.id_cliente = cliente.id;
  }

  setEstadoEquipo(estadoEquipo: EstadoEquipo) {
    this.estado_equipo = estadoEquipo;
    this.id_estado_equipo = estadoEquipo.id;
  }

  setEquipoServicioTecnico(equipoServicioTecnico: EquipoServicioTecnico) {
    this.equipo_servicio_tecnico = equipoServicioTecnico;
    this.id_equipo_servicio_tecnico = equipoServicioTecnico.id;
  }
}
