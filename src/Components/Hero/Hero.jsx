import React from 'react'
import heroImage from "../../assets/Images/hero.png"


const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto '>
    <div className='max-h-[500px] relative cursor-pointer'>
    <div className='absolute text-gray-200 flex flex-col  items-center justify-center w-full h-full bg-black/45 font-poppins rounded-md'>
     <h2 className='text-3xl sm:text-4xl md:text-6xl lg:text-7xl relative top-10'>The <span className='text-orange-500'>Best</span> </h2>
     <h2 className='text-3xl sm:text-4xl md:text-6xl lg:text-7xl'> <span className='text-orange-500'>Foods</span>  Delivered</h2>
    </div>


    <img src={heroImage} alt="Error Loading Image" className='max-h-[500px] w-full object-cover rounded-md' />

    </div>



    </div>
    
   
      

  )
}

export default Hero
