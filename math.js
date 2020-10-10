//aqui veremos lo q java script puede hacer con math
//Math.abs(numero)-->> este te debuelve el abosoluto si le pasas -20.60 te devolvera 20
//Math.ceil(numero)-->> este te redondea un numero hacia abajo 4.7 =4
//Math.floor(numero)-->> este redondea un numero hacia ariba  3.2 = 4
//Math.roud(numero)--> este redondea el numero al que esta mas cerca 3.2 = 3 || 4.7=5
//Math.pow(numero,potencia)-->> este elveva un numero a la potencia indecada
//Math.random()-->> genera un numero "aleatorio"
//Math.sign(numero)-->> devolvera el signo del numero 
let nombres=["juna","pedro","arien","pancho"];
for (let name of nombres){//el of te debuelve lo que contiene le array como en este caso los nombres
    console.log(name);
}
for (let index in nombres){//el in te debuelve la pocision q empiesa de 0 hasta terminar
    console.log(index);     
}