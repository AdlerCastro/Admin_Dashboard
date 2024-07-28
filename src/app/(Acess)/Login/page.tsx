'use client'

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import Button from "@/components/atoms/Button";
import Link from "next/link";

export default function Login() {

  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const email = formData.get("email");
    const password = formData.get("password");

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    })

    if(res?.error){
      setError("Email ou senha inválidos")

    } else {
      setError("");
      alert("Login realizado com sucesso")
      router.replace("/")
    }
  }

  return (
    <>
      <div className="w-[400px] p-5 rounded-s-lg flex flex-col dark:bg-zinc-800">
        <h1 className="text-6xl text-center mt-5">Bem-vindo a dashboard</h1>
        <div className="flex flex-col h-full items-center justify-center -mt-[50%] gap-10">
          <form onSubmit={handleSubmit} className="flex flex-col gap-10">
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
            <Button className="dark:bg-zinc-200 dark:text-black dark:hover:bg-zinc-300 dark:hover:text-black" type="submit">Acessar</Button>
          </form>
          <Link href="/Register" className="hover:text-zinc-300">Não tem uma conta? Cadastre-se</Link>
          <p>{error}</p>
        </div>
      </div>
    </>
  )
}