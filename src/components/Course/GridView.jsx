/* eslint-disable react/prop-types */
// import React from 'react'
import { Link } from 'react-router-dom';
import Shimmer from '../Shimmer';
import { FaHeart } from "react-icons/fa";
const GridView = ({courses}) => {
  return (
    <div className='max-w-[120rem] grid xxsm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-5'>
    {courses.length == 0 ?<Shimmer />:courses?.map((item)=>{
    return(
    <>
        <div className="flex flex-col rounded-lg cursor-pointer ">
     
          <img src={item?.thumbnail} alt="" className="object-cover w-full h-full rounded-lg" />
        <div className="flex flex-col justify-between gap-1">
          
            <h2 className="pt-1 text-lg font-bold dark:text-[#F1F1F1] tracking-wide leading-relaxed font-heading ">{item?.name}</h2>
            <h4 className="text-sm text-[#aaaaaa]">{item?.instructorname}</h4>
            <div className='flex justify-between'><span className='flex flex-col gap-1'><span className="text-sm text-[#aaaaaa]">
            {item?.courseduration} 
            </span>
            <span className='flex items-center gap-2 text-sm'>
            <FaHeart className='text-base text-red-500'/> {item?.like}</span>
            </span>
            <Link to={`/course/${item?.id}`} className='flex items-end'>
          <button className='p-2 text-sm bg-green-600 rounded-lg cursor-pointer hover:bg-green-800'>Enroll Now</button>
          </Link></div>
        </div>
      </div>
    </>
    )
    
    })}
    </div>
  )
}

export default GridView