import Poligono from './Poligono'

export default class Octagono extends Poligono {
  constructor(){
    super()
  }
  perimetro(){
    return this.lado *8
  }
  area(){
    return this.perimetro() * this.apotema / 2
  }
}
