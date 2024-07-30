'use client'

import { useQuery } from '@tanstack/react-query'
import getUser from '@/actions/getUser'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import Loading from '@/app/loading'

export default function UsersPage() {

  const { data, isLoading } = useQuery({
    queryFn: async () => await getUser(),
    queryKey: ["Users"]
  })

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="w-full h-full bg-zinc-900 text-zinc-50">
      <Table>
        <TableCaption>A lista dos mais recentes usuários</TableCaption>
        <TableHeader>
          <TableRow className="w-[100px]">
            <TableHead>ID</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((user: any) => (
            <TableRow key={user._id}>
              <TableCell className="font-medium">{user._id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}