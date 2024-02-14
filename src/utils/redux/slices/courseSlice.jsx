import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../../firebase";
import { getDocs,collection } from "firebase/firestore";

export const fetchData = createAsyncThunk("data/fetchData",async()=>{
try{
    const courseCollection = collection(db,'courses');
const data = await getDocs(courseCollection);
const filteredData = data.docs.map((doc)=>({...doc.data(),id:doc.id}));
console.log(filteredData)
return filteredData;
}catch(err){
console.log(err);
}

})

const courseSlice = createSlice({
name:"course",
initialState:{
    allCourses:[],
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
},
extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.status = "succeeded";
      //yaha pe array ka naam aata hai
      state.allCourses = action.payload;
      state.filteredCourse = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
})

export const {set_ListView,set_GridView,setAllCourses,filterCourse} = courseSlice.actions
export default courseSlice.reducer