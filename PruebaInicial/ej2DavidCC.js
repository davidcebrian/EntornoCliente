let botonCrear = document.getElementById('nuevo')
let numero = document.getElementsByName('num')
let tabla = document.getElementById('tabla')
let dnis = document.getElementsByName('id')
let flag = false
let total = 3;

const nuevoEmp = () =>{
    let nombre = prompt('Introduzca nombre:')
    let dni = prompt('Introduzca DNI')
    let apellidos = prompt('Introduzca apellidos')
    let flag = false;
   for(let i = 0; i<dnis.length && !flag; i++){
       if(dnis[i].textContent == dni){
           alert('YA EXISTE')
           flag = true;
       }
    }
    if(!flag){
        let newRow = document.createElement('tr')
    
        let newpos = document.createElement('td')
        let newdni = document.createElement('td')
        let newnom = document.createElement('td')
        let newape = document.createElement('td')
        newpos.setAttribute('name', 'pos')
        newdni.setAttribute('name', 'id')
        newnom.setAttribute('name', 'nom')
        newape.setAttribute('name', 'ape')
    
        let postext = document.createTextNode(parseInt(numero[numero.length-1].textContent) +1)
        let dnitext = document.createTextNode(dni)
        let nomtext = document.createTextNode(nombre)
        let apetext = document.createTextNode(apellidos)

        newpos.appendChild(postext)
        newdni.appendChild(dnitext)
        newnom.appendChild(nomtext)
        newape.appendChild(apetext)

        newRow.appendChild(newpos)
        newRow.appendChild(newdni)
        newRow.appendChild(newnom)
        newRow.appendChild(newape)

        tabla.appendChild(newRow)
        total++
        document.getElementById('total').textContent = 'Numero total de empleados: ' + total
   }
}

   const borrarEmp = () => {
       let dniborrar = prompt('Introduzca DNi de quien quiera borrar.')
       let flag = false;
       for(let i = 0; i< dnis.length && !flag ; i++){
        if(dnis[i].textContent == dniborrar){
            tabla.deleteRow(i + 1)
            flag=true;
            total--
            document.getElementById('total').textContent = 'Numero total de empleados: ' + total

        }
    }
        if(flag == false){
            alert('no existe empleado')
        }


}


    const modificar = () => {
        
        let dnimod = prompt('Introduzca DNI de quien quiere mod:')
        let flag = false;
        for(let i = 0; i< dnis.length ; i++){
            if(dnis[i].textContent == dnimod){
                let nombre = prompt('que nombre quiere ponerle:')
                let ape = prompt ('que apellido quiere ponerle:')
                document.getElementsByName('nom')[i].textContent = nombre
                document.getElementsByName('ape')[i].textContent = ape
                flag = true;
            }
        }
        if(!flag){
            alert('no existe')
        }

    
    }