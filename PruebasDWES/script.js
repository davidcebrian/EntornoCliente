let button = document.getElementById('btn')
let buttonGet = document.getElementById('btnG')

let name = document.getElementById('name')
let surname = document.getElementById('surname')
let userName = document.getElementById('nickname')
let mobileNumber = document.getElementById('mobile')
let mail = document.getElementById('email')

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
})

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
        }
        )
})