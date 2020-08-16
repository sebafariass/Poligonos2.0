import Poligono from './Poligono'

export default class Rectangulo extends Poligono {
  constructor() {
    super()
  }
  area() {
    return this.base * this.altura
  }
  perimetro() {
    return this.base + this.altura * 2
  }
}