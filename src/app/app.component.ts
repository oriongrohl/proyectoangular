import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BotonesComponent } from './botones/botones.component';
import { ListaComponent } from './lista/lista.component';
import { FormularioComponent } from './formulario/formulario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BotonesComponent, ListaComponent, FormularioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto';
}
