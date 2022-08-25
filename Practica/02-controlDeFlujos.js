 //CONDICIONALES 

/*
const name = 'Andres'
const apellido = 'Ruiz'
let edad = prompt('Ingresa tu edad')

if (edad >= 18){
    console.log('si tiene mas de 18!!')
    alert('puedes consumir alcohol')
}else{
    console.log('Es un pibito menor de 18')
    alert('ES MENOOOOOOR, NO PUEDE TOMAAAAAR')
}
*/

/*
let presupuesto = prompt('Ingrese el presupuesto que tiene para su auto en dolares:')

if(presupuesto < 1000){
    alert('Con eso no te compras ni un fitito, rata')

} else if(presupuesto < 5000){
    alert('te alcanza para un fiat UNO')

}else if(presupuesto < 20000){
    alert('Aca ya hablamos de un mercedes')

} else{
    alert('EHHHH para millonariooo, SOS PROGRAMADOR??')
}
*/

/*
let numero = prompt('Ingrese un numero mayor que 5')
let esMayor5 = (numero > 5)

if(esMayor5){
    alert('Es boolean true')
    console.log('Usted eligio ' + numero)
}else {
    alert('Es boolean false')
    console.log('Usted eligio ' + numero)
}
*/

//OPERADPRES LOGICOS

/*
let edad = prompt('Ingrese la edad para saber si es mayor: ')

if(edad >= 18){
    alert('Puede consumir varias cosas')
    console.log('Solo alcohol')
} else{
    alert('No puede consumir por que es menor')
    console.log('Solo puede tomar jugo')
}
*/

/*
const num1 = parseInt(prompt('Ingrese el primer nuemro: '))
const num2 = prompt('Ingrse el segundo numero')
console.log('Num1 = ' + num1 + ' ' + typeof num1)
console.log('Num2 = ' +num2 + ' ' + typeof num2)

if(num1 !== num2){
    alert('los numeros son distintos')
}else{
    alert('los numeros son iguales')
}
*/

const usuario = prompt('Introduzca un usuario: ')
const password = prompt('Introdusca una contraseña: ')


if(usuario == 'admin' && password == '1234'){
    alert('Bienvenido ' + usuario)

}else { 
    alert('Usuario o contraseña incorrecto')
}

if(usuario == '' || password == ''){
    alert('Falto ingresar datos!')
}

