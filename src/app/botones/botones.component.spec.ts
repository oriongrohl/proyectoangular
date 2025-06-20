import { Component, OnInit } from '@angular/core';
import { CrudService } from '../servicios/crud.service'; // ajusta la ruta si hace falta

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.scss']
})
export class BotonesComponent implements OnInit {
  datos: any[] = [];

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.obtenerDatos(); // Al cargar el componente, llama al servicio
  }

  obtenerDatos(): void {
    this.crudService.getAll().subscribe(response => {
      this.datos = response;
    });
  }

  crear(): void {
    const nuevo = { nombre: 'Ejemplo', edad: 30 }; // cambia según tu API
    this.crudService.create(nuevo).subscribe(() => {
      this.obtenerDatos(); // refresca la lista
    });
  }

  eliminar(id: number): void {
    this.crudService.delete(id).subscribe(() => {
      this.obtenerDatos(); // refresca la lista
    });
  }

  actualizar(id: number): void {
    const datosActualizados = { nombre: 'Actualizado', edad: 31 };
    this.crudService.update(id, datosActualizados).subscribe(() => {
      this.obtenerDatos(); // refresca
    });
  }
}

