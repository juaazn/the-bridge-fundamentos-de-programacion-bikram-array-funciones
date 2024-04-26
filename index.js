// Pair Programming 

const arrayVacio = []

const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const arrayNumerosPares =[0, 2, 4, 6, 8]

const arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']]

// Funciones

function suma (num1, num2) {
    return num1 + num2
}

function potenciacion (a, b) {
    return Math.pow(a, b)
}

const palabras = []
function separarPalabras (string) {
    return string.split(' ')
}


function repetirString(string, numero) {
    if (numero <= 0) {
      return ''
    } else {
      return string.repeat(numero);
    }
  }

function esPrimo(numero) {
    if (numero <= 1) {
        return false
    }

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}


// Mezclando arrays y funciones

const numeros =  [1, 2, 4, 5, 6, 4, 3, 6, 8]

function ordenarArray (numeros) {
    return numeros.sort((a, b) => a - b)
}

const numPar = [2, 5, 10, 24, 11]

function obtenerPares (numPar) {
    return numPar.filter(numero => numero % 2 === 0)
}

function pintarArray (arrai){
    return `'[${arrai.join(', ')}]'`
}

function arrayMapi(arreglo, funcion) {
    const mapeado = []

    for (let i = 0; i < arreglo.length; i++) {
      mapeado.push(funcion(arreglo[i], i))
    }
    return mapeado;
  }
  
function duplicar(elemento) {
    return elemento * 2;
}

function eliminarDuplicados(arr) {
    return arr.filter((element, index) => arr.indexOf(element) === index);
}