
import { useRouter } from 'next/router'
import React from 'react'
import Report from './report'
import User from './user'
import Deliver from './deliver'
import Sales from './sales'
import Ringkasan from './ringkasan'
import Stok from './stokbarang'

function CustomPage() {
   const router = useRouter()
   const isreport = router.pathname === '/dashboard/report'
   const isdashboard = router.pathname === '/dashboard'
   const isuser = router.pathname === '/dashboard/user'
   const issales = router.pathname === '/dashboard/sales'
   const isdeliver = router.pathname === '/dashboard/deliver' 
   const isstok = router.pathname === '/dashboard/stokbarang'
  return (
    <div className='py-5 px-5  h-full "' >
     {isreport && (<Report/>)}
     {isuser && (<User/>)}
     {isdeliver && (<Deliver/>)}
     {issales && (<Sales/>)}
     {isdashboard && <Ringkasan/>}
     {isstok && <Stok/>}
    </div>
  )
}

export default CustomPage