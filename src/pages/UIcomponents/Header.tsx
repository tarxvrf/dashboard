import React from 'react'


function Header() {
    return (
        <div className="flex items-center justify-between   bg-slate-400 ">
            <div className='py-4 px-5'>
                <input className='border border-black' type="email" placeholder="Search" />
            </div>
           
            <div className='flex flex-row items-center justify-center gap-3'>
                <div>
                    <button>LogOut</button>
                </div>
                <div>
                   
                </div>

            </div>

        </div>
    )
}

export default Header