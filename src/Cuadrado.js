import Poligono from './Poligono'

export default class Cuadrado extends Poligono {
  constructor(){
    super()
  }
  area() {
    return Math.pow(this.lado, 2)
  }
  perimetro(){
    return this.lado * 4
  }
}