import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between '>
        <h1 className='text-2xl font-medium'> Hello <br /> <span className='text-3xl font-semibold'>Shaily🫡</span></h1>
        <button className='bg-red-700 text-white py-3 px-2 font-medium rounded text-lg'>Log Out</button>
    </div>
  )
}

export default Header