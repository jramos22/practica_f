
const btn = document.getElementById('btn');
btn.addEventListener('click', (event) => {

    const contenido = document.getElementById('contenedor');
    const contenido_class= contenido.getAttribute('class');
    if  (contenido_class === 'cont-estilo') {
        contenido.removeAttribute('class', 'cont-estilo');
        contenido.setAttribute('class', 'nuevo-estilo');
    } else {
        contenido.removeAttribute('class', 'nuevo-estilo');
        contenido.setAttribute('class', 'cont-estilo');
    }
    
});