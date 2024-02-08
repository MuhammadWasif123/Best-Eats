import React from 'react'
import {categories} from "../../data/data"

const Category = () => {
    console.log(categories);

  return (
    <div className='max-w-[1640px] mx-auto py-6'>
   <h1 className='text-center font-bold text-orange-600 font-poppins text-4xl pb-2'>Top Rated Menu Items</h1>
    
    <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
    {categories.map((item,index)=>(
    <div key={index} className="bg-gray-100 rounded-lg flex items-center justify-between px-4 py-4">
     <h2 className='font-poppins text-lg'>{item.name}</h2>
     <img className='w-20 object-contain' src={item.image} alt="Error Loading Image" />   

    </div> 

    ))}




    </div>


    </div>


    
  )
}

export default Category