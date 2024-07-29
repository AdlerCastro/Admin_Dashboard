'use client'

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import Button from "@/components/atoms/Button";
import Link from "next/link";

export default function RegisterPage() {

    const [error, setError] = useState("");
    const router = useRouter();

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const name = formData.get("name");
        const email = formData.get("email");
        const password = formData.get("password");

        try {
            const res = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            })

            if (res.status === 409) {
                setError("*Email já cadastrado*")
            }

            if (res.status === 201) {
                setError("")
                alert("Email cadastrado com sucesso!")
                router.push("/Login")
            }

        } catch (err) {
            setError("Error, tente novamente")
            console.log(err)
        }

    }

    return (
        <div className="lg:w-[500px] p-5 px-8 flex flex-col rounded-lg dark:bg-zinc-800 gap-36">
            <h2 className="text-6xl text-center mt-5">Bem-vindo a dashboard</h2>
            <div className="flex flex-col items-center justify-center gap-10">
                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-10">
                    <label className='ml-8'>
                        <h3 className="mb-2">Digite seu nome</h3>
                        <input
                            type="text"
                            name="name"
                            placeholder="fulano da silva"
                            className="text-black w-full"
                        />
                    </label>
                    <label className='ml-8'>
                        <h3 className="mb-2">Digite seu email</h3>
                        <input
                            type="email"
                            name="email"
                            placeholder="fulano@xxx.com"
                            className=" text-black w-full"
                        />
                    </label>
                    <label className='ml-8'>
                        <h3 className="mb-2">Digite sua senha</h3>
                        <input
                            type="password"
                            name="password"
                            placeholder="fulano123"
                            className="text-black w-full"
                        />
                    </label>
                    <Button className="self-center dark:bg-zinc-200 dark:text-black dark:hover:bg-zinc-300 dark:hover:text-black" type="submit">Cadastre-se</Button>
                    <p>{error}</p>
                </form>
                <Link href="/Login" className="hover:text-zinc-300">Já tem uma conta? Acesse</Link>
            </div>
        </div>
    )
}
