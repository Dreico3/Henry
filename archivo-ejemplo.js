let nombre = "Erick";
console.log(nombre);
console.log(nombre.length)

//cadena.toUpperCase() --->> convierte un string en todos en mayusculas solo las tranforma
//si queires guardar lo que convierte lo guardas enuna variable aparte
console.log(nombre.toUpperCase());
//cadena.toLowerCase()--->> pero este lo conviente en minusculas
console.log(nombre.toLowerCase());
//cadena.indexOf(string)---->> este te pide un string y debuelve de una cadena una letra en espesifico 
//tambien puedes buscar una letra este te debolvera la pocision de la letra
console.log(nombre.indexOf("i"));
//cadena.substring(int1,int2)--->> lo que hace es buscar la pocicion int1 de la cadena ue enviaste y mostrartla hast int2
// 
console.log(nombre.substring(1,3)); //->lo que muestra es ri de erick

//cadena.slice(int,int)--> es lo mismo q substring pero este recive en int2 un numero negativo es como decir
//cadena.slice(quiero que muestres desde la posicion int1, pero no quiero q me muestres los -int2 ultimos)
console.log(nombre.slice(0,-2));    //el resultado es eri

//cadena.trim()--->> ESTA ELIMINA ESPACIOS AL PRINCIPIO Y AL FINAL DE CADA CADENA Q MANDES
//ejem:
let cadena="    hola como estas     ";
console.log(cadena.trim());//-->> este habra eliminado los espacios del pricipio solo mostrara "hola como estas"

//cadena.startsWhith(string)--->> lo que hace es que analiza si la cadena empieza por amyusculas
//si es asi este te retornara true y si no false se puede colocar dos lugares donde puedes averiguar
//cadena.startsWhith(0,9)       si alguna falla te retornara false

//candena.endsWhith(string)--->> es los mismo pero esta averigua si son minusculas y si termian en una determinada letra
let ca="aqui llegando";
console.log(ca.endsWith('o'));        //esto tendria q mostrar true por q termina la cadena temrina en o
//tambien evalua palabras entreras
console.log(ca.endsWith("llegando")); //la ultima palabra es legadno tendria  q mostrar true

//cadena.includes(string)--->> esta busca una letra en una cadena si esta la letra muestra true y false si no esta
console.log(ca.includes("k"));//esto muestra false porq  no se encuenta la 'k' en la cadena enviada
console.log(ca.includes("o",5));//tambien podemos decirle de que posicion empezar a buscar muestra true
//cadena.repeat(int);-->> esta ahce q la cadena se repita el nuero de veses que quieras
console.log(nombre.repeat(3));//el nombre se repite 3 veses ErickErickErick
//template string es como escribir con el printf de java
//como habras notado esto si que ayuda mucho XD
console.log(`${cadena.trim()} ${nombre} que haces aqui? ${nombre} reponde muy fuerte: ${ca.toUpperCase()}`)