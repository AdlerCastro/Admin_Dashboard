'use client'

import Loading from '@/app/loading';
import Button from '@/components/atoms/Button';
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
} from '@/components/ui/table'
import { Input } from '@/components/atoms/Input';
import { ListHeader } from '@/components/molecules/List/Header';
import { Item } from '@/components/molecules/List/Item';
import { Empty } from '@/components/organisms/Empty';

import { getUserById } from '@/actions/getUserById';
import { useQuery } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';


interface User {
    _id: string;
    name: string;
    cargo: string;
}

export interface ITask {
    id: number
    text: string
    isChecked: boolean
}

export default function UserProfilePage() {
    const [tasks, setTasks] = useState<ITask[]>([])
    const [inputValue, setInputValue] = useState('')

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

    const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
        if (currentTask.isChecked) {
            return prevValue + 1
        }

        return prevValue
    }, 0)

    function handleAddTask() {
        if (!inputValue) {
            return
        }

        const newTask: ITask = {
            id: new Date().getTime(),
            text: inputValue,
            isChecked: false,
        }

        setTasks((state) => [...state, newTask])
        setInputValue('')
    }

    function handleRemoveTask(id: number) {
        const filteredTasks = tasks.filter((task) => task.id !== id)

        if (!confirm('Deseja mesmo apagar essa tarefa?')) {
            return
        }

        setTasks(filteredTasks)
    }

    function handleToggleTask({ id, value }: { id: number; value: boolean }) {
        const updatedTasks = tasks.map((task) => {
            if (task.id === id) {
                return { ...task, isChecked: value }
            }

            return { ...task }
        })

        setTasks(updatedTasks)
    }

    return (
        <div className='relative w-full h-full bg-zinc-100 text-black dark:bg-zinc-900 dark:text-zinc-50 flex flex-col items-center justify-around'>
            <Button className='absolute left-1 top-1 border-[1px] bg-zinc-200 hover:bg-zinc-300 text-black hover:text-black
            dark:bg-zinc-900 dark:border-zinc-500  dark:hover:bg-zinc-800
            ' onClick={() => routerBack()}>Voltar</Button>
            <Table className='p-5 bg-zinc-200 rounded-lg'>
                <TableBody className='items-center'>
                    <TableRow className='flex gap-2 hover:bg-zinc-300'>
                        <TableCell>ID:</TableCell>
                        <TableCell>{data?._id}</TableCell>
                    </TableRow>
                    <TableRow className='flex gap-2 hover:bg-zinc-300'>
                        <TableCell>Nome:</TableCell>
                        <TableCell>{data?.name}</TableCell>
                    </TableRow>
                    <TableRow className='flex gap-2 hover:bg-zinc-300'>
                        <TableCell>Cargo:</TableCell>
                        <TableCell>{data?.cargo}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <section className='bg-zinc-800 w-full flex flex-col items-center p-3 rounded-lg'>
                <div className='flex items-center'>
                    <Input className='w-96 h-7 mr-5 text-black dark:text-white' onChange={(e) => setInputValue(e.target.value)}
                        value={inputValue} />
                    <Button className='hover:transform-none' onClick={handleAddTask}>Criar Tarefa</Button>
                </div>
                <div className='w-full'>
                    <ListHeader
                        tasksCounter={tasks.length}
                        checkedTasksCounter={checkedTasksCounter}
                    />
                    {tasks.length > 0 ? (
                        <div>
                            {tasks.map((task) => (
                                <Item
                                    key={task.id}
                                    data={task}
                                    removeTask={handleRemoveTask}
                                    toggleTaskStatus={handleToggleTask}
                                />
                            ))}
                        </div>
                    ) : (
                        <Empty />
                    )}
                </div>
            </section>
        </div>
    )
}