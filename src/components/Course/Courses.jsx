

import { useSelector } from 'react-redux'
import GridView from './GridView'
import ListView from './ListView'
const Courses = () => {
    const isGridView = useSelector((store)=>store?.course?.isGridView)

    const filteredCourses = useSelector((store)=>store.course.filteredCourse)
 
    if(isGridView === true){return <GridView courses={filteredCourses}/>}
    if(isGridView === false){return <ListView courses={filteredCourses}/>}
}

export default Courses