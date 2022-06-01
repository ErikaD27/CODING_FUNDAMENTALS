

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
  console.log('%c Jugador 1 es tu turno\n','background: #222; color: #F33C7C')
  do{
    for (let i = 0; i < OpcAvat2.length; i++) {
      console.log (i+1+". "+OpcAvat2[i])
    }
    Animalito = parseInt( prompt('\n7Por favor selecione una de las anteriores opciones, presiona 7 si deseas salir'))
    var Elec = (OpcAvat2[Animalito-1])
    if((Animalito>0)&&(Animalito<=OpcAvat2.length)){
      console.log("\nTu eleccion fue:",Elec)
        if(Elec=="Tigre"){
            console.log('%c\n El tigre: Es un animal solitario y territorial que generalmente suele habitar bosques densos\n, pero tambien areas abiertas, como sabanas. Normalmente, el tigre caza animales de tamaño medio o grande\n, generalmente ungulados. En las seis diferentes subespecies existentes del tigre,\n hay una variacion muy significativa del tamano.\n','background: #222; color: #BA4B0C')
        }else if(Elec=="Boa"){
          console.log('%c \nLa Boa:  Aparte de ser una de las más temidas es una de las más reconocidas alrededor del mundo\n Es una serpiente extremadamente grande, tiende a medir de 5 a 6 metros pero hay casos excepcionales donde alcanza hasta 10 metros de longitud.\n Ademas de esto son voluminosas,  gruesas y son consideradas unas de las más fuertes y resistentes\n','background: #222; color: #17D525')
        }else if(Elec=="Elefante"){
          console.log('%c \nEl Elefante: Es el mamifero mas grande de la tierra puede pesar hasta ocho toneladas y mide 3 metros de alto por 7 de largo. Con grandes orejas en forma de abanico y una larga trompa.\n Adicionalmente usa sus colmillos para defenserse\n','background: #222; color: #615D60')
        }else if(Elec=="Cocodrilo"){
          console.log('%c \nEl Cocodrilo:Es un buen nadador, puede moverse en tierra andando separando el cuerpo de tierra o arrastrando el cuerpo, mientras que las especies de menor tamaño incluso pueden galopar \n Su piel es gruesa y esta cubierta de escamas que no se superponen. Tienen dientes conicos, tipo estaca, y una poderosa mordida\n','background: #222; color: #1ED31B')
        }else if(Elec=="Aguila"){
          console.log('%c \nEl Aguila: Como todas las aves de presa,  poseen un pico grande, poderoso y puntiagudo para desprender la carne de su presa. Cuentan también con tarsos y garras poderosas. Llama\n tambien la atencion la fuerza de las aguilas, que les posibilita alzar en vuelo a presas mucho más pesadas que ellas.\n','background: #222; color: #EEF33C')
        }else if(Elec=="perro"){
          console.log('%c \n El Perro(Doberman): Sus patas son largas y rectas, con una fuerza importante, y que además aportan agilidad y ligereza al animal. En su conjunto, el doberman es muy elegante tanto en sus movimientos\n como cuando esta en reposo. Ademas, su expresion es la de encontrarse siempre alerta y preparado para la accion.\n','background: #222; color: #3CF3F0')
        }
      OpcAvat2=OpcAvat2.filter(function(f) { return f !== Elec})
      console.log("La nueva lista es:", OpcAvat2,"\n")
      console.log("\nla fuerza de: ", Elec, "es: ", FuerzaPe[Elec],"\n")
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
    console.log("\n\nDecidiste saLir: Hasta pronto\n")
    break;
    }
  }while((!((Animalito>0)&&(Animalito<=OpcAvat2.length)))&&(!(Animalito==undefined)));
  // console.log(Puntaje_Jugador1)
  console.log('%c  Jugador 2 es tu turno\n','background: #222; color: #D517CC')
  do{
    for (let i = 0; i < OpcAvat2.length; i++) {
      console.log (i+1+". "+OpcAvat2[i])
    }
    Animalito = parseInt( prompt("\nPor favor selecione una de las anteriores opciones, presiona 7 si deseas salir\n"))
    var Elec = (OpcAvat2[Animalito-1])
    
    if((Animalito>0)&&(Animalito<=OpcAvat2.length)){
      console.log("\nTu eleccion fue:",Elec)
      if(Elec=="Tigre"){
        console.log('%c\n El tigre: Es un animal solitario y territorial que generalmente suele habitar bosques densos\n, pero tambien areas abiertas, como sabanas. Normalmente, el tigre caza animales de tamaño medio o grande\n, generalmente ungulados. En las seis diferentes subespecies existentes del tigre,\n hay una variacion muy significativa del tamano.\n','background: #222; color: #BA4B0C')
      }else if(Elec=="Boa"){
        console.log('%c \nLa Boa:  Aparte de ser una de las más temidas es una de las más reconocidas alrededor del mundo\n Es una serpiente extremadamente grande, tiende a medir de 5 a 6 metros pero hay casos excepcionales donde alcanza hasta 10 metros de longitud.\n Ademas de esto son voluminosas,  gruesas y son consideradas unas de las más fuertes y resistentes\n','background: #222; color: #17D525')
      }else if(Elec=="Elefante"){
        console.log('%c \nEl Elefante: Es el mamifero mas grande de la tierra puede pesar hasta ocho toneladas y mide 3 metros de alto por 7 de largo. Con grandes orejas en forma de abanico y una larga trompa.\n Adicionalmente usa sus colmillos para defenserse\n','background: #222; color: #615D60')
      }else if(Elec=="Cocodrilo"){
        console.log('%c \nEl Cocodrilo:Es un buen nadador, puede moverse en tierra andando separando el cuerpo de tierra o arrastrando el cuerpo, mientras que las especies de menor tamaño incluso pueden galopar \n Su piel es gruesa y esta cubierta de escamas que no se superponen. Tienen dientes conicos, tipo estaca, y una poderosa mordida\n','background: #222; color: #1ED31B')
      }else if(Elec=="Aguila"){
        console.log('%c \nEl Aguila: Como todas las aves de presa,  poseen un pico grande, poderoso y puntiagudo para desprender la carne de su presa. Cuentan también con tarsos y garras poderosas. Llama\n tambien la atencion la fuerza de las aguilas, que les posibilita alzar en vuelo a presas mucho más pesadas que ellas.\n','background: #222; color: #EEF33C')
      }else if(Elec=="perro"){
        console.log('%c \n El Perro(Doberman): Sus patas son largas y rectas, con una fuerza importante, y que además aportan agilidad y ligereza al animal. En su conjunto, el doberman es muy elegante tanto en sus movimientos\n como cuando esta en reposo. Ademas, su expresion es la de encontrarse siempre alerta y preparado para la accion.\n','background: #222; color: #3CF3F0')
      }
      OpcAvat2=OpcAvat2.filter(function(f) { return f !== Elec})
      console.log("La nueva lista es:", OpcAvat2,"\n")
      console.log("\nla fuerza de: ", Elec, "es: ", FuerzaPe[Elec],"\n")
      var Contrincante = ContAle(7,0)
      console.log("\nTu contrincante jugador 2 ahora es: "+Contrincante)
      if(Contrincantes<FuerzaPe[Elec]){
        Puntaje_Jugador2 +=1
      }else if(Contrincantes<FuerzaPe[Elec]){
        Puntaje_Jugador2 = Puntaje_Jugador2
      }else{
        Puntaje_Jugador2 -=1
      }
      break;
    }else if (Animalito==7){
      console.log("\nDecidiste saLir: Hasta pronto\n")
    break;
    }
  }while((!((Animalito>0)&&(Animalito<=OpcAvat2.length)))&&(!(Animalito==undefined)))
  contador+=1;
  // console.log(Puntaje_Jugador2)
}


if(Puntaje_Jugador1>Puntaje_Jugador2){
  console.log('%c \n El ganador es el Jugador 1 \n ', 'background: #222; color: #D5E81A')
}else if(Puntaje_Jugador1<Puntaje_Jugador2){
  console.log('%c \n El ganador es el Jugador 2 \n', 'background: #222; color: #1AE8C5')
}else{
  console.log('%c Estan empatados ', 'background: #222; color: #E8651A')
}
