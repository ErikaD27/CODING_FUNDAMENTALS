/*miFuncion("hola","mundo","el diablo es puerco","argumento extra")
function miFuncion(param1, param2,param3){
    console.log(arguments)
}

miFuncion("hola","mundo","el diablo es puerco","argumento extra")



const miFuncion2 = function(param1, param2, param3){
    console.log(param1, param2, param3)
}
miFuncion2("hola","mundo","el diablo es puerco","argumento extra")



const miFuncion3 = (param1, param2,param3)=>{
    console.log(param1, param2, param3)
}

miFuncion3("hola","mundo","el diablo es puerco","argumento extra")*/


//Crear una calculadora con las 4 operaciones aritméticas basicas
//y que solo admita dos numeros a la vez

const operacion = prompt("Ingrese la operacion\n1.adicion\n2.sustraccion\n3.multiplicación\n4.división")

const primerNumero = Number(prompt("Ingrese el primer numero"))

const segundoNumero = Number(prompt("Ingrese el segundo numero"))

switch(operacion){
    case "1":
    case "adicion":
        console.log(adicion(primerNumero, segundoNumero))
        break;
    case "2":
        console.log(sustraccion(primerNumero, segundoNumero))
        break;
    case "3:
        console.log(multiplicacion(primerNumero, segundoNumero))
        break;
    case "4":
        console.log(division(primerNumero, segundoNumero))
        break;
    default:
        console.log("opcion inválida")
        break;
}
function adicion(sumando1, sumando2){
    return sumando1+sumando2
}
adicion(3,4)

function sustraccon(minuendo, sustraendo){
    return minuendo-sustraendo
}

function multiplicacion(factor1, factor2){
    return factor1*factor2
}
 function division(dividendo, divisor){
     return dividendo/divisor
}