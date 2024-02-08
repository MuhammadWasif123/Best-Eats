import React ,{useState}from "react";
import { AiOutlineMenu, AiOutlineSearch,AiOutlineClose,AiFillTag } from "react-icons/ai";
import {TbTruckDelivery,TbHeart} from "react-icons/tb";
import { BsFillCartFill,BsFillSafeFill } from "react-icons/bs";
import { MdFavorite,MdWallet,MdHelp } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";


const Navbar = () => {
  const [nav1,setNav]= useState(false)
  return (
    <div className="max-w-[1640px] mx-auto p-4 flex justify-between items-center font-poppins">
      <div className="flex items-center">
        <div className="cursor-pointer" onClick={()=> setNav(!nav1) }>
          <AiOutlineMenu size={25}   />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold font-poppins">Eats</span>
        </h1>
        <div className="hidden lg:flex md:flex items-center bg-gray-200 rounded-full p-[2px] ">
          <p className="bg-[#000] m-0 ml-1 text-white p-2 rounded-full text-[14px]">
            Delivery
          </p>
          <p className="px-2 text-[14px]">Pick Up</p>
        </div>
      </div>
      {/* Search Input */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          type="text"
          placeholder="Search Food"
          className="bg-transparent border-none p-2 focus:outline-none w-full "
        />
      </div>

      {/* Cart Button */}
      <button className="rounded-full hidden sm:flex items-center bg-[#000] text-white cursor-pointer px-4 py-2">
        <BsFillCartFill className="mr-2" />
        Cart
    </button>
    

    {/* Mobile Menu */}

    {/* Overlay */}
    {nav1 ?  <div className="bg-black/80 text-white fixed top-0 left-0 w-full h-screen z-10">

</div>:""}
   

    {/* Side-Drawer */}
    <div className={nav1 ? "bg-white text-[#000] h-screen w-[270px] fixed top-0 left-0 z-10 duration-200" : "bg-white text-[#000] h-screen w-[270px] fixed top-0 left-[-100%] z-10 duration-200" }>
    <AiOutlineClose size={30}  onClick={() => setNav(!nav1) } className="absolute top-7 right-4 cursor-pointer" />
    <h2 className="text-3xl px-4"> Best <span className="font-extrabold">Eats</span></h2>
    <nav>
     <ul className="list-none flex flex-col justify-center text-gray-800">
     <li className="py-4 text-xl"> <TbTruckDelivery size={25} className="cursor-pointer mr-2 relative top-2" /> Orders</li>
     <li className="py-4 text-xl"> <MdFavorite size={25} className="cursor-pointer mr-2 relative top-2" /> Favourites</li>
     <li className="py-4 text-xl"> <MdWallet size={25} className="cursor-pointer mr-2 relative top-2" /> Wallet</li>
     <li className="py-4 text-xl"> <MdHelp size={25} className="cursor-pointer mr-2 relative top-2" /> Help</li>
     <li className="py-4 text-xl"> <AiFillTag  size={25} className="cursor-pointer mr-2 relative top-2" /> Promotions</li>
     <li className="py-4 text-xl"> <BsFillSafeFill size={25} className="cursor-pointer mr-2 relative top-2" /> Best Ones</li>
     <li className="py-4 text-xl"> <FaUserFriends size={25} className="cursor-pointer mr-2 relative top-2" /> Invite Friends</li>

    </ul> 
      
      
      
    </nav>  


    </div>
    
    

    


    

</div>

  );
};

export default Navbar;
