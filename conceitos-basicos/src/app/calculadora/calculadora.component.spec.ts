import { CalculadoraComponent } from './calculadora.component';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;

  beforeEach(() => {
    component = new CalculadoraComponent();
  });

  it('deve inicializar valores como null', () => {
    expect(component.valor1).toBeNull();
    expect(component.valor2).toBeNull();
    expect(component.resultado).toBeNull();
  });

  it('deve somar dois valores corretamente', () => {
    component.valor1 = 5;
    component.valor2 = 3;
    component.cacularSoma();
    expect(component.resultado).toBe(8);
  });

  it('deve retornar null se algum valor for null', () => {
    component.valor1 = null;
    component.valor2 = 2;
    component.cacularSoma();
    expect(component.resultado).toBeNull();

    component.valor1 = 2;
    component.valor2 = null;
    component.cacularSoma();
    expect(component.resultado).toBeNull();
  });

  it('deve retornar null se algum valor não for número', () => {
    // @ts-expect-error Testando valor inválido
    component.valor1 = 'a';
    component.valor2 = 2;
    component.cacularSoma();
    expect(component.resultado).toBeNull();
  });
});
