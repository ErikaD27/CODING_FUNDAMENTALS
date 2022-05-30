function ContAle(max, min) {
  let contrincantes = ["gallina","zorro", "murcielago","hipopotamo", "leon", "Zebra", "rinoceronte","Buho"]
  let ContRandom = contrincantes[min+Math.ceil(Math.random()*(max-min))]
  
  return ContRandom
}

function ContAle7(){
  return ContAle(7,0)
}

function FuerCont(){
  let FuerCont = {
    "gallina":2,
    "zorro":2,
    "murcielago":2,
    "hipopotamo":4,
    "leon":8,
    "Zebra":10,
    "rinoceronte":6,
    "Buho":8}
    var ConAle = ContAle7()
    console.log("la fuerza de: ", ConAle, "es: ",FuerCont[ConAle] )
    return FuerCont[ConAle]
}
console.log(ContAle7())
console.log(FuerCont())
export {
  ContAle, 
  ContAle7,
  FuerCont
} 