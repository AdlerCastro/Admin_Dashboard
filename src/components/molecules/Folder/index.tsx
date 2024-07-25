'use client'

import Button from '@/components/atoms/Button'
import React, { useState } from 'react'

export default function Folder() {

    const [open, setOpen] = useState(false)
    console.log(open)

    return (
        <div className='flex flex-col gap-1'>
            <nav className='relative items-center'>
                <input type="checkbox" name="checkbox" id="checkbox" className="hidden" onClick={() => setOpen(!open)} />
                <div className='relative'>
                    <label htmlFor="checkbox" className='font-semibold text-base cursor-pointer'>
                        Geral
                    </label>
                    <ul className={`absolute transition-all duration-100 list-none flex flex-col gap-y-2 bg-zinc-700 text-center ${open ? 'top-6 visible' : '-top-full hidden'}`}>
                        <li><Button className='font-normal w-full'>aaa</Button ></li>
                        <li><Button className='font-normal w-full'>bbb</Button ></li>
                        <li><Button className='font-normal w-full'>ccc</Button ></li>
                    </ul>
                </div>
            </nav>
            <nav className='relative items-center'>
                <input type="checkbox" name="checkbox" id="checkbox" className="hidden" onClick={() => setOpen(!open)} />
                <div className='relative'>
                    <label htmlFor="checkbox" className='font-semibold text-base cursor-pointer'>
                        Geral
                    </label>
                    <ul className={`absolute transition-all duration-100 list-none flex flex-col gap-y-2 bg-zinc-700 text-center ${open ? 'top-6 visible' : '-top-full hidden'}`}>
                        <li><Button className='font-normal w-full'>aaa</Button ></li>
                        <li><Button className='font-normal w-full'>bbb</Button ></li>
                        <li><Button className='font-normal w-full'>ccc</Button ></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}