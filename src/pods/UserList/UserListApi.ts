import axios from "axios"


const API = 'https://hello-world.innocv.com/api/'

export const getUserById = async (userId: number) => {
    const { data } = await axios.get(`${API}user/${userId}`)
    return data
}
let n = 0

export const deleteUserById = async (userId: number) => {
    const { data } = await axios.delete(`${API}user/${userId}`)
    return data
}



export const UpdateUserById = async (user) => {
    console.log("actualiza user");
    console.log("user:", user);
    const{id, name, birthdate} =user

    if (name == "") {
        console.log("nombre vacio");

    } else {
        console.log("actualizando  usuario");
        fetch('https://hello-world.innocv.com/api/User', {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                name: name,
                birthdate: birthdate,
               
            })
        });
    }
}


export const createUserAPI = (user) => {
    console.log("creanso un usario");
    
    const{id, name, birthdate} =user
    if (name == "") {
        console.log("nombre vacio");

    } else {
        console.log("creado usuario");
        fetch('https://hello-world.innocv.com/api/User', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                birthdate: birthdate,
                id: 0
            })
        });
    }
}


export const getUsers = async () => {
    const { data } = await axios.get(`${API}User/`)

    return data
}