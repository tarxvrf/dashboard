import Link from 'next/link';
import React from 'react'


function Menumidheader() {
  return (
    <div>
          <ul className='flex flex-row justify-center items-center gap-5'>
        <li className='flex flex-col justify-center items-center'>
        <Link href="/user" >
        
        User
        </Link>
        </li>

        <li className='flex flex-col justify-center items-center'>
        <Link href="/user">
        
        User
        </Link>
          
        </li>

        <li className='flex flex-col justify-center items-center'>
          <Link href="/user">
        
        User
        </Link>
          
        </li>

        <li className='flex flex-col justify-center items-center'>
          <Link href="/user" >         
          <span>User</span>  
        </Link>
          
        </li>
      </ul>

    </div>
  )
}

export default Menumidheader