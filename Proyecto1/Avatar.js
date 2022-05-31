function OpcAvat(){
  var OpcAvatar = ["Tigre", "Boa","Elefante","Cocodrilo","Aguila", "perro"]
  return OpcAvatar
}
function elec(OpcAvat2){
  var OpcAvat2 =OpcAvat()
  for (let i = 0; i < OpcAvat2.length; i++) {
    console.log (i+1+". "+OpcAvat2[i])
  }
  var Animalito = parseInt( prompt("Por favor selecione una de las anteriores opciones, presiona 7 si deseas salir"))
  return  Animalito
}

var Animal =elec()

function seleccione(elec){
  var OpcAvat10 = OpcAvat()
 
  var Eleccion =  (OpcAvat10[elec-1])
  return Eleccion
}



function Avatar(OpcAvat2,Animal){
  var OpcAvat2 = OpcAvat()
 do{
    
    var Elec = seleccione( Animal)
    
    if((Animal>0)&&(Animal<=OpcAvat2.length)){
      console.log("Tu eleccion fue:", Elec)
      var ValorEliminar = OpcAvat2[Animal]
      OpcAvat2=OpcAvat2.filter(function(f) { return f !== Elec})
      console.log("La nueva lista es:", OpcAvat2)
      return OpcAvat2
      break;
    }    
      else if (Animal==7){
          console.log("Decidiste saLir: Hasta pronto")
          break;
      }
  }while((!((Animal>0)&&(Animal<=OpcAvat1.length)))&&(!(Animal==undefined)));
}
  

// function Animal2(){
//   var Animalitos= OpcAvat();
//   var Actuales=Avatar();
//   console.log(Animalitos)
// }
function FuerzaP(){
  var FuerzaPe = {
    "Tigre":10,
     "Boa":8,
     "Elefante":8,
     "Cocodrilo":7,
     "Aguila":7, 
     "perro":3
    }
  var ConP = seleccione(Animal)
  console.log("la fuerza de: ", ConP, "es: ",FuerzaPe[ConP] )
  return FuerzaPe[ConP]
}


console.log(Avatar(OpcAvat(),Animal))
console.log(FuerzaP())
export{
  OpcAvat,
  Avatar,
  seleccione,
  FuerzaP,
  elec

}
// console.log(Avatar(OpcAvat()))
