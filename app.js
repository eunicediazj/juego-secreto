let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
/* Se genera la variable titulo con la instrucción let y se manda llamar 
el documento html con document.querySelector, h1 es el encabezado dentro
del documento html*/
/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del número secreto';
        SE QUITARON POR LA FUNCIÓN DE asignarTextoElemento!!!
let parrafo = document.querySelector('p');
parrafo.innerHTML= 'Indica un numero del 1 al 10';*/

/*La siguiente funcion se usará para no tener que asignar una función a 
cada sección del código, es una forma de optimizar las otras funciones*/
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

/* Para declarar una funcion se utiliza la palabra function y debe llevar 
el mismo nombre que la función que se colocó en el HTML*/
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    /*console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario); 
    console.log(numeroDeUsuario === numeroSecreto);*/
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez': 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja () {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    // Preguntar si ya se sortearon todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    } else {
    //Si el numeroGenerado está incluido en la lista hacemos una cosa, sino otra
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero Secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}


function reiniciarJuego () {
    // limpiar caja
    limpiarCaja();
    // indicar mensaje de intervalo de numeros
    // generar nuevo numero aleatorio
    // Reiniciar el numero de intento
    condicionesIniciales();
    // Deshabilitar boton nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();