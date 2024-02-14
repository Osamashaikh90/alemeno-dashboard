

import { useSelector } from 'react-redux'
import GridView from './GridView'
import ListView from './ListView'
import { useEffect } from 'react'
import { fetchData } from '../../utils/redux/slices/courseSlice'
import { useDispatch } from 'react-redux'
const Courses = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
    dispatch(fetchData());
    },[])
    const isGridView = useSelector((store)=>store?.course?.isGridView)

    const filteredCourses = useSelector((store)=>store.course.filteredCourse)
 
    if(isGridView === true){return <GridView courses={filteredCourses}/>}
    if(isGridView === false){return <ListView courses={filteredCourses}/>}
}

export default Courses



