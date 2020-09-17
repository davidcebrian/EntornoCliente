window.addEventListener('click', () => {
    let boton = document.getElementById('anadir');
    
    boton.addEventListener('click', () => {
        event.preventDefault();
        let filas = document.getElementsByTagName('tr');
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
    
    nuevaFila.appendChild(nuevaPosicion);
    nuevaFila.appendChild(nuevoEquipo);
    nuevaFila.appendChild(nuevoPuntos);
    
    for(let i = 1; i < filas.length; i++){
        if(parseInt(nuevaPosicion.textContent) == parseInt((filas[i].firstElementChild.textContent))){
            filas[i].parentNode.replaceChild(filas[i], nuevaFila);
        }
    }
    
    })
})

