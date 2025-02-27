import Header from '@/pages/UIcomponents/Header'
import Menu from '@/pages/UIcomponents/Menu'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import React, { Children } from 'react'
import Report from './report'
import User from './user'
import Deliver from './deliver'
import Sales from './sales'

function CustomPage() {
   const router = useRouter()
   const isreport = router.pathname === '/dashboard/report'
   const isdashboard = router.pathname === '/dashboard'
   const isuser = router.pathname === '/dashboard/user'
   const issales = router.pathname === '/dashboard/sales'
   const isdeliver = router.pathname === '/dashboard/deliver' 
  return (
    <div>
     {isreport && (<Report/>)}
     {isuser && (<User/>)}
     {isdeliver && (<Deliver/>)}
     {issales && (<Sales/>)}
     {isdashboard && 'ini dasboardnya'}
    </div>
  )
}

export default CustomPage