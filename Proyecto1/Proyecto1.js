

// // import { ContAle,ContAle7 ,FuerCont} from "./Contrincantes.js";
import { OpcAvat} from "./Avatar.js";

console.log("Este es un juego de roll en el que seleccionaras el animal de preferencia con el fin de atacar al oponente el cual se presentará aleatoriamente. Si tu animal gana la batalla aumentarás puntos, luego si por el contrario pierdes con el animal escogido se te restará puntaje\n")


var OpcAvat2 = OpcAvat()
let Animalito = 0
let contador = 0


while (contador>=0 && contador<=2){
  console.log("Jugador 1 es tu turno")
  do{
    for (let i = 0; i < OpcAvat2.length; i++) {
      console.log (i+1+". "+OpcAvat2[i])
    }
    Animalito = parseInt( prompt("Por favor selecione una de las anteriores opciones, presiona 7 si deseas salir"))
    var Elec = (OpcAvat2[Animalito-1])
    if((Animalito>0)&&(Animalito<=OpcAvat2.length)){
      console.log("Tu eleccion fue:",Elec)
      OpcAvat2=OpcAvat2.filter(function(f) { return f !== Elec})
      console.log("La nueva lista es:", OpcAvat2)
      break;
    }else if (Animalito==7){
    console.log("Decidiste saLir: Hasta pronto")
    break;
    }
  }while((!((Animalito>0)&&(Animalito<=OpcAvat2.length)))&&(!(Animalito==undefined)));
  
  console.log("Jugador 2 es tu turno")
  do{
    for (let i = 0; i < OpcAvat2.length; i++) {
      console.log (i+1+". "+OpcAvat2[i])
    }
    Animalito = parseInt( prompt("Por favor selecione una de las anteriores opciones, presiona 7 si deseas salir"))
    var Elec = (OpcAvat2[Animalito-1])
    if((Animalito>0)&&(Animalito<=OpcAvat2.length)){
      console.log("Tu eleccion fue:",Elec)
      OpcAvat2=OpcAvat2.filter(function(f) { return f !== Elec})
      console.log("La nueva lista es:", OpcAvat2)
      break;
    }else if (Animalito==7){
    console.log("Decidiste saLir: Hasta pronto")
    break;
    }
  }while((!((Animalito>0)&&(Animalito<=OpcAvat2.length)))&&(!(Animalito==undefined)))
  contador+=1;
}


// let positionPlayer1 = -1
// let positionPlayer2 = -1

