export default async function createUser() {
    try {
        const res = await fetch("/api/user/register")
        
        if (res.status === 409) {
            return console.log("*Email já cadastrado*")
        }

        if (res.status === 201) {
            return console.log("*Email cadastrado com sucesso*")
        }
    }
    catch (err) {
        console.log(`Error, tente novamente ${err}`)
    }

}