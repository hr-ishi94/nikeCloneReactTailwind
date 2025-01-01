import React from 'react'
import { products } from '../constants'
import PopularProduct from '../components/PopularProduct'

const PopularProducts = () => {
  return (
    <section className='max-container '>
      <div className='w-full flex flex-col '>
        <h1 className='text-4xl font-bold font-palanquin'>Our <span className='text-coral-red'>Popular</span> Products</h1>
        <p className='max-w-lg font-montserrat text-slate-gray text-md leading-5 mt-3'>Experience top notch quality and style with our sought-after
        selections. Discover a world of comfort, design and value.</p>
      </div>
      <div className='grid grid-cols-4 mt-10 max-lg:gap-2 gap-5'>
        {products.map((product,index)=>(
            <PopularProduct key={index} {...product}/>
          
        ))}
      </div>
    </section>
  )
}

export default PopularProducts