// import React from 'react'

const Shimmer = () => {
  return (
    <>
        {Array(6)
        .fill()
        .map((e, index) => (
        <>
            <div key={index} className="flex flex-col rounded-lg animate-pulse ">
     
     <div className="w-full mb-2 bg-gray-300 rounded-lg h-52" ></div>
   <div className="flex flex-col justify-between gap-3">
     
       <h2 className="pt-1 text-lg font-bold dark:text-[#F1F1F1] h-5 tracking-wide leading-relaxed font-heading bg-gray-300"></h2>
       <h4 className="text-sm h-5 text-[#aaaaaa] bg-gray-300"></h4>
       <div className='flex justify-between'><span className="text-sm h-5 text-[#aaaaaa] bg-gray-300"> 
       </span>
       
     <button className='w-20 h-5 p-2 text-sm bg-gray-300 rounded-lg cursor-pointer'></button>
     </div>
   </div>
 </div>
 </>
        ))}
    </>
  )
}

export default Shimmer