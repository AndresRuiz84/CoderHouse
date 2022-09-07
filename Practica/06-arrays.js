

let arrayNombres = ['Juan', 'Andres' , 'Pepe']
let arrayNum = [1,3,5,7,17,19]


console.log(arrayNombres)
console.log(arrayNum)

/* METODOS PARA ARRAY */
/*AGREGAR*/
arrayNombres.push('Alan')
arrayNombres.unshift('COCO')

console.log(arrayNombres)

/* QUITAR */
arrayNombres.pop()

/*Elimina indice = 0 y cantiadad = 2 */
arrayNombres.splice(0,2)

/* CONCATENAR */
let arrayCambinados = arrayNombres.concat(arrayNum)
console.log(arrayCambinados)

console.log(arrayCambinados.slice(0, 5))
/* CONCATENAR POR POSICION */
arrayCambinados = arrayNombres.join(' -- ')
console.log(arrayCambinados)

/*parte de un array...  1er valor es el indice y el 2º donde finaliza */
let arrayParte =  arrayCambinados.slice(0, 3)
console.log(arrayParte)

console.log(arrayNombres)

for(let producto of arrayNombres){
console.log(producto)
}
/*indice de argumento por parametro cono el indexOf */


/*let arrayPaises = ['Argentina', 'Mexico', 'Peru', 'Colombia']

function eliminarElemento(nombre){
let index = arrayPaises.indexOf(nombre)
if (index != -1) {
    arrayPaises.splice(index, 1)
    } else {
        alert('NOmbre no encontrado')
    }
}
    let paisAeliminar = prompt('ingrese pais: ')
    eliminarElemento(paisAeliminar)

    console.log(arrayPaises)
*/

    let calificaciones = [10, 9, 8 , 7, 6, 9, 10, 1 , 2, 5]

   /* function ordenar (arr){

        return arr.sort((a,b) => a-b)
    }*/
    function aprobados (arr, cali){
        let respuesta = arr.filter(nota => nota > 6)
        return respuesta
    }
    
    console.log(calificaciones)
    console.log(aprobados(calificaciones))

    