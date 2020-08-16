//   importar datos desde .js a index principal   \\



import Circulo from './Circulo'
import Cuadrado from './Cuadrado.js'
import Triangulo from './Triangulo'
import Rectangulo from './Rectangulo'
import Octagono from './Octagono'
import Decagono from './Decagono'


//  termino de importar  datos desde js a index principal \\

document.getElementsByTagName('select')[0].addEventListener('change', e => {
  console.clear()
  let poligono_value = e.target.value
  let poligono_result = ""

  switch (poligono_value) {
 case "circulo":
  poligono_result = new Circulo
   valor__area__perimetro()
   break;
   case "cuadrado":
   poligono_result = new Cuadrado
    valor__area__perimetro()
    break;
    case "triangulo":
     poligono_result = new Triangulo
      valor__area__perimetro()
      break;
      case "rectangulo":
       poligono_result = new Rectangulo
        valor__area__perimetro()
        break;
        case "octagono":
         poligono_result = new Octagono
          valor__area__perimetro()
          break;
          case "decagono":
           poligono_result = new Decagono
            valor__area__perimetro()
            break;
            default:
              console.log("Selecciona un polígono")
  }
  function valor__area__perimetro() {
    console.log(`Perimetro del ${poligono_value} ===> ${poligono_result.perimetro()}`)
    console.log(`Area del ${poligono_value} ===> ${poligono_result.area()}`)
}
 
})