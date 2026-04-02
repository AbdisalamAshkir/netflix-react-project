import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { MdClose } from "react-icons/md";

const Fac = ({title,description}) => {
    const [show, setshow]=useState(false);
  return (
    <div className='mx-auto flex-col py-[2] px-2 sm:max-w-screen-md'>
        <div className=' my-[2px] flex justify-between bg-[#303030]  py-4 px-[2px] sm:py-5  sm:px-6'>
            <h1 className='text-lg  sm:text-2xl'>{title}</h1>

            {show?  <MdClose className='h-8 w-8 cursor-pointer' onClick={()=>setshow(!show)} />:<FaPlus className='h-8 w-8 cursor-pointer' 
              onClick={()=>setshow(!show)}/>
          
            }
            
        </div>
       {show && <div className='bg-[#303030]'>
            <p className='px-2 py-2 text-lg sm:py-6 sm:text-2xl '>{description}</p>
        </div>}

    </div>
  )
}

export default Fac