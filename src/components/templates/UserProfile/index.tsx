'use client'

import { getUserById } from '@/actions/getUserById';
import Loading from '@/app/loading';
import Button from '@/components/atoms/Button';
import { useQuery } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import React from 'react'

interface User {
    _id: string;
    name: string;
    cargo: string;
}

export default function UserProfilePage() {

    const { _id } = useParams() as { _id: string }

    const { data, isLoading, error } = useQuery<User>({
        queryFn: async () => await getUserById(_id),
        queryKey: ["/User", _id]
    })

    if (isLoading) {
        return <Loading />
    }

    if (error) {
        return <p>Erro ao carregar o usuário</p>
    }

    const router = useRouter()

    function routerBack() {
        router.back()
    }

    return (
        <div className='relative w-full h-full bg-zinc-900 text-zinc-50 flex flex-col items-center justify-center'>
            <Button className='absolute left-0 top-0' onClick={() => routerBack()}>Voltar</Button>
            <h1>Usuário</h1>
            <h2>{data?.name}</h2>
            <h2>{data?._id}</h2>
            <h2>{data?.cargo}</h2>
        </div>
    )
}