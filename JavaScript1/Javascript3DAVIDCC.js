window.addEventListener('load', () => {
    let array = ['Sevilla', 'Cádiz', 'Huelva', 'Málaga', 'Granada', 'Almería', 'Jaen', 'Córdoba'];
    let ordenado = array.sort();
    let boton = document.getElementById('mostrar');
    let tabla = document.getElementById('table');

    boton.addEventListener('click', () =>{
        event.preventDefault();
        for(let i = 0; i < ordenado.length; i++){
            let tr = document.createElement('tr');
            let texto = document.createTextNode(ordenado[i])
            tr.appendChild(texto);
            tabla.appendChild(tr);
        }
    })
})



