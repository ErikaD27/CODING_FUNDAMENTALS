//encriptar cualqueir cadena de taxto reemplazando las letras como se indica
//a:ai
//e::enter
//i: imes
//o: ober
//u: ufat

var cadena = prompt("Por favor ingrese la cadena de caracteres").toLowerCase()
var keep = Array.from(cadena)
for (let j= 0; j<keep.length; j++) {
    if (keep[j]=="a"){
        keep[j]="ai"
     
    }if (keep[j]=="e"){
        keep[j]="enter"
     
    }if (keep[j]=="i"){
        keep[j]="imes"
     
    }
    if (keep[j]=="o"){
        keep[j]="ober"
     
    }if (keep[j]=="u"){
        
        keep[j]="ufat"
     
    }
    else{
        console.log("no hay a")
    }
    
}   cadena = keep.join("")
console.log(keep)
console.log(cadena)

/*
cadena = cadena.replace("a","ai")
cadena = cadena.replace("e","enter")
cadena = cadena.replace("i","imes")
cadena = cadena.replace("o","ober")
cadena = cadena.replace("u","ufat")*/

alert(cadena)



//imprimir los numero primos menores de 1000

//indicar la cantidad de numeros primos que existan entre dos numero indicados por el usuario
