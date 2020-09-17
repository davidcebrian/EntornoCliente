window.addEventListener('load', () => {
    let boton1 = document.getElementById('anadir');
    let boton2 = document.getElementById('borrar');

    boton1.addEventListener('click', () => {
        event.preventDefault();
        lista = document.getElementById("lista");
        numero = parseInt(document.getElementById('posicion').value)-1;
        texto = document.createTextNode(document.getElementById('texto').value);
        elemento = document.createElement("li");
        elemento.appendChild(texto);
        posicion = document.getElementsByTagName('li')[numero];
        lista.insertBefore(elemento,posicion);
    })
    
    boton2.addEventListener('click', () => {
        event.preventDefault();
        numero = parseInt(document.getElementById('posicion').value) -1;
        lista = document.getElementById("lista");
        elemento = document.getElementsByTagName("li")[numero];
        elemento.parentNode.removeChild(elemento);
    }) 
})


