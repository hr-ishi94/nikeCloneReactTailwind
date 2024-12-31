import React from 'react'

const Button = ({label, iconURL}) => {
  return (
    <button className='flex justify-center items-center border border-coral-red bg-coral-red px-7 py-4 gap-2 rounded-full text-lg text-white leading-none font-montserrat'>{label}
    
    <img src={iconURL} alt="icon url" className='ml-2 rounded-full w-5 h-5 bg-white' />
    </button>
  )
}

export default Button