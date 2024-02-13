import { createSlice } from "@reduxjs/toolkit";

const dateToISTString = (date) => {
  const ISTOffsetInMinutes = 330;
  const newDate = new Date(date); 
  newDate.setMinutes(newDate.getMinutes() + ISTOffsetInMinutes);
  return newDate.toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' });
};

const storedCourse = JSON.parse(localStorage.getItem("course")) || [];

const dashBoardSlice = createSlice({
  name: "dashBoard",
  initialState: {
    course: storedCourse,
    showNav: true,
  },
  reducers: {
    buyCourse: (state, action) => {
      const currentDate = new Date(); 
      const istDateString = dateToISTString(currentDate); 
      const courseWithDate = { ...action.payload, dateAdded: istDateString }; 
      state.course.push(courseWithDate);
      localStorage.setItem("course", JSON.stringify(state.course)); 
    },
    setShowNav: (state, action) => {
      state.showNav = action.payload;
    },
  },
});

export const { buyCourse, setShowNav } = dashBoardSlice.actions;
export default dashBoardSlice.reducer;
