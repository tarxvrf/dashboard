import Link from 'next/link'
import React from 'react'
import { FaHome, FaUserAlt } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'
import { GrDeliver } from 'react-icons/gr'
import { HiShoppingBag } from 'react-icons/hi'
import { TbReportSearch } from 'react-icons/tb'

function Menu() {
  return (
    <div className='min-h-screen w-36 bg-slate-500'>
      <ul className='flex flex-col justify-center items-center gap-16'>
        <li className='flex flex-col '>
          <Link href="/dashboard">
            <FaHome className=' text-4xl' />
            Home
          </Link>
        </li>

        <li className='flex flex-col '>
          <Link href="/dashboard/report">
            <TbReportSearch className=' text-5xl' />
            Report
          </Link>

        </li>

        <li className='flex flex-col '>
          <Link href="/dashboard/user">
            <FaUserAlt className=' text-4xl' />
            <span>User</span>
          </Link>

        </li>

        <li className='flex flex-col '>
          <Link href="/dashboard/deliver">
            <GrDeliver className=' text-4xl' />
            <span>Deliver</span>
          </Link>

        </li>

        <li className='flex flex-col '>
          <Link href="/dashboard/sales">
          <HiShoppingBag  className=' text-4xl' />
            <span>Sales</span>
          </Link>

        </li>
      </ul>


    </div>
  )
}

export default Menu