/* eslint-disable react/prop-types */
// import React from 'react'

const ProgressBar = ({complete}) => {
  return (
    <>
        
  <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
    <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.2 leading-none rounded-full" style={{width: `${complete}`}}> {complete}</div>
  </div>

    </>
  )
}

export default ProgressBar