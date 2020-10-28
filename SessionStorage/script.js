let btnSave = document.getElementById('Guardar');
let btnSelect = document.getElementById('Select');

let input = document.getElementById('key');
let inputval = document.getElementById('value');

/* botón guardar, guarda la clave y valor en 
    session storage */
btnSave.addEventListener('click', (e) => {
    e.preventDefault();
    sessionStorage.setItem(form.key.value, form.value.value);
})

/* botón buscar, busca el valor de la key introducida
    y la muestra en el campo value. */
btnSelect.addEventListener('click', (e) => {
    e.preventDefault();
    inputval.value = sessionStorage.getItem(input.value)
})