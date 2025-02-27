
import { useRouter } from 'next/router'
import React from 'react'
import Report from './report'
import User from './user'
import Deliver from './deliver'
import Sales from './sales'
import Ringkasan from './ringkasan'

function CustomPage() {
   const router = useRouter()
   const isreport = router.pathname === '/dashboard/report'
   const isdashboard = router.pathname === '/dashboard'
   const isuser = router.pathname === '/dashboard/user'
   const issales = router.pathname === '/dashboard/sales'
   const isdeliver = router.pathname === '/dashboard/deliver' 
  return (
    <div className='py-5 px-5 border h-full' >
     {isreport && (<Report/>)}
     {isuser && (<User/>)}
     {isdeliver && (<Deliver/>)}
     {issales && (<Sales/>)}
     {isdashboard && <Ringkasan/>}
    </div>
  )
}

export default CustomPage