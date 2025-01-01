import React from 'react'
import Button from '../components/Button'
import { shoe8 } from '../assets/images'

const SuperQuality = () => {
  return (
    <section className='flex lg:flex-row gap-5 flex-col max-container justify-evenly w-full items-center'>
      <div className='flex flex-col'>
        <h1 className='text-4xl font-semibold font-palanquin  '>We Provide You <span className='text-coral-red'>Super</span><br /> <span className='text-coral-red'>Quality</span> Shoes</h1>
        <p className='max-w-lg font-montserrat text-slate-gray text-md leading-8 mt-5'>Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation and a touch of elegance</p>
        <p className='mt-5 max-w-lg my-10 font-montserrat text-slate-gray text-md leading-8'>Our dedication to detail and excellence ensure your satisfaction</p>
        <div>
          <Button label="View details" />

        </div>
      </div>
        <img src={shoe8} alt="super quality shoe" />
      
    </section>
  )
}

export default SuperQuality