import { createSlice } from "@reduxjs/toolkit";
import { db } from "../../../firebase";
import { getDocs,collection } from "firebase/firestore";

const courseCollection = collection(db,'courses');
const data = await getDocs(courseCollection);
const filteredData = data.docs.map((doc)=>({...doc.data(),id:doc.id}));

const courseSlice = createSlice({
name:"course",
initialState:{
    allCourses:filteredData,
    filteredCourse:[],
    isGridView:true,
},
reducers:{
    filterCourse:(state,action)=>{
    state.filteredCourse = state.allCourses?.filter((item)=>{
    return item.name.toLowerCase().includes(action.payload.toLowerCase());
    })
    },
    set_ListView:(state)=>{
        state.isGridView = false;
        },
        set_GridView:(state)=>{
        state.isGridView=true;
        },
}
})

export const {set_ListView,set_GridView,setAllCourses,filterCourse} = courseSlice.actions
export default courseSlice.reducer