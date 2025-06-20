import { Component, OnInit } from '@angular/core';
//import { ListaService, Item } from '../services/lista.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-alista',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './agregar-alista.component.html',
  styleUrls: ['./agregar-alista.component.css']
})
export class AgregarAListaComponent /*implements OnInit*/ {
  /*nuevoNombre: string = '';
  lista: Item[] = [];

  constructor(private listaService: ListaService) {}

  ngOnInit() {
    this.cargarLista();
  }

  cargarLista() {
    this.listaService.getItems().subscribe({
      next: items => this.lista = items,
      error: err => console.error('Error cargando items', err)
    });
  }

  agregar() {
    if (!this.nuevoNombre.trim()) return;

    const item: Item = { nombre: this.nuevoNombre.trim() };
    this.listaService.addItem(item).subscribe({
      next: nuevo => {
        this.lista.push(nuevo);
        this.nuevoNombre = '';
      },
      error: err => console.error('Error agregando item', err)
    });
  }*/
}