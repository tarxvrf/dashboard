import React from 'react'


function Header() {
    return (
        <div className="flex items-center justify-between w-full border bg-slate-400 ">
            <div className='py-4 px-5'>
                <input className='input input-bordered input-sm' type="email" placeholder="Search" />
            </div>
           
            <div className='flex flex-row items-center justify-center gap-3'>
                <div>
                    <button className='btn btn-xs'>LogOut</button>
                </div>
                <div className='avatar '>
                   <div className='w-14 rounded-full '>
                   <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                   </div>
                </div>

            </div>

        </div>
    )
}

export default Header