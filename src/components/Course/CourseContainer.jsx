import React from 'react'
import Sort from './Sort'
import Courses from './Courses'

const CourseContainer = () => {
  return (
    <div className="xxsm:mx-10 lg:mx-36">
    <section>
    <div className="sort-filter">
            <Sort />
          </div>
          <div className="Courses">
           
      <Courses />
          </div>
    </section>
  </div>
  )
}

export default CourseContainer