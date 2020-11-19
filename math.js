//aqui veremos lo q java script puede hacer con math
//Math.abs(numero)-->> este te debuelve el abosoluto si le pasas -20.60 te devolvera 20
//Math.ceil(numero)-->> este te redondea un numero hacia abajo 4.7 =4
//Math.floor(numero)-->> este redondea un numero hacia ariba  3.2 = 4
//Math.roud(numero)--> este redondea el numero al que esta mas cerca 3.2 = 3 || 4.7=5
//Math.pow(numero,potencia)-->> este elveva un numero a la potencia indecada
//Math.random()-->> genera un numero "aleatorio"
//Math.sign(numero)-->> devolvera el signo del numero 
/* let nombres=["juna","pedro","arien","pancho"];
for (let name of nombres){//el of te debuelve lo que contiene le array como en este caso los nombres
    console.log(name);
}
for (let index in nombres){//el in te debuelve la pocision q empiesa de 0 hasta terminar
    console.log(index);     
} */

const nombre=document.querySelector('.nombre');
const email=document.querySelector('.correo');
const titulo=document.querySelector('.titulo');
const noticias=document.querySelectorAll('.noticia');
titulo.textContent='La caida de la bolsa';
titulo.style.color='white';
titulo.style.background='black';

//nota como es un nodeList no podemos tratarlo comosi fuera un array asi q no podemos usar las funciones q nos permieten los arrays, asi q lo convertiremos de nodelist a una list
const listaNoticias=Array.from(document.querySelectorAll('.noticia'));
/* noticias[0].textContent='todoa la intro de esta noticia no es suficiente para exprezar la preocupacion que se tiene sobre el ambiente politico q se vive en el pais';
noticias[1].textContent='pero devemos seguir unidos apezar de que el gobierno engaño a mas de la mitad de la poblacion.'
noticias[2].textContent='en resumen deveriamos llenarnos de orgullo o venguarza?? eso lo decidira el tiempo.'
noticias[1].style.color='red'; */
listaNoticias.map(p=>p.style.color='red');
listaNoticias.map(p=>p.style.fontSize='20px');
listaNoticias.map(p=>p.style.background='black');
const nom=document.getElementById('in');
nom.getAttribute('title');

nom.setAttribute('value','jonas')
console.log(nom.getAttribute('value'));
nom.setAttribute('value','ostia perro..!!')
console.log(nom.getAttribute('value'));
nombre.textContent='Juan eraldo perra';

email.textContent='Juanito@gmainl.oms';

