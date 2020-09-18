let botonCrear = document.getElementById('nuevo')
let numero = document.getElementsByName('num')
let tabla = document.getElementById('tabla')
let dnis = document.getElementsByName('id')
let flag = false

function nuevoEmp(){
    let nombre = prompt('Introduzca nombre:')
    let dni = prompt('Introduzca DNI')
    let apellidos = prompt('Introduzca apellidos')

    let newRow = document.createElement('tr')

    let newpos = document.createElement('td')
    let newdni = document.createElement('td')
    let newnom = document.createElement('td')
    let newape = document.createElement('td')
    newpos.setAttribute('name', 'pos')
    newdni.setAttribute('name', 'id')

    let postext = document.createTextNode(parseInt(numero[numero.length-1].textContent) +1)
    let dnitext = document.createTextNode(dni)
    let nomtext = document.createTextNode(nombre)
    let apetext = document.createTextNode(apellidos)
    
   for(let i = 0; i<dnis.length; i++){
       if(dnis[i].textContent == dni){
           alert('YA EXISTE')
           flag = true;
       }
   }
   if(flag != true){
    newpos.appendChild(postext)
    newdni.appendChild(dnitext)
    newnom.appendChild(nomtext)
    newape.appendChild(apetext)

    newRow.appendChild(newpos)
    newRow.appendChild(newdni)
    newRow.appendChild(newnom)
    newRow.appendChild(newape)

    tabla.appendChild(newRow)
   }
}
   function borrarEmp(){
       let dniborrar = prompt('Introduzca DNi de quien quiera borrar.')
       for(let i = 0; i<dnis.length; i++){
        if(dnis[i].textContent == dniborrar){
            dnis[i].parentNode.remove;
        }
    }

   }
