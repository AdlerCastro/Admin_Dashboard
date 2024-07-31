import Connect from "@/utils/database/db";
import User from "@/utils/models/User";
import { NextResponse } from "next/server";

interface UserURL{
    _id: string;
}

export const GET = async (request: Request, context: {params: UserURL}) => {
    const _id = context.params._id;

    await Connect();

    try {
        const user = await User.findById(_id)

        if(!user){
            return new NextResponse('User não encontrado', {status: 404});
        }

        return new NextResponse(JSON.stringify(user), {status: 203});

    } catch (error) {
        return new NextResponse(`Erro ao buscar o usuário! Erro: ${error}`, {status: 500});
    }
}