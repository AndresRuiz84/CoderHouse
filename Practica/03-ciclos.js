
 // FOR
/*
const NumCalificaciones = prompt('Ingrese la cantidad de calificaciones: ')
parseFloat(NumCalificaciones)
let sumatoria = 0
let promedio = 0 


for(let i = 1; i <= NumCalificaciones; i++){
const calificacion = prompt('Ingrese la calificacion ' + i)
sumatoria = sumatoria + parseFloat(calificacion)

}
console.log('La sumatoria es: ' + sumatoria)
console.log('El promedio es: ' + sumatoria/NumCalificaciones)

*/

/*
// WHILE

console.log('---------------------------------------------')

let VALOR = prompt('Ingrese un dato (ESC para salir)')


while(VALOR.toUpperCase() != 'ESC'){
   
    console.log('El usuario ingreso: ' + VALOR)
    VALOR = prompt('Ingrese un dato (ESC para salir)')
    
}

while(VALOR != 'ESC' || 'esc'){
    
    console.log('El usuario ingreso: ' + VALOR)
    VALOR = prompt('Ingrese un dato (ESC para salir)')
   
}

*/

// DO WHILE

/*
let nombre = ''

do {
    nombre = prompt('Ingrese el nombre: ')
    if(nombre != '')
    console.log('El nombre ingresado es: ' + nombre)
} while ( nombre != '');

*/

// SWITCH

alert()

let VALOR = parseInt(
        prompt('Elija una opcion: \n 1 - Papas \n 2 - Lomos \n 3 - Salir \n Ingrese una opcion: ')) 

switch(VALOR){
    case 1:
        alert('Eligio papas')
        break
    case 2:
        alert('Eligio lomos')
        break
    case 3:
        alert('Eligio salir')
        break
        default:
            alert('cualquier cosa')
    }