//switch
let expr = "papa"
switch (expr) {
    case "naranjas":
        console.log("son naranjas");
        break;
    case "lulo":
        console.log("son naranjas");
        break;
    default:
        console.log("no es una fruta");
        break;
}


//while

let contador = 0;
while (contador < 10) {
    console.log(contador);
    contador++;
}

//do-while
let counter = 0;
do {
    console.log(counter);
    counter++;
} while (counter < 10);

//for
let frutas = ['naranja', 'pera', 'chontaduro', 'limon', 'papaya'];
for (let i = 0; i < frutas.length; i++) {
  //  console.log(frutas[i]);
}

//for-in

const listaDeCompras = {
    yuca: 5,
    arracacha: 23,
    papa: 34,
    arroz: 43

}

for (lista1 in listaDeCompras) {
   // console.log(lista1);
}

for (lista1 in listaDeCompras) {
    console.log(`${lista1}: ${listaDeCompras[lista1]} `);
}



//for-of
listaDeCompras1=["papa","yuca","arracacha","manzana"]
for (lista2 of listaDeCompras1) {
    console.log(lista2);
}