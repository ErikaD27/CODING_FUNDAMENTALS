import casilleros from "./casilleros.js";
import { throwDice, throwDice12,throwDice6 } from "./dice.js";


let positionPlayer1 = -1
let positionPlayer2 = -1
for (let index = 0; index < 2; index++) {
    try {
        console.log("%cLanzar el dado player 1", "color:red")
        alert("presiona")
        const diceValue1 = throwDice6()
        console.log("Sacaste", diceValue1)
        positionPlayer1+=diceValue1
        console.log(casilleros[positionPlayer1].message)
    
        console.log("%cLanzar el dado player 2", "color:blue")
        alert("presiona")
        const diceValue2 = throwDice6()
        console.log("Sacaste", diceValue2)
        positionPlayer2+=diceValue2
        console.log(casilleros[positionPlayer2].message)
        
    } catch (error) {
        console.log("Upps sucedio algo inesperado, saliendo")
    }
}