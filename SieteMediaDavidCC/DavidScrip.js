let baraja = new Array(10);
let palos = ["Oros", "Bastos", "Copas", "Espadas"];

for( let i = 0; i<baraja.length; i++){
    baraja[i] = palos;
}

let pedir = document.getElementById('pedir')

pedir.addEventListener('click', sacar = (e) =>{
    e.preventDefault()
    let num = parseInt(Math.random()*10)
    let palo = parseInt(Math.random()*4)
    let carta = num+baraja[num+1][palo]
    document.getElementById('throwed').style.visibility = 'visible'
    baraja.splice(baraja[num+1][palo])
})