let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(intentos);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles.');
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de números
    //generar número aleatorio
    //inicializar el número de intentos
    condicionesIniciales();
    //deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();

/*
function holaMundo() {
    console.log('Hola, mundo!');
}
holaMundo();

function holaNombre(nombre) {
    console.log('Hola ' + nombre + '!');
}
holaNombre('Jesús');

function multiplicarPorDos(numero) {
    return 2*numero;
}
let doble = multiplicarPorDos(45)
console.log(doble);

function promedioDeTresNumeros(num1, num2, num3) {
    return (num1+num2+num3)/3;
}
let promedio = promedioDeTresNumeros(86, 87, 2);
console.log(promedio);

function numeroMayor(num1, num2) {
    return num1 > num2 ? num1 : num2;
}
let mayor = numeroMayor(200, 87);
console.log(mayor);

function elevarAlCuadrado(numero) {
    return numero*numero;
}
let cuadrado = elevarAlCuadrado(5);
console.log(cuadrado);
*/

/*
function calculoIMC(peso, estatura) {
    return peso/(estatura**2);
}
let IMC = calculoIMC(71, 1.65);
console.log(IMC);

function factorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        /*let resultado = numero;
        /*let decremento = numero-1; 
        while(decremento > 1) {
            resultado *= decremento;
            decremento--;
        }*/
        /*for(decremento=numero-1;decremento>1;decremento--){
            resultado *= decremento;
        }
        return resultado;*//*
        return numero*factorial(numero-1)
    }
}
let respuesta = factorial(5);
console.log(respuesta);

function USD_MXN(USD) {
    return USD*17.17;
}
let conversion = USD_MXN(100);
console.log(conversion);

function areaPerimetro(altura, anchura) {
    var area = altura * anchura;
    var perimetro = 2*(altura + anchura);
    console.log(area, perimetro);
}
areaPerimetro(7, 5);

function areaPerimetroC(radio) {
    var areaC = 3.14*(radio**2);
    var perimetroC = 3.14*2*radio;
    console.log(areaC, perimetroC);
}
areaPerimetroC(8);

function tabla(factor) {
    for(var c=1;c<=10;c++) {
        var x = factor*c;
        console.log(x);
    }
}
tabla(9);
*/

```
let listaGenerica = [];
let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
lenguajesDeProgramacion.push('Java');
lenguajesDeProgramacion.push('Ruby', 'GoLang');
console.log(lenguajesDeProgramacion);
console.log(lenguajesDeProgramacion.length);

function mostrarElementos(lista) {
    for(let c=0;c<lista.length;c++) {
        console.log(lista[c]);
    }
}
mostrarElementos(lenguajesDeProgramacion);

function mostrarElementosInverso(lista) {
    for(let c=lista.length-1;c>=0;c--) {
        console.log(lista[c]);
    }
}
mostrarElementosInverso(lenguajesDeProgramacion);

let suma = 0;
function promedioLista(lista) {
    for(let c=0;c<lista.length;c++){
        suma += lista[c];
    }
    return suma/lista.length;
}
let listaNumeros = [4, 5, 3, 104, -3, 43, 8];
let average = promedioLista(listaNumeros);
console.log(average);

//solución propia
let menor = [];
let mayor = [];
function mayorMenor(lista) {
    for(let c=0;c<lista.length;c++) {
        for(let i=0;i<lista.length;i++) {
            menor.push(lista[c] > lista[i]);
            mayor.push(lista[c] < lista[i])
        }
        //console.log('menor', menor);
        //console.log('mayor', mayor);
        if(menor.includes(true)) {
            menor = [];
        } else {
            console.log('Número menor: ' + lista[c]);
        }
        if(mayor.includes(true)) {
            mayor = [];
        } else {
            console.log('Número mayor: ' + lista[c]);
        }
    }
}
mayorMenor(listaNumeros);

//solución One
function encontrarMayorMenor(lista) {
    let menor = lista[0];
    let mayor = lista[0];
    for(let i = 1; i < lista.length; i++) {
        if (lista[i] < menor) {
            menor = lista[i];
        }
        if (lista[i] > mayor) {
            mayor = lista[i];
        }
    }
    console.log('Menor:', menor);
    console.log('Mayor:', mayor);
}
encontrarMayorMenor(listaNumeros);

let sum = 0;
function sumaLista(lista) {
    for(let c=0;c<lista.length;c++){
        sum += lista[c];
    }
    return sum;
}
let listNumbers = [4, 5, 3];
let result = sumaLista(listNumbers);
console.log(result);

//soluciones propias
function compararLista(element, lista) {
    for(let c=0;c<lista.length;c++){
        if (lista[c] == element) {
            return c;
        }
    }
    return -1;
    /*if (lista.includes(element)){
        return lista.indexOf(element);
    } else {
        return -1;
    }*/
}
let lista = [1, 2, 3, 4, 5];
let indice = compararLista(3, lista);
console.log('Indice', indice);

let lista3 = [];
function sumarListas(lista1, lista2) {
    for (let c = 0; c < lista1.length; c++) {
        lista3.push(lista1[c] + lista2[c]);
    }
    return lista3;
}
let lista1 = [1, 2, 3, 4];
let lista2 = [4, 3, 2, 1];
let nuevaLista = sumarListas(lista1, lista2);
console.log(nuevaLista);

let listaAl2 = [];
function cuadradoLista(lista) {
    for (let c=0; c<lista.length; c++) {
        listaAl2.push(lista[c]**2);
    }
    return listaAl2;
}
let squareList = cuadradoLista(lista1);
console.log(squareList);
```