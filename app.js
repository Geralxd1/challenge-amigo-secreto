var listaAmigos = [];
const listaAmigosHTML = document.getElementById('listaAmigos');
const amigoNombre = document.getElementById('amigo');
const amigoGanador = document.getElementById('resultado');
const botonSorteo = document.getElementById('botonSorteo');

var hijos = listaAmigosHTML.children;
var idGanador = -1;

function agregarAmigo() {
    let nombreAmigo = amigoNombre.value;
    if (validarNombre(nombreAmigo)) {
        listaAmigos.push(nombreAmigo);
        while (listaAmigosHTML.firstChild) {
            listaAmigosHTML.removeChild(listaAmigosHTML.firstChild);
        }
        listaAmigos.forEach((amigo) => {
            const elemento = document.createElement('div');
            elemento.textContent = amigo;
            elemento.style.margin = '10px';
            elemento.style.border = '1px solid red';
            elemento.style.padding = '5px 10px';
            listaAmigosHTML.appendChild(elemento);
        });
        amigoNombre.value = ''
    }
    else
        alert('Ingrese un nombre valido')
}

function validarNombre(nombre) {
    if (nombre.trim() === '')
        return false
    return true;
}

function randomEntre(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sortearAmigo() {
    console.log('============CLICK==============')
    if (listaAmigos.length < 2) {
        alert('Necesita al menos dos nombres para realizar el sorteo')
        return
    }

    if (idGanador > -1) {
        hijos[idGanador].style.background = 'none';
    }
    let idAmigo = randomEntre(0, listaAmigos.length - 1);
    if(idGanador != idAmigo)
    {
        idGanador = idAmigo;
        amigoGanador.textContent = `Tu amigo secreto es: ${listaAmigos[idAmigo]}`;
        hijos[idAmigo].style.background = 'yellow';
        hijos[idAmigo].style.color = 'blue';
    }else{
        sortearAmigo()
    }
    
}