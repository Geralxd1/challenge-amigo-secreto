var listaAmigos = [];
const listaAmigosHTML = document.getElementById('listaAmigos');
const amigoNombre = document.getElementById('amigo')
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
function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert('Necesita al menos dos nombres para realizar el sorteo')
    }
}