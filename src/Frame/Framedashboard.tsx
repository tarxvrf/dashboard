import Header from '@/pages/UIcomponents/Header'
import Menu from '@/pages/UIcomponents/Menu'

import React from 'react'




function Framedashboard({children}:{children:React.ReactNode}) {
  return (
    <div className='flex flex-row '>
    <div className='min-h-screen w-48 bg-slate-500'>
      <div className='flex flex-col justify-center items-center py-5'>
        <h1 className='text-3xl text-white'>Menu</h1>
        <div className='pt-10'>
         <Menu/>
        </div>          
      </div>
    </div>

    <div className='w-full bg-base'>      
      <div className=''>
        <Header/>
      </div>
      <div>
     {children}
      </div>


    </div>


  </div>
  )
}

export default Framedashboard