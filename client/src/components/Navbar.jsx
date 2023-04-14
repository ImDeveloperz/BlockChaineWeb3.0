import React, { useState } from 'react'
import logo from '../../images/logo.png';
import {HiMenuAlt4} from "react-icons/hi";
import {AiOutlineClose} from "react-icons/ai";

const NavbarItems=({item,classProps})=>{
  return(
    <li className={`mx-4 cursor-pointer ${classProps}`}>
      {item}
    </li>
  )
}
const Navbar = () => {
  const [toggleMenu,setToggleMenu]=useState(false); //Hooks
  return (
    <nav className='w-full flex  md:justify-center justify-between p-4 items-center'>
       <div className='md:flex-[0.5] flex-initial justify-center items-center'>
           <img src={logo} alt="logo"  className='w-32 cursor-pointer'/>
       </div>
       <ul className='text-white hidden justify-between md:flex liste-none flex-row items-center flex-initial'>
           {["Market","Exchange","Tutorials","Wallets"].map((item,index) => (
              <NavbarItems key={item +index} item={item}/>
           ))}
           <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546BD] ' >
            Login
           </li>
       </ul>
       <div className='flex relative'>
         {toggleMenu ? <AiOutlineClose className='text-white md:hidden cursor-pointer ' onClick={()=>setToggleMenu(false)}/> :
          <HiMenuAlt4  className='text-white md:hidden cursor-pointer w-8 h-6' onClick={()=>setToggleMenu(true)}/>}
          {toggleMenu ?
          <ul className='font-bold  z-10 fixed top-0 right-0 p-3 w-full h-screen shadow-2xl md:hidden liste-none
          flex flex-col rounded-md blue-glassmorphism text-white animate-slide-in items-center gap-6 '>
             <li className='text-xl w-full my-2'>
              <AiOutlineClose onClick={()=> setToggleMenu(false)}/>
             </li>
             {["Market","Exchange","Tutorials","Wallets"].map((item,index) => (
              <NavbarItems key={item +index} item={item} classProps='my-2 text-lg hover:text-[#2952E3]'/>
           ))}
          </ul>
             : null}
       </div>
    </nav>
  )
}

export default Navbar