import React, { useEffect, useState } from 'react'
import Menu from './UIcomponents/Menu'
import Header from './UIcomponents/Header'

import Dashboard from './dashboard'

function Page() {
    const [alluser,seuser] = useState<[]>([])
    useEffect(()=>{
      const data = async()=>{
        const response = await fetch('http://localhost:3000/api/alluser')
        const users = await response.json()
        seuser(users)
      }
      data()
    },[])
  return (
    <div className='flex flex-row '>
  {alluser.map((item:any,index)=>
        <td key={index}>{item.username}</td>
        )}

    </div>
  )
}

export default Page