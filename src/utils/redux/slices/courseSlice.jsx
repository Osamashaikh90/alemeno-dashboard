import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
name:"course",
initialState:{
    allCourses:[],
    filteredCourse:[],
    isGridView:true,
},
reducers:{
    setAllCourses:(state,action)=>{
    state.allCourses.push(action.payload);
    },
    filterCourse:(state,action)=>{
    state.filteredCourse = state.allCourses?.filter((item)=>{
    return item.name.includes(action.payload);
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