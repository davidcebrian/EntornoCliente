window.addEventListener('load', () => {
    let boton = document.getElementById('anadir');
    
    boton.addEventListener('click', () => {
        event.preventDefault();

        let filas = document.getElementsByTagName('tr');
        let fila = filas[parseInt(document.getElementById('pos').value)];

        let nuevaFila = document.createElement('tr');

        let nuevaPosicion = document.createElement('td');
        let postexto = document.createTextNode(document.getElementById('pos').value);
        
        let nuevoEquipo = document.createElement('td');
        let eqtexto = document.createTextNode(document.getElementById('eq').value);

        let nuevoPuntos = document.createElement('td');
        let puntexto = document.createTextNode(document.getElementById('pun').value);
    
    nuevaPosicion.appendChild(postexto);
    nuevoEquipo.appendChild(eqtexto);
    nuevoPuntos.appendChild(puntexto);
    
    nuevaPosicion.setAttribute('name', 'posicion')
    nuevoEquipo.setAttribute('name', 'equipo')
    nuevoPuntos.setAttribute('name', 'puntos')

    nuevaFila.appendChild(nuevaPosicion);
    nuevaFila.appendChild(nuevoEquipo);
    nuevaFila.appendChild(nuevoPuntos);

    fila.parentNode.replaceChild(nuevaFila, fila);
    
    })
})

