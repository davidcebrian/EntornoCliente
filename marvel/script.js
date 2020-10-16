let select = document.getElementById("heroes")
let btn = document.getElementById("getData")

fetch('http://192.168.33.10/marvel/marvel.php')
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(res => res.json())
    .then(res => {
        for(heroe of res){
            let selectOption = document.createElement('option')
            selectOption.setAttribute('value', `${heroe.ID}`)
            selectOption.textContent = `${heroe.Name}`
            select.appendChild(selectOption);
        }
    }
    )

const getData = (id) => {
    fetch('http://192.168.33.10/marvel/marvel.php?id=' + id)
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(res => res.json())
    .then(res => {
        let reemplazo = document.getElementById('reemplazar')
        let heroe = res[0]
        let newFila = document.createElement('tr')
        newFila.setAttribute('id','reemplazar')
        let namedata = document.createElement('td')
        let textd = document.createTextNode(`${heroe.Name}`)
        namedata.appendChild(textd)
        newFila.appendChild(namedata)
        
        let genderdata = document.createElement('td')
        let textg = document.createTextNode(`${heroe.Gender}`)
        genderdata.appendChild(textg)
        newFila.appendChild(genderdata)

        let fightdata = document.createElement('td')
        let textf = document.createTextNode(`${heroe.Fighting_Skills}`)
        fightdata.appendChild(textf)
        newFila.appendChild(fightdata)

        reemplazo.replaceWith(newFila)
    })
}


