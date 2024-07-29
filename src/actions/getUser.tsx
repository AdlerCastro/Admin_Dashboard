'use server'

export default async function getUser() {
    try {
        const res = await fetch("http://localhost:3000/api/user/get")
        
        if (res.status === 203) {
            const user = await res.json()

            return (
                console.log("*Usuário resgatado*"),
                user
            )
        }

        if (res.status === 503) {
            return console.log("*Erro em resgatar o user, tente novamente*")
        }
    }
    catch (err) {
        console.log(`Error, tente novamente ${err}`)
    }

}