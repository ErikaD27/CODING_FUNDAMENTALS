//encriptar cualqueir cadena de taxto reemplazando las letras como se indica
//a:ai
//e::enter
//i: imes
//o: ober
//u: ufat

/*var cadena = prompt("Por favor ingrese la cadena de caracteres").toLowerCase()
var keep = Array.from(cadena)
for (let j= 0; j<keep.length; j++) {
    if (keep[j]=="a"){
        keep[j]="ai"
     
    }else if (keep[j]=="e"){
        keep[j]="enter"
     
    }else if (keep[j]=="i"){
        keep[j]="imes"
     
    }else if (keep[j]=="o"){
        keep[j]="ober"
     
    }else if (keep[j]=="u"){
        
        keep[j]="ufat"
     
    }
    else{
        console.log("no hay a")
    }
    
}   cadena = keep.join("")
console.log(keep)
console.log(cadena)
*/
/*
cadena = cadena.replace("a","ai")
cadena = cadena.replace("e","enter")
cadena = cadena.replace("i","imes")
cadena = cadena.replace("o","ober")
cadena = cadena.replace("u","ufat")*/




//imprimir los numero primos menores de 1000

/*for(var i=2; i<1000;i++){
    var primo = true
    for(var j=2; j<i;j++){
        if((i%j===0)){
            primo=false
        }
    }
    if (primo) console.log(i)
}*/
  

//indicar la cantidad de numeros primos que existan entre dos numero indicados por el usuario
 n1=parseFloat(prompt("ingrese el número máximo"))
 n2=parseFloat(prompt("ingrese el número mínimo"))
if(n2<2)n2=2

 if(n1>n2){
    for(var i=n2; i<=n1;i++){
        var primo = true
        for(var j=n2; j<i;j++){
            if((i%j===0)){
                primo=false
            }
        }
        if (primo) console.log(`el numero ${i} es un número primo entre ${n2} y ${n1}`)
    }    
 }else{
     console.log("por favor el primer número debe ser el valor máximo y el siguiente el valor mínimo")
 }