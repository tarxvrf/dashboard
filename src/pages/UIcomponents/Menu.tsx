import Link from "next/link";
import React from "react";
import { FaHome, FaUserAlt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { GrDeliver } from "react-icons/gr";
import { HiShoppingBag } from "react-icons/hi";
import { TbReportSearch } from "react-icons/tb";

function Menu() {
  return (
    <div className=" flex justify-center items-center w-32 bg-slate-900 min-h-screen">
      <div>       
        <ul className="flex flex-col gap-16">
          <li className="flex flex-col ">
            <Link href="/dashboard">
              <FaHome className=" text-4xl" />
              Home
            </Link>
          </li>

          <li className="flex flex-col ">
            <Link href="/dashboard/report">
              <TbReportSearch className=" text-4xl" />
              Report
            </Link>
          </li>

          <li className="flex flex-col ">
            <Link href="/dashboard/user">
              <FaUserAlt className=" text-4xl" />
              <span>User</span>
            </Link>
          </li>

          <li className="flex flex-col ">
            <Link href="/dashboard/deliver">
              <GrDeliver className=" text-4xl" />
              <span>Deliver</span>
            </Link>
          </li>

          <li className="flex flex-col ">
            <Link href="/dashboard/sales">
              <HiShoppingBag className=" text-4xl" />
              <span>Sales</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
