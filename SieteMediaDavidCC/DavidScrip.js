/*
creamos la baraja y un array para guardar las cartas
saliendo
*/
let baraja = new Array(10);
let palos = ["Oros", "Bastos", "Copas", "Espadas"];
for( let i = 0; i<baraja.length; i++){
    baraja[i] = palos;
}
let norepetir = []
/*
Creamos la carta vacía y cogemos el elemento donde
aparecerá la carta boca arriba.
*/
let cartaarriba = document.getElementById('cartaarriba')
let carta = '';
let divimg = document.getElementById('throwed')
/*
Cogemos los elementos del usuario y la ia y sus puntos
*/
let user = document.getElementById('user')
let ia = document.getElementById('ia')
let puntosuser = document.getElementById('puntosuser')
let puntosia = document.getElementById('puntosia')
let puntosi = 0;
let puntosu = 0;
let num = 0;
puntosuser.value = puntosu
puntosia.value = puntosi
//Funcion pedir carta
let pedir = document.getElementById('pedir')
pedir.addEventListener('click', sacar = (e) =>{
    /*
    Creamos un String de una de las cartas en img
    creando numeros al azar y sacando la carta de la baraja creada.
    (si sale una repetida se repite el proceso hasta que no lo sea)
    */
    do{
        e.preventDefault()
        num = parseInt(Math.random()*10)
        let palo = parseInt(Math.random()*4)
        carta = (num+1)+baraja[num][palo]
        console.log(carta);
    }while(norepetir.indexOf(carta) > -1)
    //Mostramos la carta bocaarriba en su lugar.
    cartaarriba.setAttribute('src', 'imagenes/'+carta+'.jpg')
    divimg.classList.replace('cards_image', 'cards_imagev')
    //La mostramos en el lugar del user y la metemos en el array de repetidas.
    let img = document.createElement('img')
    img.setAttribute('src', 'imagenes/'+carta+'.jpg')
    user.appendChild(img)
    norepetir.push(carta);
    /*
    Apuntamos los puntos y los vamos sumando, 
    si nos pasamos de 7.5 gana IA
    */
   if((num+1) < 8){
       puntosu = puntosu + (num+1)
       puntosuser.value = puntosu
   }else{
       puntosu = puntosu + 0.5
       puntosuser.value = puntosu
   }

   if(puntosu > 7.5){
        document.getElementById('block').classList.replace('blockers', 'blocker')
        document.getElementById('pop').classList.replace('popup', 'popupb')
    }
})

//Realizamos la opcion de plantarse
let plantarbtn = document.getElementById('plantar')
plantarbtn.addEventListener('click', plantarse = (e) => {
    /*
    Creamos numeros al azar y sacando la carta de la baraja creada.
    (si sale una repetida se repite el proceso hasta que no lo sea)
    */
    do{
        num = parseInt(Math.random()*10)
        let palo = parseInt(Math.random()*4)
        carta = (num+1)+baraja[num][palo]
        console.log(carta);
    }while(norepetir.indexOf(carta) > -1)
    //Mostramos la carta boca arriba
    cartaarriba.setAttribute('src', 'imagenes/'+carta+'.jpg')
    divimg.classList.replace('cards_image', 'cards_imagev')
    //La mostramos en el lugar de la ia
    let img = document.createElement('img')
    img.setAttribute('src', 'imagenes/'+carta+'.jpg')
    ia.appendChild(img)
    //añadimos la carta al array de repetidas
    norepetir.push(carta);
    /*
    Apuntamos los puntos y los vamos sumando
    */
    if((num+1) < 8){
        puntosi = puntosi + (num+1)
        puntosia.value = puntosi
    }else{
        puntosi = puntosi + 0.5
        puntosia.value = puntosi
    }
    //Repetimos el proceso siempre que la ia tenga menos puntos que el jugador.
    if(puntosi < puntosu){
            setTimeout(plantarse,1000)
    }
    //Comprobamos quien ha ganado y mostramos su correspondiente popup.
    else if(puntosi >= puntosu && puntosi <= 7.5){
        const timeout = setTimeout(() =>{
            document.getElementById('block').classList.replace('blockers', 'blocker')
            document.getElementById('pop').classList.replace('popup', 'popupb')
        },1500)
        
    }else{
        const timeout = setTimeout(() => {
            document.getElementById('block').classList.replace('blockers', 'blocker')
            document.getElementById('popi').classList.replace('popupi', 'popupib')
        }, 1500)
    }
    })
    