alert("Escriba un programa para calcular la factura de electricidad ( permitiendo que el usuario pueda ingresar su consumo) y calcular el precio con los siguientes criterios")
Consumo = parseInt(prompt("Por favor ingrese su consumo en unidades"))
alert(type.Consumo)
if(Consumo<=100){
    
    console.log("No se genera cargo por consumir "+Consumo+" Unidades")
}
else if(Consumo>100 && Consumo<=200){
    Factura_100 = (Consumo-100)*5
    console.log("El valor a pagar en su factura por el consumo de  "+Consumo+" Unidades es de: Rs"+Factura_100)
}
else if(Consumo>200 ){
    Factura_200 = 500+((Consumo-200)*10)
    console.log("El valor a pagar en su factura por el consumo de  "+Consumo+" Unidades es de: Rs"+Factura_200)
}