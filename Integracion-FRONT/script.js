/**Cogemos todos los botones y los imputs para utilizarlos 
 * mas tarde
 */
let button = document.getElementById('btn')
let buttonGet = document.getElementById('btnG')

let name = document.getElementById('name')
let surname = document.getElementById('surname')
let userName = document.getElementById('nickname')
let mobileNumber = document.getElementById('mobile')
let mail = document.getElementById('email')
/**Cuando clickamos obtenemos los datos de los imputs en otras variables
 * y creamos un objeto con los datos del usuario
 */
button.addEventListener('click', (e) => {
    e.preventDefault()
    let name2 = name.value
    let surname2 = surname.value
    let userName2 = userName.value
    let mobileNumber2 = mobileNumber.value
    let mail2 = mail.value

    let newUser = {
        name: name2,
        surname: surname2,
        userName: userName2,
        mobileNumber: mobileNumber2,
        mail: mail2
    }
    /**Hacemos la petición POST a nuestro endpoint y le pasamos el objet
     * usuario que hemos creado como JSON en el body
     */
    fetch('http://localhost:8080/user', {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                "Content-type": "application/json"
            }
        })
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
        .then(res => res.json())
        .then(res => {
            console.log(res)
        })
        .catch(error => {
            if(error.status == 404){
                alert('Rellene los campos necesarios.')
            }else {
                alert('ERROR INESPERADO:')
            }
        })

})
/**Hacemos la petición GET a nuestro endpoint y los datos recibidos 
los mostramos en el formulario.
*/
buttonGet.addEventListener('click', (e) => {
    e.preventDefault()
    let id = document.getElementById('id').value
    fetch('http://localhost:8080/user/' + id)
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
        .then(res => res.json())
        .then(res => {
            name.value = res.name
            surname.value = res.surname
            userName.value = res.userNamer
            mobileNumber.value = res.mobileNumber
            mail.value = res.mail
        })
        .catch(error => {
            if(error.status == 404){
                alert('No existe el usuario')
            }else {
                alert('ERROR INESPERADO:')
            }
        })
})

/**Cogemos el elemento lista para añadirle mas tarde 
 * los elementos a mostrar y el boton para listar los elementos.
 */

let listbtn = document.getElementById('btnlista')

/**Hacemos una petición get de todos los usuarios a nuestro endpoint
 * al clickar en el boton LISTAR y cambiamos la lista que tenemos
 * por una nueva y le añadimos todos los elementos
 */
listbtn.addEventListener('click', (e) => {
    let lista = document.getElementById('list')
    let ulvacio = document.createElement('ul')
    ulvacio.setAttribute('id', 'list')
    lista.replaceWith(ulvacio)
    fetch('http://localhost:8080/user')
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(res => res.json())
    .then(res => {
        for(user of res){
            let elem = document.createElement('li')
            let text = document.createTextNode(`ID: ${user.id}` + ' - '+`${user.name}`)
            elem.appendChild(text)
            ulvacio.appendChild(elem)
        }
    })
    .catch(error => {
        if(error.status == 404){
            alert('No existen usuarios')
        }else {
            alert('ERROR INESPERADO:')
        }
    })
})


