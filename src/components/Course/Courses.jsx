import {useState,useEffect} from 'react'
import { db } from '../../firebase'
import {getDocs,collection} from 'firebase/firestore'
    import { useSelector,useDispatch } from 'react-redux'
import GridView from './GridView'
import ListView from './ListView'
import { setAllCourses } from '../../utils/redux/slices/courseSlice'
const Courses = () => {
    const [courses,setCourses] = useState([]);
    const isGridView = useSelector((store)=>store?.course?.isGridView)
    const courseCollection = collection(db,'courses');
    const dispatch = useDispatch();
    const allCourses = useSelector((store)=>store.course.allCourses);
    
    const getCourses = async ()=>{
        try {
            const data = await getDocs(courseCollection);
            const filteredData = data.docs.map((doc)=>({...doc.data(),id:doc.id}));
    // console.log(filteredData);
         setCourses(filteredData)  

        } catch (error) {
            console.log(error);
        }
    
    }

    useEffect(()=>{
        dispatch(setAllCourses(courses));
    getCourses();
    },[dispatch])
 
    if(isGridView === true){return <GridView courses={courses}/>}
    if(isGridView === false){return <ListView courses={courses}/>}
}

export default Courses