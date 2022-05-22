/*mostrar el segundo numero mayor de una lista*/
var lista = [7,2,9,7,8,8,10,10];
var lista2 = (lista.sort((a,b)=>a-b)).reverse()
console.log(lista2)
for (let i=1; i<lista.length; i++) {
  if(lista2[0]>lista2[i]) {
    console.log(lista2[i]);
    break;
    }


}


