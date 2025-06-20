import { Component } from '@angular/core';
import { ItemComponent } from './item/item.component';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [ItemComponent],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

}
