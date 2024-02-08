import React from 'react'
import cardFirst from '../../assets/Images/card-1.png'
import cardSecond from '../../assets/Images/card2.png'
import cardThird from '../../assets/Images/card3.png'


const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto grid md:grid-cols-3 gap-5 py-4 my-6 px-1'>
    <div className='relative border-3 '>
      <div className='absolute w-full h-[97%] bg-black/50 rounded-lg text-white flex flex-col justify-center items-center font-poppins'>
       <p className='font-extrabold lg:text-2xl relative top-3'>Sun's Out, BOGO's Out</p>
       <p className='text-base font-light'>Through 8/26</p>
        <button className='cursor-pointer rounded-full border-none py-2 px-3 text-black-500 font-medium '>Order Now</button>

      </div>
      <img src={cardFirst} alt="Error Loading Image" 
      className='w-full max-h-[140px] md:max-h-[200px] object-cover rounded-lg'/>


    </div>
    <div className='relative border-3 '>
      <div className='absolute w-full h-[97%] bg-black/50 rounded-lg text-white flex flex-col justify-center items-center font-poppins'>
       <p className='font-extrabold lg:text-2xl relative top-3'>New Restaurants</p>
       <p className='text-base font-light'>Added Daily</p>
        <button className='cursor-pointer rounded-full border-none py-2 px-3 text-black-500 font-medium '>Order Now</button>

      </div>
      <img src={cardSecond} alt="Error Loading Image" 
      className='w-full max-h-[140px] md:max-h-[200px] object-cover rounded-lg'/>


    </div>
    <div className='relative border-3 '>
      <div className='absolute w-full h-[97%] bg-black/50 rounded-lg text-white flex flex-col justify-center items-center font-poppins'>
       <p className='font-extrabold lg:text-2xl relative top-3'>We Deliver Desserts Too</p>
       <p className='text-base font-light'>Tasty Treats</p>
        <button className='cursor-pointer rounded-full border-none py-2 px-3 text-black-500 font-medium '>Order Now</button>
      </div>
      <img src={cardThird} alt="Error Loading Image" 
      className='w-full max-h-[140px] md:max-h-[200px] object-cover rounded-lg'/>


    </div>

    </div>
  )
}

export default HeadlineCards
