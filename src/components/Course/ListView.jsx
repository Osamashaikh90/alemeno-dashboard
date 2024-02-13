/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'
const ListView = ({courses}) => {
  return (
    <>
      <div className="px-10 my-6">
        <div className="max-w-[120rem] grid gap-10">
        {courses?.map((item)=>{
        return(<>
<div className="flex items-center gap-10 rounded-md shadow-sm cursor-pointer bg-[#181e24]">
<figure className="relative flex items-center justify-center w-auto overflow-hidden rounded">
    <img src={item?.thumbnail} alt="" className="mx-6 my-5 rounded h-52 "/>
   
    </figure>
    <div className="flex flex-col gap-2">
    <h1 className="text-2xl font-semibold hover:text-blue-500">{item?.name}</h1>
            <h4 className="text-sm text-[#aaaaaa]">{item?.instructorname}</h4>
            <span className="text-sm text-[#aaaaaa]">
            Course duration: {item?.courseduration} 
            </span>
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