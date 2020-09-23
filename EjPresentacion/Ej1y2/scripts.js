let caja = document.getElementById('box')
let input = document.getElementById('tex')

caja.addEventListener('mousedown', () => {
    console.log('Has pulsado la caja.')
})

caja.addEventListener('mouseup', () => {
    console.log('Has dejado de pulsar la caja.')
})

input.addEventListener('keydown', (e) => {
    
    console.log('Has pulsado la tecla ' + e.key)
})

input.addEventListener('keyup', (e) => {
    console.log('Has soltado la tecla tecla ' + e.key)
})