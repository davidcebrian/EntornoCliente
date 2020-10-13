const btn = document.getElementById("btn");
btn.addEventListener('click', () => {
    let xhr
    if(window.XMLHttpRequest) xhr = new XMLHttpRequest()
    else xhr = new ActiveXObject("Microsoft.XMLHTTP")

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')

    xhr.addEventListener('load', (data) => {
        console.log(JSON.parse(data.target.response))
        
    })

    let lista = document.createElement("ul")
    
    xhr.send()
})