import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule, CommonModule],
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent {

  valor1: number | null = null;
  valor2: number | null = null;
  resultado: number | null = null;

  cacularSoma() {
    if (typeof this.valor1 === 'number' && typeof this.valor2 === 'number') {
      this.resultado = this.valor1 + this.valor2;
    } else {
      this.resultado = null;
    }
  }


}
