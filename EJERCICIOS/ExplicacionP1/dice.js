
/**
 * Funcion que retorna un valor aleatorio como si se tratase
 * de un dado de n caras
 * 
 * @param  {int} max el numero entero maximo que admite el dado
 * @param  {int} min el numero minimo entero que admite el dado
 * @returns {int} un entero random entre el rango especiiicado
 */
 export function throwDice(max, min) {
  const numeroRandom = min+Math.ceil(Math.random()*(max-min))
  return numeroRandom
}

export function throwDice6(){
  return throwDice(6,1)
}

export function throwDice12(){
  return throwDice(12,1)
}

/* export {
  throwDice, 
  throwDice6, 
  throwDice12
} */

/* {
  throwDice: throwDice,
  throwDice6: throwDice6,
  throwDice12: throwDice12
} */