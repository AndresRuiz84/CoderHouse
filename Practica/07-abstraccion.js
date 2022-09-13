
/* function mayorQueNum(num){

    return (numAComparar) => numAComparar > num

}

let mayorQue10 = mayorQueNum(10)

console.log(mayorQue10)

console.log(mayorQue10(20))
console.log(mayorQue10(5))

console.log('===========================')

let mayorQue =mayorQueNum(20)

console.log(mayorQue(5))
console.log(mayorQue(22))

*/
/* EJ CON ARRAY

const numeros = [1,23,3,4]

function porCadaUno(array, functionAejecutar){
for (let elemento of array){
    functionAejecutar(elemento)
}
}

function imprimir(valor){
    alert(valor)
    console.log(valor)
}
porCadaUno(numeros, imprimir)

*/



const arrayPaises = ['Argentina', 'Chile', 'Brazil', 'Mexico']

/*
//P. Imperativa
let existeArgentina = false

for (let pais of arrayPaises){
    if (pais == 'Argentina'){
        existeArgentina = true
    }
}
console.log(existeArgentina)

//P. Declarativa
existeArgentina = arrayPaises.some((elemento) => elemento =='Argentina')

console.log(existeArgentina)

*/

//FIND
/*
let elementoEncontrado = arrayPaises.find((elemnto) => elemnto == 'Argentina')

console.log(elementoEncontrado)
*/

//FOR EACH

//arrayPaises.forEach((elemento) => alert(elemento))

/*
let elementoExiste = arrayPaises.some((elemento) => elemento == 'Argentina' )

console.log(elementoExiste)
*/


let arrayProductos = [
    {nombre: 'PC', precio: 100 , cantidad: 3},
    {nombre: 'PC52', precio: 100 , cantidad: 3}
]

let elementosEncontrados = arrayProductos.filter((elementos) => elementos.precio >= 100 )

console.log(elementosEncontrados)

