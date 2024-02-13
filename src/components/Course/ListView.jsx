/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa'
const ListView = ({courses}) => {
  return (
    <>
      <div className="my-6 md:px-10">
        <div className="max-w-[120rem] grid gap-10">
        {courses?.map((item)=>{
        return(<>
<div className="flex md:items-center md:flex-row xxsm:flex-col md:gap-10 xxsm:gap-3 rounded-md shadow-sm cursor-pointer bg-[#181e24]">
<figure className="relative flex items-center justify-center w-auto overflow-hidden rounded">
    <img src={item?.thumbnail} alt="" className="mx-6 my-5 rounded md:h-52 xxsm:h-full"/>
   
    </figure>
    <div className="flex flex-col gap-2 xxsm:p-3 md:p-0">
    <h1 className="text-2xl font-semibold hover:text-blue-500">{item?.name}</h1>
            <h4 className="text-sm text-[#aaaaaa]">{item?.instructorname}</h4>
            <span className="text-sm text-[#aaaaaa]">
            Course duration: {item?.courseduration} 
            </span>
            <span className='flex items-center gap-2 text-sm'>
            <FaHeart className='text-base text-red-500'/> {item?.like}</span>
        <Link to={`/course/${item?.id}`}>
          <button className='px-5 py-2 text-sm bg-green-600 rounded hover:bg-green-800'>Enroll Now</button>
          </Link>
    </div>
</div>
 </>)
})}
        </div>
        </div>
    </>
  )
}

export default ListView