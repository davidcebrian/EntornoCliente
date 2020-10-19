let select = document.getElementById("heroes")
let btn = document.getElementById("getData")
let tabla = document.getElementById('tabla')


let filter = document.getElementById('filter')
let alig = document.getElementById('alig')
let gender = document.getElementsByName('gender')


fetch('http://192.168.33.10/marvel/marvel.php')
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(res => res.json())
    .then(res => {
        for (heroe of res) {
            let selectOption = document.createElement('option')
            selectOption.setAttribute('value', `${heroe.ID}`)
            selectOption.textContent = `${heroe.Name}`
            select.appendChild(selectOption);
        }
    })

let alignments = []
let genders = []
fetch('http://192.168.33.10/marvel/marvel.php')
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(res => res.json())
    .then(res => {
        for (heroe of res) {
            if (alignments.indexOf(`${heroe.Alignment}`) == -1) {
                alignments.push(`${heroe.Alignment}`)
                let selectOption = document.createElement('option')
                selectOption.setAttribute('value', `${heroe.Alignment}`)
                selectOption.textContent = `${heroe.Alignment}`
                alig.appendChild(selectOption);

            }
            if (genders.indexOf(`${heroe.Gender}`) == -1) {
                genders.push(heroe.Gender)
                let radioOption = document.createElement('input')
                radioOption.type = 'radio'
                radioOption.name = 'gender'
                radioOption.id = `${heroe.Gender}`
                radioOption.value = `${heroe.Gender}`
                document.getElementById('body').insertBefore(radioOption, filter)
                let labelOption = document.createElement('label')
                labelOption.setAttribute('for', `${heroe.Gender}`)
                labelOption.textContent = `${heroe.Gender}`
                document.getElementById('body').insertBefore(labelOption, filter)
            }
        }
    })

const getData = (id) => {
    fetch('http://192.168.33.10/marvel/marvel.php?id=' + id)
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
        .then(res => res.json())
        .then(res => {
            let tbody = document.getElementById('tbody')
            let newBody = document.createElement('tbody')
            tbody.replaceWith(newBody)
            newBody.setAttribute('id', 'tbody')
            let heroe = res[0]
            let newFila = document.createElement('tr')
            let namedata = document.createElement('td')
            let textd = document.createTextNode(`${heroe.Name}`)
            newFila.setAttribute('id', 'reemplazar')
            namedata.appendChild(textd)
            newFila.appendChild(namedata)

            let aligdata = document.createElement('td')
            let textali = document.createTextNode(`${heroe.Alignment}`)
            aligdata.appendChild(textali)
            newFila.appendChild(aligdata)

            let genderdata = document.createElement('td')
            let textg = document.createTextNode(`${heroe.Gender}`)
            genderdata.appendChild(textg)
            newFila.appendChild(genderdata)

            let homedata = document.createElement('td')
            let texth = document.createTextNode(`${heroe.Hometown}`)
            homedata.appendChild(texth)
            newFila.appendChild(homedata)

            let fightdata = document.createElement('td')
            let textf = document.createTextNode(`${heroe.Fighting_Skills}`)
            fightdata.appendChild(textf)
            newFila.appendChild(fightdata)

            newBody.appendChild(newFila)
        })
}



const filtr = (alignment, gend) => {

    fetch('http://192.168.33.10/marvel/marvel.php')
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
        .then(res => res.json())
        .then(res => {
            let tbody = document.getElementById('tbody')
            let newBody = document.createElement('tbody')
            tbody.replaceWith(newBody)
            newBody.setAttribute('id', 'tbody')
            for (heroe of res) {
                if (heroe.Alignment == alignment && heroe.Gender == gend) {
                    let newFila = document.createElement('tr')
                    let namedata = document.createElement('td')
                    let textd = document.createTextNode(`${heroe.Name}`)
                    namedata.appendChild(textd)
                    newFila.appendChild(namedata)

                    let aligdata = document.createElement('td')
                    let textali = document.createTextNode(`${heroe.Alignment}`)
                    aligdata.appendChild(textali)
                    newFila.appendChild(aligdata)

                    let genderdata = document.createElement('td')
                    let textg = document.createTextNode(`${heroe.Gender}`)
                    genderdata.appendChild(textg)
                    newFila.appendChild(genderdata)

                    let homedata = document.createElement('td')
                    let texth = document.createTextNode(`${heroe.Hometown}`)
                    homedata.appendChild(texth)
                    newFila.appendChild(homedata)

                    let fightdata = document.createElement('td')
                    let textf = document.createTextNode(`${heroe.Fighting_Skills}`)
                    fightdata.appendChild(textf)
                    newFila.appendChild(fightdata)

                    newBody.appendChild(newFila)
                }
            }
        })
}


let gendr
filter.addEventListener('click', (e) => {
    e.preventDefault()
    for (g of gender) {
        if (g.checked) {
            gendr = g.value
        }
    }
    filtr(alig.value, gendr)
})