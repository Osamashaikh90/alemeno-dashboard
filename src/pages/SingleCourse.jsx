// import React from 'react'
import Accordian from "../components/Accordian";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc,updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch,useSelector } from "react-redux";
import { buyCourse } from "../utils/redux/slices/dashBoardSlice";
const SingleCourse = () => {
  const { id } = useParams();
  const filterCourse = useSelector((store)=>store.course.filteredCourse);
  const getCourse = filterCourse.find(item => item.id === id);
  // console.log(getCourse.like);
  const [singleCourse, setSingleCourse] = useState({});
  const [like,setLike] = useState(getCourse.like)
  const dispatch = useDispatch();
  const getSingleCourse = async () => {
    try {
      const courseRef = doc(db, "courses", id);
      const docs = await getDoc(courseRef);
      if (docs.exists()) {
        setSingleCourse(docs.data());
      } else {
        console.log("NO Docs");
      }
    } catch (error) {
      console.log(error);
    }
  };
// console.log(id);
  const handleLikeClick = async()=>{
  try {
    const courseLiked = doc(db,"courses", id);
  await updateDoc(courseLiked,{like:like+1});
  setLike(like+1);
  } catch (error) {
    console.error('Error updating like count:', error);
  }
  }

  const course = useSelector((store)=>store.dashBoard.course);
  const isCoursetWithIdPresent = (idToCheck) => {
    
    return course.find((course) => course.id === idToCheck);
    
  };
  const isEnrollmentClosed = singleCourse?.enrollmentstatus === "Closed";

  const handleBuyCourse = (id, name, instructorname, thumbnail) => {
  
    dispatch(buyCourse({ id, name, instructorname, thumbnail }));
  };
  useEffect(() => {
    getSingleCourse();
  }, [id]);

  return (
    <div className="mb-10 xl:mx-36 lg:mx-10 md:mx-5">
      <div className="grid grid-cols-2 gap-10 py-5">
        <div className="flex flex-col justify-center gap-3 md:p-0 xxsm:px-5">
          <span className="flex items-center justify-between"><h1 className="font-serif text-4xl text-[#a6adba]">
            {singleCourse?.name}🚀
            
          </h1>
          <button onClick={handleLikeClick}><FaRegHeart /></button>
          </span>
          <span className="text-[#a6adba] ">
            🟠Location: {singleCourse?.location}
          </span>
          <span className={`text-[#a6adba]`}>
            🟠Enrollment:{" "}
            <span
              className={`text-[#a6adba] ${
                singleCourse?.enrollmentstatus == "Open"
                  ? "text-green-600"
                  : singleCourse?.enrollmentstatus == "Closed"
                  ? "text-red-600"
                  : singleCourse?.enrollmentstatus == "In Progress"
                  ? "text-blue-600"
                  : ""
              }`}
            >
              {singleCourse?.enrollmentstatus}
            </span>
          </span>
          <span className="text-[#a6adba]">
            🟠Course Duration: {singleCourse?.courseduration}
          </span>
          <span className="text-[#a6adba]">
            🟠Schedule: {singleCourse?.schedule}
          </span>
          <span className="text-[#a6adba]">
            🟠Pre-Requisite: {singleCourse?.preRequisites}
          </span>
{isCoursetWithIdPresent(id)?
          <Link
            to=""
            className={` bg-gray-500 cursor-not-allowed
                 p-2 text-sm  rounded-lg text-center `}
          >
            <button
              disabled
            >
              Already Enrolled
            </button>
          </Link>:
          <Link
            to="/dashboard"
            className={`${
              isEnrollmentClosed 
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-800"
            } p-2 text-sm  rounded-lg text-center `}
          >
            <button
              onClick={() =>
                handleBuyCourse(
                  id,
                  singleCourse?.name,
                  singleCourse?.instructorname,
                  singleCourse?.thumbnail
                )
              }
              disabled={isEnrollmentClosed }
            >
              {isEnrollmentClosed ? "Enrollment Closed" : "Enroll Now"}
            </button>
          </Link>}
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-center gap-2">
            <span className="h-1 rounded-full bg-blue-600 w-[10%]"></span>
            <span className="text-2xl text-[#a6adba]">Instructor</span>
            <span className="h-1 rounded-full bg-blue-600 w-[10%]"></span>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <img
              src={singleCourse?.instructorimg}
              alt=""
              className="rounded-lg w-96 "
            />

            <span className="text-xl">{singleCourse?.instructorname}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 ">
        <div className="flex items-center justify-center gap-2">
          <span className="h-1 rounded-full bg-blue-600 w-[10%]"></span>
          <span className="text-2xl text-[#a6adba]">Description</span>
          <span className="h-1 rounded-full bg-blue-600 w-[10%]"></span>
        </div>
        <p className="px-16">{singleCourse?.description}</p>
      </div>
      <div className="flex flex-col gap-3 mt-5 ">
        <div className="flex items-center justify-center gap-2">
          <span className="h-1 rounded-full bg-blue-600 w-[10%]"></span>
          <span className="text-2xl text-[#a6adba]">Syllabus</span>
          <span className="h-1 rounded-full bg-blue-600 w-[10%]"></span>
        </div>
        <Accordian singleCourse={singleCourse} />
      </div>
    </div>
  );
};

export default SingleCourse;
