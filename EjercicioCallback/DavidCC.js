let usuarios = [{
        name: david,
        username: rizo,
        id: 1
    },
    {
        name: yi,
        username: chen,
        id: 2
    },
    {
        name: david,
        username: gomez,
        id: 3
    }
]

const getUser = (id, cb) =>{
    let usuario = usuarios.find(user => user.id == id);
    if (!user) cb(`Not exist a user with id ${id}`)
    else cb(null, user)
}

