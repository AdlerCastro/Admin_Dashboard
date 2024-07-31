'use server'

export async function getUserById(_id: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/user/getUserById/${_id}`)

    if(!res.ok){
        throw new Error(`Falha ao resgatar o user! status: ${res.status}`)
    }

    const user = await res.json()
    return user;

  } catch (error: any) {
    throw new Error(error.message)
  }
}