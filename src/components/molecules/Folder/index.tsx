'use client'

import Button from '@/components/atoms/Button'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function Folder() {

    const router = useRouter()

    const [openGeral, setOpenGeral] = useState(false)
    const [openOpcional, setOpenOpcional] = useState(false)

    const toggleGeral = () => {
        setOpenGeral(!openGeral)
    }

    const toggleOpcional = () => {
        setOpenOpcional(!openOpcional)
    }

    return (
        <div className='flex flex-1 flex-col justify-around'>
            {/* Geral */}
            <nav className='items-center'>
                <input type="checkbox" name="checkbox" id="checkbox-geral" className="hidden" onClick={toggleGeral} />
                <label htmlFor="checkbox-geral" className='font-semibold text-lg cursor-pointer flex flex-row gap-2 items-center'>
                    <span className={`mb-1 w-5 border-solid items-center
                    transition-all duration-300
                    before:w-[13px] before:mt-1 before:h-[3px] before:relative before:block dark:before:bg-white before:bg-black
                    after:w-[13px] after:mt-1 after:h-[3px] after:relative after:block dark:after:bg-white after:bg-black
                    after:rotate-[-45deg] before:rotate-[45deg]
                        ${openGeral ? 'rotate-90' : 'rotate-0'}`
                    }></span> Geral
                </label>
                <ul className={`transition-all duration-300 list-none overflow-hidden ${openGeral ? 'h-[140px]' : 'h-0'}`}>
                    <div className='transition-all duration-300 list-none flex flex-col gap-y-2 p-1 bg-transparent text-center '>
                        <li><Button className='font-normal' onClick={() => router.push("/Users")}>Usuários</Button ></li>
                        <li><Button className='font-normal' onClick={() => router.push("/View")}>Gráficos</Button ></li>
                    </div>
                </ul>
            </nav>
            {/* Opcional */}
            <nav className='items-center'>
                <input type="checkbox" name="checkbox" id="checkbox-opcional" className="hidden" onClick={toggleOpcional} />
                <label htmlFor="checkbox-opcional" className='font-semibold cursor-pointer flex flex-row gap-2 items-center text-lg'>
                <span className={`mb-1 w-5 border-solid items-center
                    transition-all duration-300
                    before:w-[13px] before:mt-1 before:h-[3px] before:relative before:block dark:before:bg-white before:bg-black
                    after:w-[13px] after:mt-1 after:h-[3px] after:relative after:block dark:after:bg-white after:bg-black
                    after:rotate-[-45deg] before:rotate-[45deg]
                        ${openOpcional ? 'rotate-90' : 'rotate-0'}`
                    }></span> Opcional
                </label>
                <ul className={`transition-all duration-300 list-none overflow-hidden ${openOpcional ? 'h-[140px]' : 'h-0'}`}>
                    <div className='transition-all duration-300 list-none flex flex-col gap-y-2 p-1 bg-transparent text-center '>
                        <li><Button className='font-normal'>Mudar tema</Button ></li>                       
                        <li><Button className='font-normal' onClick={() => signOut()}>Sair</Button ></li>
                    </div>
                </ul>
            </nav>
        </div>
    )
}