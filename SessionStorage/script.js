let btnSave = document.getElementById('Guardar');
let btnSelect = document.getElementById('Select');

btnSave.addEventListener('click', (e) => {
    e.preventDefault();
    sessionStorage.setItem(form.key.value, form.value.value);
})

btnSelect.addEventListener('click', (e) => {
    e.preventDefault();
    let obj = sessionStorage.getItem(form.key.value)
    form.value.value = obj.value;
})