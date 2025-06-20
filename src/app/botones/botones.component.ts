import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botones',
  standalone: true,
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.scss']
})
export class BotonesComponent {
  /*clientes: any[] = [];

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.obtenerClientes();
  }

  obtenerClientes(): void {
    this.crudService.getCliente().subscribe(data => {
      this.clientes = data;
    });
  }

  crearCliente(): void {
    const nuevo = {
      name: 'Nuevo Cliente',
      email: 'nuevo@email.com'
    };

    this.crudService.crearCliente(nuevo).subscribe(() => {
      this.obtenerClientes();
    });
  }

  actualizarCliente(id: number): void {
    const actualizados = {
      name: 'Cliente Actualizado',
      email: 'nuevo@email.com'
    };

    this.crudService.actualizarCliente(id, actualizados).subscribe(() => {
      this.obtenerClientes();
    });
  }

  borrarCliente(id: number): void {
    this.crudService.borrarCliente(id).subscribe(() => {
      this.obtenerClientes();
    });
  }*/
}
