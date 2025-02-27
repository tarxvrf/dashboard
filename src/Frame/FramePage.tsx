import Navapp from '@/pages/UIcomponents/Navapp'
import React from 'react'

function FramePage({children}:{children:React.ReactNode}) {
  return (
    <div>
    <Navapp/>
    {children}

  </div>
  )
}

export default FramePage