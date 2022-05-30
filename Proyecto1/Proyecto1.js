import { ContAle,ContAle7 ,FuerCont} from "./Contrincantes.js";
import { Avatar, OpcAvat, FuerzaP } from "./Avatar.js";

console.log("Este es un juego de roll en el que seleccionaras el animal de preferencia con el fin de atacar al oponente el cual se presentará aleatoriamente. Si tu animal gana la batalla aumentarás puntos, luego si por el contrario pierdes con el animal escogido se te restará puntaje\n");

let positionPlayer1 = -1
let positionPlayer2 = -1
// let Personajes = OpcAvat()

// Personajes = Personajes.filter(function(f) { return f !== PersComb})

console.log("Jugador 1 es tu turno")
let PersComb = Avatar(OpcAvat())


let Contrincante = ContAle7()
console.log("Ahora jugador 1 tu contrincante es:\n", Contrincante)

// var Personajes = Personajes.filter(function(f) { return f !== PersComb})
console.log(" Es momento de que el Jugador 2 seleccione el personaje que va a combatir\n")
console.log("Las opciones de personajes ahora son:\n",Avatar(PersComb))


// console.log("Ahora jugador 2 tu contrincante es:\n", Contrincante) 



// for(let j=0;j<=3;j++) {
 
// }

