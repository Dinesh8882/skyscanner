import React from 'react'

import { RiArrowDropDownLine } from "react-icons/ri";
import { GiSkullCrossedBones } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa6";
import useToggle from '../../hooks/useToggle';



function Return() {

  const { toggle, togglerHandler } = useToggle(false)

  return (
    <div className='relative'>
      <button onClick={togglerHandler} className='border mt-0 md:mt-7 cursor-pointer  flex items-center gap-2 rounded-sm border-white pl-3 text-sm text-white '>
        Return <div>
          <RiArrowDropDownLine className='text-3xl' />
        </div>


      </button>
      {
        toggle && (
          <div onClick={togglerHandler}
            className='
           text-black text-[16px] z-10 
           h-screen md:h-0 w-full  fixed inset-0  md:static 
           left-0 bg-black/50 md:bg-transparent top-0
           '>
            <div
              onClick={(e) => e.stopPropagation()}
              className='
             w-full p-6 md:p-4 md:w-62.5 md:h-37.5 
             bg-white md:top-full mt-2  bottom-0 rounded-t-xl 
             md:rounded-xl  left-0 absolute
              '>


              <div className='flex items-center w-1/2 md:hidden  justify-between font-bold'>
                <div className='text-xl cursor-pointer' onClick={togglerHandler}><GiSkullCrossedBones /></div>
                <p className=''>Trip Type</p>
              </div>

              <div className='flex flex-col gap-6 md:gap-5 md:my-0 my-8'>
                <div className='flex gap-3 items-center'><FaArrowRight /> <p className=''>One way</p></div>
                <div className='flex gap-3 items-center'><FaArrowRight /> <p className=''>Return</p></div>
                <div className='flex gap-3 items-center'><FaArrowRight /> <p className=''>Multi-city</p></div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Return


