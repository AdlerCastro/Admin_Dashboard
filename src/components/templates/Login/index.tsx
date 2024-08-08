'use client'

import Button from '@/components/atoms/Button';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react'

export default function LoginPage() {
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

    if (res?.error) {
      setError("Email ou senha inválidos")

    } else {
      setError("");
      alert("Login realizado com sucesso")
      router.replace("/")
    }
  }

  return (
    <div className="lg:w-[500px] p-5 px-8 flex flex-col rounded-lg dark:bg-zinc-800 gap-36">
      <h2 className="text-6xl text-center mt-5">Bem-vindo a dashboard</h2>
      <div className="flex flex-col items-center justify-center gap-10">
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-10">
          <label className='ml-8'>
            <h3 className="mb-2">Digite seu email</h3>
            <input
              type="email"
              name="email"
              placeholder="fulano@xxx.com"
              className="w-full"
            />
          </label>
          <label className='ml-8'>
            <h3 className="mb-2">Digite sua senha</h3>
            <input
              type="password"
              name="password"
              placeholder="fulano123"
              className="w-full"
            />
          </label>
          <Button className="self-center dark:bg-zinc-200 dark:text-black dark:hover:bg-zinc-300 dark:hover:text-black" type="submit">Acessar</Button>
        </form>
        <Link href="/Register" className="hover:text-zinc-300">Não tem uma conta? Cadastre-se</Link>
        <p>{error}</p>
      </div>
    </div>
  )
}

