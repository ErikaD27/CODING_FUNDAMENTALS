console.log("Este es un juego de roll en el que seleccionaras el animal de preferencia con el fin de atacar al oponente dado cada nivel. Si tu animal gana la batalla lo podrás conservar para que pueda ser convocado en otras batallas (si así lo requieres)");

console.log("El contrincante número 1 es: El Hipopotamo.Los hipopotamos estan dispuestos a lo que sea por defender su territorio, quién crees que podría enfrentarse a uno de ellos y ganar?")
var Personaje_l1 = 0;
let equipo =[]
do{ 
  Personaje_l1 = parseInt(prompt("Ingrese el numero segun el personaje de preferencia\n 1. Leon \n 2.Serpiente cascabel\n 3.Elefante \n 4.Cocodrilo\n  5.Salir\n"))
  switch(Personaje_l1){
    case 1:
      console.log("Elegiste Leon");
      break;
    case 2:
      console.log("Elegiste Serpiente cascabel");
      break;
    case 3:
      console.log("Elegiste Elefante y eso implica que tu personaje le haya ganado al Hipopotamo");
      equipo.push("Elefante");
      console.log("Ahora tu equipo esta conformado por: "+equipo)
      break;
    case 4:
      console.log("Elegiste Cocodrilo");
      console.log("Debido a la territorialidad del hipopótamo y que por lo general esta agrupado peste resulta ser una gran amenaza para el Cocodrilol y por ende estaría en desventaja");
      break;
    case 5:
      console.log("Elegiste Salir.Hasta Luego");
      break;
    default:
      break;
  }
}while(!(Personaje_l1>=1 && Personaje_l1<=5));
