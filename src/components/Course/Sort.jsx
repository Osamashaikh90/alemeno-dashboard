// import React from 'react'
import { BsList,BsFillGridFill } from "react-icons/bs";
import { useDispatch,useSelector } from "react-redux"
import { useState,useEffect } from "react";
import { filterCourse } from "../../utils/redux/slices/courseSlice";

import { set_GridView,set_ListView } from '../../utils/redux/slices/courseSlice';
const Sort = () => {
  const [searchVal, setSearchval] = useState('');
    const isGridView = useSelector((store)=>store.course.isGridView)
    const dispatch = useDispatch();
    const setGridView = ()=>{
        dispatch(set_GridView());
        }
        const setListView = ()=>{
        dispatch(set_ListView());
        }
        useEffect(()=>{
          dispatch(filterCourse(searchVal))
        },[dispatch,searchVal])

  return (
    <>
         <div className="flex items-center justify-between mt-6">
        <div className="flex items-center ">
        <button
          className={isGridView? "text-[#edae2f] bg-gray-600 flex justify-center items-center cursor-pointer px-4 py-[0.8rem] border-[none]" : "flex justify-center items-center cursor-pointer px-4 py-[0.8rem] border-[none]"}
          onClick={setGridView}
        >
          <BsFillGridFill className="text-base" />
        </button>
        <button
          className={!isGridView? "text-[#edae2f] bg-gray-600 flex justify-center items-center cursor-pointer px-4 py-[0.8rem] border-[none]" : "flex justify-center items-center cursor-pointer px-4 py-[0.8rem] border-[none]"}
          onClick={setListView}
        >
          <BsList className="text-base" />
        </button>
        </div>
        {/* <p>Courses</p> */}
        <div className="cursor-pointer sort-selection">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            className="px-4 py-2 border border-[#edae2f] focus:outline-none rounded-md w-72 bg-[#1d232a]"
            type="text"
            name="text"
            value={searchVal}
            placeholder="SEARCH"
            onChange={(e)=>setSearchval(e.target.value)}
          />
        </form>
      </div>
    </div>
    </>
  )
}

export default Sort