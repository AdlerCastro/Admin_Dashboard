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
        <div className="w-[400px] p-5 rounded-s-lg flex flex-col dark:bg-zinc-800">
            <h1 className="text-6xl text-center mt-5">Bem-vindo a dashboard</h1>
            <div className="flex flex-col h-full items-center justify-center -mt-[50%]">
                <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                    <label>
                        <h3 className="mb-2">Digite seu nome</h3>
                        <input
                            type="text"
                            name="name"
                            placeholder="fulano da silva"
                            className="text-black"
                        />
                    </label>
                    <label>
                        <h3 className="mb-2">Digite seu email</h3>
                        <input
                            type="email"
                            name="email"
                            placeholder="fulano@xxx.com"
                            className="text-black"
                        />
                    </label>
                    <label>
                        <h3 className="mb-2">Digite sua senha</h3>
                        <input
                            type="password"
                            name="password"
                            placeholder="fulano123"
                            className="text-black"
                        />
                    </label>
                    <Button className="dark:bg-zinc-200 dark:text-black dark:hover:bg-zinc-300 dark:hover:text-black" type="submit">Cadastre-se</Button>
                    <p>{error}</p>
                </form>
                <Link href="/Login" className="hover:text-zinc-300">Já tem uma conta? Acesse</Link>
            </div>
        </div>
    )
}
