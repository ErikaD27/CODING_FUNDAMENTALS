function OpcAvat(){
  var OpcAvatar = ["Tigre", "Boa","Elefante","Cocodrilo","Aguila", "perro"]
  return OpcAvatar
}

function selecione(){
  var Anima = parseInt( prompt("Por favor selecione una de las anteriores opciones, presiona 7 si deseas salir"))

  return Anima
}


function Avatar(OpcAvat1){
  do{
    for (let i = 0; i < OpcAvat1.length; i++) {
      console.log(i+1+". "+OpcAvat1[i])
    }
    var Animal = selecione()
    var Eleccion =  (OpcAvat1[Animal-1]);
    if((Animal>0)&&(Animal<=OpcAvat1.length)){
        console.log("Tu eleccion fue:", Eleccion)
        var ValorEliminar = OpcAvat1[Animal]
        var OpcAvat2=OpcAvat1.filter(function(f) { return f !== Eleccion})
        console.log("La nueva lista es:", OpcAvat2)
        return OpcAvat2
        break;
      }   
    else if (Animal==7){
        console.log("Decidiste saLir: Hasta pronto")
        break;
    }
  }while((!((Animal>0)&&(Animal<=OpcAvat1.length)))||(!(Animal==undefined)));
  
  
}  

// function Animal2(){
//   var Animalitos= OpcAvat();
//   var Actuales=Avatar();
//   console.log(Animalitos)
// }

function FuerzaP(){
  var Fuerza = {
    "Tigre":10,
     "Boa":8,
     "Elefante":8,
     "Cocodrilo":7,
     "Aguila":7, 
     "perro":3
    }
  var Per = selecione()
  var valor = Fuerza[Per]
  console.log("la fuerza de: ",valor, "es: ", )
  return Fuerza[Per]
}

console.log(Avatar(OpcAvat()))
console.log(FuerzaP())
export{
  OpcAvat,
  Avatar,

}
// console.log(Avatar(OpcAvat()))
