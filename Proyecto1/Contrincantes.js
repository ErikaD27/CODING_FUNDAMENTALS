function ContAle(max, min) {
  let contrincantes = ["gallina","zorro", "murcielago","hipopotamo", "leon", "Zebra", "rinoceronte","Buho"]
  let ContRandom = contrincantes[min+Math.ceil(Math.random()*(max-min))]
  
  return ContRandom
}

function ContAle7(Aleatorio){
  var Aleatorio = ContAle(7,0)
  return Aleatorio
}

function FuerCont(Cont){
  let FuerCont = {
    "gallina":2,
    "zorro":7,
    "murcielago":3,
    "hipopotamo":9,
    "leon":8,
    "Zebra":10,
    "rinoceronte":6,
    "Buho":8}
    var ConAle = ContAle7()
    return FuerCont[ConAle]
}
// console.log(ContAle7())
// console.log(FuerCont())
export {
  ContAle, 
  ContAle7,
  FuerCont
} 