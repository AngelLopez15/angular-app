import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  // No es necesario poner la palabra const o let para declarar una variable
  // si es necesario tiparlo
  resultado:number = 10;

  // No es necesario poner la palabra function para declarar una funcion
  // pero si se deben de tipar los parametros
  sumar (a:number, b:number) {
    this.resultado = a + b;
  }
}
