const btn = document.getElementById("btn");
let lista = document.getElementById("lista")
//SIN FETCH
btn.addEventListener('click', () => {
    let xhr
    if(window.XMLHttpRequest) xhr = new XMLHttpRequest()
    else xhr = new ActiveXObject("Microsoft.XMLHTTP")

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')

    xhr.addEventListener('load', (data) => {
        let json = JSON.parse(data.target.response)
        console.log(json)
        for(user of json){
            console.log(`${user.id} - ${user.name}`)
            let fila = document.createElement('li')
            fila.textContent = `${user.id} - ${user.name}`;
            lista.appendChild(fila);
        }
    })
    lista.innerHTML;
    
    xhr.send()
})

//CON FETCH
const btnf = document.getElementById("btnf")
btnf.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(res => res.json())
    .then(res => {
        for(user of res){
            let fila = document.createElement('li')
            fila.textContent = `${user.id} - ${user.name}`
            lista.appendChild(fila)
        }
        lista.innerHTML
    })
})


