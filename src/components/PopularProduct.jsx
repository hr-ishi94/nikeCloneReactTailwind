import React from 'react'
import { star } from '../assets/icons'

const PopularProduct = ({imgURL, name, price}) => {
  return (
    <div>
        <img src={imgURL} alt="popular shoes" height={130}/>
        <div className='mt-5 ml-2 flex gap-2'>
            <img src={star} alt="star" />
            <p className='font-montserrat text-slate-gray '>(4.5)</p>  
        </div>
        <div className='m-2 leading-8'>
            <h1 className='text-md font-bold max-lg:text-sm'>{name}</h1>
            <p  className='text-coral-red text-sm font-montserrat'>{price}</p>
        </div>
    </div>
  )
}

export default PopularProduct