import React,{useState} from 'react'
import {data} from '../../data/data'
// // import burger from '../../assets/Images/burger1.png'
// import burger from '../../assets'

const FoodCards = () => {
    // console.log(data.image)
    const [food,setFood]=useState(data)
    const filterByType=(category)=>{
     setFood(
       data.filter((item)=>{
        return item.category===category;
       })
     )
    }
   
    const filterByPrice=(price)=>{
      setFood(
       data.filter((item)=>{
        return item.price===price;
       })
      )
    }


    // for (let key in data) {
 
    //     // Console logs all the 
    //     // values in the objArr Array:
    //     console.log(data[key]);
    // }
    // console.log(data)
  return (
    <div className='max-w-[1640px] mx-auto py-6 px-2'>
   <h1 className='font-poppins text-orange-600 font-bold text-center lg:text-4xl'>Top Rated Menu Items</h1>

   {/* Filter Row */}
   <div className='flex flex-col lg:flex-row justify-between'>

    <div className='font-poppins'>
    {/* Filter Type */}
    <p className='font-bold text-gray-700 text-lg ml-2'>Filter Type</p>
    <div className='flex justify-between flex-wrap'>
      <button onClick={()=>setFood(data)} className='rounded-xl  border-[1px] border-orange-600 bg-white outline-none text-orange-600 py-2 px-4 m-1  text-sm hover:bg-orange-600 hover:text-white duration-300 cursor-pointer'>All</button>
      <button onClick={()=>filterByType("burger")} className='rounded-xl border-[1px] border-orange-600 bg-white outline-none text-orange-600 py-2 px-4 m-1 text-sm hover:bg-orange-600 hover:text-white duration-300 cursor-pointer'>Burgers</button>
      <button onClick={()=>filterByType('pizza')} className='rounded-xl border-[1px] border-orange-600 bg-white outline-none text-orange-600 py-2 px-4 m-1 text-sm hover:bg-orange-600 hover:text-white duration-300 cursor-pointer'>Pizza</button>
      <button onClick={()=>filterByType('salad')} className='rounded-xl border-[1px] border-orange-600 bg-white outline-none text-orange-600 py-2 px-4 m-1 text-sm hover:bg-orange-600 hover:text-white duration-300 cursor-pointer'>Salad</button>
      <button onClick={()=>filterByType('chicken')} className='rounded-xl border-[1px] border-orange-600 bg-white outline-none text-orange-600 py-2 px-4 m-1 text-sm hover:bg-orange-600 hover:text-white duration-300 cursor-pointer'>Chicken</button>
    </div>

    </div>


   <div className='font-poppins'>
   {/* Filter Price */}
   <p className='font-bold text-gray-700 text-lg ml-2'>Filter Price</p>
    <div>
    <button onClick={()=>filterByPrice('$')} className='rounded-xl  border-[1px] border-orange-600 bg-white outline-none text-orange-600 py-2 px-4 m-1 hover:bg-orange-600 hover:text-white duration-300 cursor-pointer text-sm'>$</button>
    <button onClick={()=>filterByPrice('$$')} className='rounded-xl  border-[1px] border-orange-600 bg-white outline-none text-orange-600 py-2 px-4 m-1 hover:bg-orange-600 hover:text-white duration-300 cursor-pointer text-sm'>$$</button>
    <button onClick={()=>filterByPrice('$$$')} className='rounded-xl  border-[1px] border-orange-600 bg-white outline-none text-orange-600 py-2 px-4 m-1 hover:bg-orange-600 hover:text-white duration-300 cursor-pointer text-sm'>$$$</button>
    <button onClick={()=>filterByPrice('$$$$')} className='rounded-xl  border-[1px] border-orange-600 bg-white outline-none text-orange-600 py-2 px-4 m-1 hover:bg-orange-600 hover:text-white duration-300 cursor-pointer text-sm'>$$$$</button>


    </div>

   </div>

   </div>

   {/* <img src={burger} alt="" /> */}

    <div className='grid grid-cols-2 lg:grid-cols-4 pt-4 gap-6'>
    {/*Food Cards*/}
    
    {food.map((item,index)=>(
      <div key={index} className='border shadow-lg rounded-lg hover:scale-150 duration-500 cursor-pointer mb-2'>
        {/* <Image src={item.image} /> */}
        <img src={item.image} alt="Error Loading Image" 
        className='w-full h-[220px] object-cover rounded-t-lg' />
        <div className='flex justify-between px-2'>
        <p className='font-poppins font-bold'>{item.name}</p>
        <p className='bg-orange-500 text-white p-1 rounded-full'>{item.price}</p>     

        </div>


      </div>
  




    ))}
   
   


    </div>


    </div>
  )
}

export default FoodCards