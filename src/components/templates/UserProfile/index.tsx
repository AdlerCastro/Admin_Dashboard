'use client'

import { getUserById } from '@/actions/getUserById';
import Loading from '@/app/loading';
import Button from '@/components/atoms/Button';
import { useQuery } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import { DonutWithText } from '@/components/molecules/Graphics';

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'

interface User {
    _id: string;
    name: string;
    cargo: string;
}

export default function UserProfilePage() {

    const router = useRouter();
    const { _id } = useParams() as { _id: string };

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

    function routerBack() {
        router.back()
    }

    return (
        <div className='relative w-full h-full bg-zinc-900 text-zinc-50 flex flex-col items-center justify-around'>
            <Button className='absolute left-0 top-0' onClick={() => routerBack()}>Voltar</Button>
            <Table className='p-5 bg-zinc-800 rounded-lg'>
                <TableBody className='items-center'>
                    <TableRow className='flex flex-col gap-2'>
                        <TableCell>ID: {data?._id}</TableCell>
                    </TableRow>
                    <TableRow className='flex flex-col gap-2'>
                        <TableCell>Nome: {data?.name}</TableCell>
                    </TableRow>
                    <TableRow className='flex flex-col gap-2'>
                        <TableCell>Cargo: {data?.cargo}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <DonutWithText />
        </div>
    )
}