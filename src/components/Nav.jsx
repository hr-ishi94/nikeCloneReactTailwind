import React from 'react'
import {headerLogo} from '../assets/images'
import { navLinks } from '../constants'
import { hamburger } from '../assets/icons'

const Nav = () => {
  return (
    <section className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img src={headerLogo} alt="" width={129} height={29} className='m-0 w-[129px] h-[29px]' />
        </a>
        {/* will be hidden less than lg break point -- max-lg:hidden */}
        <ul className='flex-1 flex max-lg:hidden justify-center items-center gap-16'>
            {navLinks.map((item)=>(
              <li key={item.label}>
                {/* leading normal provides with the line height */}
                <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>{item.label}</a>
                
              </li>
            ))}

        </ul>
        <div className='flex gap-2 text-lg leading-normal font-montserrat max-lg:hidden wide:mr-24'>
          <a href="/">Sign in</a>  
          <span>/</span>
          <a href="/">Explore now</a>
        </div>
        <div className='max-lg:block hidden'>
          <img  src={hamburger} alt="hamburgericon" width={25} height={25} />
        </div>
      </nav>
    </section>
  )
}

export default Nav

