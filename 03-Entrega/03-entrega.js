alert('Bienvenidos al bar CODERHOUSE')

let CANTIADAD_PERSONAS =prompt('Cuantas persona van a ingresar? ')

alert('Vamos a necesitar nombre y edad de cada una de las personas!!!')

let edades = new []
let personas= new []
let personaSi = new []
let personaNo = new []
let banderaArray = new []
let contadorSi = 0
let contadorNo = 0

for (let i = 1; i <= CANTIADAD_PERSONAS; i++) {
    personas[i] = prompt('Ingrese el nombre de la persona ' + i + ' :').toUpperCase()
    edades[i] = parseInt(prompt('Ingrese la edad de ' + personas[i] + ': '))
    
    if (edades[i] < 18) {
        alert(personas[i] + ' NO PUEDE ENTRAR POR SER MENOR DE EDAD')
        personaNo[i] = personas[i]
        banderaArray[i] = false
        contadorNo = contadorNo + 1
    } else{
        alert('BIENVENIDO A CODERHOUSE ' + personas[i])
        personaSi[i] = personas[i]
        banderaArray[i] = true
        contadorSi = contadorSi + 1
    }
}

console.log('Personas que SI pueden entrar: ')
for (let i = 1; i <= CANTIADAD_PERSONAS; i++) {
    if (banderaArray[i] == true) {
        console.log(personaSi[i] + ' ' + edades[i] + ' años')
    }
    
}

console.log('Personas que NO pueden entrar: ')
for (let i = 1; i <= CANTIADAD_PERSONAS; i++) {
    if (banderaArray[i] == false) {
        console.log(personaNo[i] + ' ' + edades[i] + ' años')
    }
    
}

if (contadorSi == 0) {
   
    alert('NO entro nadie por ser todos menores... te vas a fundir así!!')
} else{
    alert('DESPUES DE QUE ENTRARON TODOS LOS MAYORES!!!! \n Y YA ESTAN ES SU MESA')
   
    let opcionCarta = prompt('Les traigo la carta?  \n - SI \n - NO \n Ingrese una opcion: ').toUpperCase()

    if (opcionCarta == 'SI') {
    
      let VALORopcion = ''   

    do {    

        let VALOR = parseInt(
            prompt('Elija una opcion con numeros: \n 1 - Whisky  \n 2 - Cerveza \n 3 - Margarita \n 4 - Agua \n 5 - Jugo \n  Ingrese una opcion: ')) 
    
    switch(VALOR){
        case 1:
            alert('Eligio Whisky')
            break
        case 2:
            alert('Eligio Cerveza')
            break
        case 3:
            alert('Eligio Margarita')
            break
        case 4:
            alert('Eligio Agua')
            break
        case 5:
            alert('Eligio Jugo') 
            break
            default:
                alert('Eligio cualquier cosa..... LEA BIEEEEN')
        }

    VALORopcion = prompt('Desea pedir otra cosa?  \n SI \n NO  \n  Ingrese una opcion: ').toUpperCase()    
    

    } while ( VALORopcion!= 'NO' );

    } else {
        alert('Bueno!! Vayan se, porque acá hay que consumir!!! GUARDIAAAA')
    }

    alert('VUELVAN PRONTOOOOOOO!!!!')
}
