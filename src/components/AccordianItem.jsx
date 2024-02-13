/* eslint-disable react/prop-types */
// import React from 'react'
import {  useDispatch, useSelector } from "react-redux";
import { setActiveIndex } from "../utils/redux/slices/accordianSlice";
const AccordianItem = ({index,title,content}) => {
    const activeIndex = useSelector((store) => store.accordion.activeIndex);
  const dispatch = useDispatch();
  const handleClick = () => {
    if (activeIndex === index) {
      dispatch(setActiveIndex(null)); // Close the active item
    } else {
      dispatch(setActiveIndex(index)); // Open the clicked item
    }
  };
  return (
    <>
            <div
              id="accordion-flush"
              data-accordion="collapse"
              data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
              data-inactive-classes="text-gray-500 dark:text-gray-400"
            >
              <h2 id="accordion-flush-heading-1" onClick={handleClick}>
                <button
                  type="button"
                  className="flex items-center justify-between w-full gap-3 px-3 py-5 font-medium text-gray-500 border-b border-gray-200 rtl:text-right dark:border-gray-700 dark:text-gray-400"
                  data-accordion-target="#accordion-flush-body-1"
                  aria-expanded="true"
                  aria-controls="accordion-flush-body-1"
                >
                  <span className={`${activeIndex === index ? 'text-white':''}`}>{title}</span>
                  <svg
                    data-accordion-icon
                    className={`w-3 h-3 shrink-0 ${activeIndex === index ? 'transform rotate-180 text-white' : ''}`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              {activeIndex === index && (
              <div
                id="accordion-flush-body-1"
                className=" bg-[#111a23] font-sans"
                aria-labelledby="accordion-flush-heading-1"
              >
                <div className="px-5 py-5 border-b border-gray-200 dark:border-gray-700">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    {content}
                  </p>
                </div>
              </div>
              )}
            </div>
          </>
  )
}

export default AccordianItem