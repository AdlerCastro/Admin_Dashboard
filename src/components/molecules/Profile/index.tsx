'use client'

import React, { useState } from 'react'
import { signOut, useSession } from 'next-auth/react'

import Button from '@/components/atoms/Button'
// import { useRouter } from 'next/navigation'

export default function Profile() {

  const [openProfile, setOpenProfile] = useState(false)
  const {data: session } = useSession()
  // const router = useRouter()

  const toggleProfile = () => {
    setOpenProfile(!openProfile)
  }

  // const viewUser = (_id: string) => {
  //   router.push(`/Users/${_id}`);
  // }

  return (
    <div>
      <nav className='items-center'>
        <input type="checkbox" name="checkbox" id="checkbox-profile" className="hidden" onClick={toggleProfile} />
        <label htmlFor="checkbox-profile" className='font-semibold text-lg cursor-pointer flex flex-row gap-2 items-center'>
          <span className={`mb-1 w-5 border-solid items-center
                    transition-all duration-300
                    before:w-[13px] before:mt-1 before:h-[3px] before:relative before:block dark:before:bg-white before:bg-black
                    after:w-[13px] after:mt-1 after:h-[3px] after:relative after:block dark:after:bg-white after:bg-black
                    after:rotate-[-45deg] before:rotate-[45deg]
                        ${openProfile ? 'rotate-90' : 'rotate-0'}`
          }></span>
          {session?.user?.name}
        </label>
        <ul className={`transition-all duration-300 list-none overflow-hidden ${openProfile ? 'h-[140px]' : 'h-0'}`}>
          <div className='transition-all duration-300 list-none flex flex-col gap-y-2 p-1 bg-transparent text-center '>
            <li><Button className='font-normal'>Visualizar perfil</Button ></li>
            <li><Button className='font-normal' onClick={() => signOut()}>Sair</Button ></li>
          </div>
        </ul>
      </nav>
    </div>
  )
}