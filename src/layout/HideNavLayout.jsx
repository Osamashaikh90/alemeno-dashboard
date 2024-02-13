/* eslint-disable react/prop-types */
// import React from 'react'
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { setShowNav } from "../utils/redux/slices/dashBoardSlice";
const HideNavLayout = ({children}) => {
    const location = useLocation();
  const showNav = useSelector((store) => store.dashBoard.showNav);
  const dispatch = useDispatch();

  useEffect(()=>{
if(location.pathname === "/dashboard"){
dispatch(setShowNav(false));
}else{
dispatch(setShowNav(true));
}
},[location,dispatch]);
  return <div>{showNav && children}</div>
}

export default HideNavLayout