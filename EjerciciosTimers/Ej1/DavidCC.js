// EJERCICIO 1

const horarioactual = () => {
    let p = document.getElementById('fecha')
    let fecha = new Date()
    let dia = parseInt(fecha.getDate())
    let mes = parseInt(fecha.getMonth()+1)
    let año = parseInt(fecha.getFullYear())
    p.textContent = ('Hoy es ' + dia + ' - ' + mes + ' - ' + año + ' y son las ' + fecha.getHours()+':'+fecha.getMinutes()+':'+fecha.getSeconds())
}
setInterval(horarioactual, 1000);
