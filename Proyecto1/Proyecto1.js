

import { ContAle,FuerCont} from "./Contrincantes.js";
import { OpcAvat} from "./Avatar.js";
var FuerzaPe = {
  "Tigre":10,
   "Boa":8,
   "Elefante":8,
   "Cocodrilo":7,
   "Aguila":7, 
   "perro":3
  }

console.log("Este es un juego de roll en el que seleccionaras el animal de preferencia con el fin de atacar al oponente el cual se presentará aleatoriamente. Si tu animal gana la batalla aumentarás puntos, luego si por el contrario pierdes con el animal escogido se te restará puntaje\n")


var OpcAvat2 = OpcAvat()
let Animalito = 0
let contador = 0

var Contrincantes = FuerCont(Contrincante)
let Puntaje_Jugador1 = 0
let Puntaje_Jugador2 = 0


while (contador>=0 && contador<=2 && Animalito!=7){
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
      console.log("la fuerza de: ", Elec, "es: ", FuerzaPe[Elec])
      var Contrincante = ContAle(7,0)
      console.log("Tu contrincante jugador 1 ahora es: "+Contrincante)
      if(Contrincantes<FuerzaPe[Elec]){
        Puntaje_Jugador1 +=1
      }else if(Contrincantes<FuerzaPe[Elec]){
        Puntaje_Jugador1=Puntaje_Jugador1
      }else{
        Puntaje_Jugador1 -=1
      }
      break;
    }else if (Animalito==7){
    console.log("Decidiste saLir: Hasta pronto")
    break;
    }
  }while((!((Animalito>0)&&(Animalito<=OpcAvat2.length)))&&(!(Animalito==undefined)));
  // console.log(Puntaje_Jugador1)
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
      console.log("la fuerza de: ", Elec, "es: ", FuerzaPe[Elec])
      var Contrincante = ContAle(7,0)
      console.log("Tu contrincante jugador 2 ahora es: "+Contrincante)
      if(Contrincantes<FuerzaPe[Elec]){
        Puntaje_Jugador2 +=1
      }else if(Contrincantes<FuerzaPe[Elec]){
        Puntaje_Jugador2 = Puntaje_Jugador2
      }else{
        Puntaje_Jugador2 -=1
      }
      break;
    }else if (Animalito==7){
      console.log("Decidiste saLir: Hasta pronto")
    break;
    }
  }while((!((Animalito>0)&&(Animalito<=OpcAvat2.length)))&&(!(Animalito==undefined)))
  contador+=1;
  // console.log(Puntaje_Jugador2)
}


if(Puntaje_Jugador1>Puntaje_Jugador2){
  alert("El ganador es el Jugador 1")
}else if(Puntaje_Jugador1<Puntaje_Jugador2){
  alert("El ganador es el Jugador 2")
}else{
  alert("Estan empatados")
}
// if (Puntaje_Jugador1<0){
//   Puntaje_Jugador1 =0
// }
// if (Puntaje_Jugador2<0){
//   Puntaje_Jugador2 = 0}
// console.log("El puntaje final del jugador 1", Puntaje_Jugador1)
// console.log("El puntaje final del jugador 2", Puntaje_Jugador2)


