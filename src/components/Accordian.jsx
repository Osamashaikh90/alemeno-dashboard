/* eslint-disable react/prop-types */
// import React from 'react'

import AccordianItem from "./AccordianItem"

const Accordian = ({singleCourse}) => {
  return (
    <><div>
    {singleCourse?.syallabus?.map((item, index) => {
      return(  <AccordianItem key={index} index={index} title={item?.title} content={item?.content}/>      );
      })}
    </div></>
  )
}

export default Accordian





