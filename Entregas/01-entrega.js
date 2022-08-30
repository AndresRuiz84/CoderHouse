alert('Bienvenidos al bar CODERHOUSE')

let CANTIADAD_PERSONAS =prompt('Cuantas persona van a ingresar? ')

alert('Vamos a necesitar nombre y edad de cada una de las personas!!!')

let edades = new Array()
let personas= new Array()


for (let i = 1; i <= CANTIADAD_PERSONAS; i++) {
    personas[i] = prompt('Ingrese el nombre de la persona ' + i + ' :').toUpperCase()
    edades[i] = parseInt(prompt('Ingrese la edad de ' + personas[i] + ': '))
    
    if (edades[i] < 18) {
        alert(personas[i] + ' NO PUEDE ENTRAR POR SER MENOR DE EDAD')
        
    } else{
        alert('BIENVENIDO A CODERHOUSE ' + personas[i])
    }
}

for (let i = 1; i <= CANTIADAD_PERSONAS; i++) {
   console.log(personas[i] + ' ' + edades[i])
    
}