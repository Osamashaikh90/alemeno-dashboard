// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import user from '../../assets/osama shaikh.png'
const Header = () => {
  // const [searchVal,setSearchval] = useState("");
  // const dispatch = useDispatch();

 
  // useEffect(()=>{
  // dispatch(filterProduct(searchVal))
  // },[searchVal,dispatch])

  return (
    <>
      <div  className="sticky top-0 z-50 flex items-center justify-between my-3 rounded-md shadow-sm shadow-[#edae2f4d] xxsm:px-5 md:px-2 md:py-2 md:mx-4 bg-[#181e24]">
        <Link to="/"><h1 className="inline-block text-3xl font-medium text-[#edae2f] cursor-pointer font-Cursive hover:transform hover:scale-100 xxsm:flex xxsm:items-center xxsm:justify-center md:justify-start md:mx-5 ">
          CourseWallah
        </h1></Link>
       <div className="flex items-center gap-5 px-2">
        <Link to='/dashboard'><button className=''>Dashboard</button></Link>
        <span><img src={user} alt="" className='h-9 w-9 '/></span>
       </div>
          {/* <FiShoppingCart className="pr-2 text-5xl " /> */}
      </div>
    </>
  );
};

export default Header;
