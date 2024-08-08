'use client'

import { useQuery } from '@tanstack/react-query'
import getUser from '@/actions/getUser'
import Loading from '@/app/loading'
import Button from '@/components/atoms/Button'
import { useRouter } from 'next/navigation'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'


export default function UsersPage() {
  const router = useRouter()

  const { data, isLoading } = useQuery({
    queryFn: async () => await getUser(),
    queryKey: ["Users"]
  })

  if (isLoading) {
    return <Loading />
  } 

  const viewUser = (_id: string) => {
    router.push(`/Users/${_id}`);
  }

  return (
    <div className="w-full bg-zinc-100 text-black dark:bg-zinc-900 dark:text-white">
      <Table>
        <TableCaption>A lista dos mais recentes usuários</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Cargo</TableHead>
            <TableHead>Visualizar</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((user: any) => (
            <TableRow key={user._id}>
              <TableCell>{user._id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.cargo}</TableCell>
              <TableCell><Button className='p-1 w-[14%] overflow-hidden hover:w-full duration-500' onClick={() => viewUser(user._id)}>Detalhes</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}