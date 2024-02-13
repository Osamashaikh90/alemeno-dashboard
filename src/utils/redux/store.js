import { configureStore } from "@reduxjs/toolkit";
import courseSlice from "./slices/courseSlice";
import accordianSlice from "./slices/accordianSlice";
import dashBoardSlice from "./slices/dashBoardSlice";

const store = configureStore({
reducer:{
course:courseSlice,
accordion:accordianSlice,
dashBoard:dashBoardSlice
}
});

export default store;