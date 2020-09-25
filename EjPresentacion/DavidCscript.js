//EJ1y2
let caja = document.getElementById('box')
let input = document.getElementById('tex')


/*
caja.addEventListener('mouseenter', (e) =>{
    e.preventDefault()
    caja.classList.replace('caja', 'green');
})
*/

caja.addEventListener('mouseenter', () =>{
    
})

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

//EJ3
let input2 = document.getElementById('text')
let btn = document.getElementById('btn')

btn.addEventListener('click', () =>{
    input2.addEventListener('keyup', (e) =>{
        console.log(e.key)
    })
})

//EJ4
let gallery = document.getElementById('gallery')

gallery.addEventListener('click', (e) => {
    console.log(e.target.textContent)
})