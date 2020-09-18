let boton = document.getElementById('init')
let array = []
let i = 0;

    function inicializar(){
        
    do{
        let nombre = prompt('Añade un nombre')
        if (array.indexOf(nombre) != -1){
            alert('Ya existe.Introduzca el nombre de nuevo')
        }else{
            array.push(nombre)
            i++
        }
        
    }while(i < 5);
        array.sort()
        for(i = 0; i<array.length; i++){
            console.log(array[i].substring(0,1).toUpperCase());
        }
        
    }
