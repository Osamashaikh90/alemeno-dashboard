// import React from 'react'
import { FaBookBookmark } from "react-icons/fa6";
import { useState } from "react";
import { PiChatsDuotone,PiStorefront } from "react-icons/pi";
import { Link } from "react-router-dom"
import user from "../assets/osama shaikh.png"
import { useSelector } from "react-redux";
import ProgressBar from "../components/ProgressBar";
import { DateFormatter } from "../utils/helper/DateFormatter";
const StudentDashboard = () => {
  const course = useSelector((store)=>store.dashBoard.course);
  const [completionStatus, setCompletionStatus] = useState({});
const allCourse = useSelector((store)=>store.course.allCourse);
console.log(allCourse)
  const handleCompleteCourse = (courseId) => {
    setCompletionStatus((prevStatus) => ({
      ...prevStatus,
      [courseId]: "100%",
    }));
  };
  return (
    <>
     <div className="grid h-screen" style={{gridTemplateColumns:" 15% 85%"}} >
  <div className="bg-[#edae2f] flex flex-col gap-3 h-screen justify-between" >
  <div className="flex flex-col py-5 gap-7">
  <Link to="/"><h1 className="hidden text-3xl font-medium text-[#1d232a] cursor-pointer font-Cursive hover:transform hover:scale-100 md:flex md:justify-start md:mx-5 ">
          CourseWallah
        </h1></Link>
  <Link to="/"><h1 className="block md:hidden text-3xl font-medium text-[#1d232a] cursor-pointer font-Cursive hover:transform hover:scale-100 xxsm:flex xxsm:justify-start  ">
          CW
        </h1></Link>
        <div className="flex flex-col gap-3 px-3">
<span className="flex items-center gap-4 font-mono cursor-pointer bg-[#86682e] rounded-lg p-1 sm:text-md lg: text-xl"><FaBookBookmark /> <span className="hidden md:block">Library</span></span>
<span className="flex items-center gap-4 font-mono  cursor-pointer hover:bg-[#86682e] hover:rounded-lg p-1 sm:text-md lg:text-xl"><PiChatsDuotone /> <span className="hidden md:block">Community</span></span>
  </div>
  </div>
  <div className="flex flex-col gap-3 px-5 mb-2">
  <Link to="/">  <span className="flex items-center gap-4 font-mono  cursor-pointer hover:bg-[#86682e] hover:rounded-lg p-1 sm:text-md lg: text-xl"><PiStorefront className="text-3xl"/> <span className="hidden md:block">Store</span></span></Link>
    <span className="flex items-center gap-4 font-mono text-xl cursor-pointer"><img src={user} alt="" className='w-7 h-7 '/><span className="hidden md:block">Sign Out</span></span>
  </div>
 
   </div>
   {/* right */}
  <div className="" >
   <div className="px-5 shadow-lg py-7">Active Courses</div>
   <div className="p-10 max-w-[120rem] grid xxsm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
   {course?.map((item)=>{
    const courseId = course.id;
    const courseComplete = completionStatus[courseId] || "55%";
    return(
    <>
        <div className="flex flex-col rounded-lg cursor-pointer ">
          <img src={item?.thumbnail} alt="" className="object-cover w-full h-full rounded-lg" />
        <div className="flex flex-col justify-between gap-2">
          
            <h2 className="pt-1 text-lg font-bold dark:text-[#F1F1F1] tracking-wide leading-relaxed font-heading ">{item?.name}</h2>
            <span className="flex items-center justify-between"><h4 className="text-sm text-[#aaaaaa]">{item?.instructorname}</h4>
            <span className="text-sm text-[#aaaaaa]">Valid till: {DateFormatter(item?.dateAdded)}</span>
            </span>
            <span><ProgressBar complete = {courseComplete}/></span>
            <button onClick={() => handleCompleteCourse(courseId)} className='p-2 text-sm bg-green-600 rounded-lg hover:bg-green-800'>Complete Course</button>
        </div>
      </div>
    </>
    )
    
    })}
   </div>
  </div>
</div>
    </>
  )
}

export default StudentDashboard