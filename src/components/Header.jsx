import React from 'react'
import Logo from '../assets/logo.png'
function Header() {
  return (
    <header className='bg-gray-800 py-2.5 px-3 flex justify-around items-center'>
      <div className='flex gap-3 items-center'>
        <img src={Logo} className='w-36 h-auto' />
        <a
          href='https://wvsr.github.io'
          className='text-lg text-gray-400 hover:text-gray-300'
        >
          by sami
        </a>
      </div>
      <div>Keyboard shortcut</div>
    </header>
  )
}

export default Header
