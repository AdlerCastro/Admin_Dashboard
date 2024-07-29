import Connect from '@/utils/database/db'
import User from '@/utils/models/User'
import { NextResponse } from 'next/server'

export const GET = async () => {
    await Connect()

    try {
        const user = await User.find();
        console.log(user)
        return new NextResponse(JSON.stringify(user), {status: 203});

    } catch (error) {
        return new NextResponse(`Erro em resgatar o user: ${error}`, {status: 503});
    }
}