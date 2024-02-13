import React from 'react'
import Sort from './Sort'
import Courses from './Courses'

const CourseContainer = () => {
  return (
    <div className=" mx-36">
    <section>
    <div className="sort-filter">
            <Sort />
          </div>
          <div className="main-product">
           
      <Courses />
          </div>
    </section>
  </div>
  )
}

export default CourseContainer