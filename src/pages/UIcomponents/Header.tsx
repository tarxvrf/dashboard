import React from 'react'
import Menumidheader from './Menumidheader'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'

function Header() {
    return (
        <div className='flex justify-between gap-3 items-center px-10 py-5 text-black bg-slate-300'>
            <div>
                <Input className='border border-black' type="email" placeholder="Search" />
            </div>
            <div>
                <Menumidheader />
            </div>
            <div className='flex flex-row items-center justify-center pl-2 gap-3'>
                <div>
                    <Badge>LogOut</Badge>
                </div>
                <div>
                    <Avatar >
                        <AvatarImage width={40} className='rounded-full' src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>

            </div>

        </div>
    )
}

export default Header