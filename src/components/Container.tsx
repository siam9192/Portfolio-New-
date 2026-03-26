import React, { type ReactNode } from 'react'

function Container({children}:{children:ReactNode}) {
  return (
    <div className='container mx-auto lg:px-0 px-2'>
        {
            children
        }
    </div>
  )
}

export default Container