let btnSave = document.getElementById('Guardar');
let btnSelect = document.getElementById('Select');
let btnBorrar = document.getElementById('borrar');
let btnClear = document.getElementById('clear');

let input = document.getElementById('key');
let inputval = document.getElementById('value');

/* botón guardar, guarda la clave y valor en 
    session storage */
btnSave.addEventListener('click', (e) => {
    e.preventDefault();
    sessionStorage.setItem(form.key.value, form.value.value);
})

/* botón buscar, busca el valor de la key introducida
    y la muestra en el campo value, si no existe muestra
    alerta */
btnSelect.addEventListener('click', (e) => {
    e.preventDefault();
    if (sessionStorage.getItem(input.value) == null) {
        alert('no existe esa clave.')
    } else {
        inputval.value = sessionStorage.getItem(input.value)
    }
})

/* botón borrar, busca el valor de la key introducida
    y la borra, si no existe muestra alerta. */
btnBorrar.addEventListener('click', (e) => {
    e.preventDefault();
    if (sessionStorage.getItem(input.value) == null) {
        alert('No existe esa clave.')
    } else {
        sessionStorage.removeItem(input.value);
    }
})

/* botón clear, borra todos los datos introducidos, si no
    hay datos muestra alerta. */
btnClear.addEventListener('click', (e) => {
    e.preventDefault();
    if (sessionStorage.length == 0) {
        alert('No hay objetos que borrar.')
    } else {
        sessionStorage.clear();
    }
})