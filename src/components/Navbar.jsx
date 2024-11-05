import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { GiRoyalLove } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import { CountContext, CountWishContext } from "../layouts/MainLayout";
 
 

const Navbar = () => {
  const [countWish, setCountWish] = useContext(CountWishContext);
  const [count, setCount] = useContext(CountContext);

    return (
    <div className="navbar container mx-auto pt-8 bg-transparent ">
  <div className="navbar-start z-50">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 w-52 p-2 shadow text-black bg-gray-200 rounded-2xl gap-y-4 ">
       <NavLink className={({isActive})=>` ${isActive?"text-purple-500 ": ""}`} to="/">Home</NavLink>
       <NavLink className={({isActive})=>` ${isActive?"text-purple-500 underline": ""}`} to="/statistics">Statistics</NavLink>
       <NavLink className={({isActive})=>` ${isActive?"text-purple-500 underline": ""}`} to="/dashboard">Dashboard</NavLink>
      </ul>
    </div>
    <a className="btn btn-ghost text-2xl font-bold  text-black">Gadget Heaven</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       <div className="flex gap-8 font-bold text-md z-50 text-black ">
       <NavLink className={({isActive})=>` ${isActive?"text-purple-100 underline ": "text-md"}`} to="/">Home</NavLink>
       <NavLink className={({isActive})=>` ${isActive?"text-purple-500 underline ": "text-md"}`} to="/statistics">Statistics</NavLink>
       <NavLink className={({isActive})=>` ${isActive?"text-purple-500 underline": "text-md"}`} to="/dashboard">Dashboard</NavLink>
       </div>
    </ul>
  </div>
  <div className="navbar-end"> 
    <div className="flex gap-4 font-bold text-2xl z-50">
   <Link> <div className="p-4 rounded-full bg-white relative"> <FaShoppingCart /></div></Link><p className="absolute
   rounded-full -mt-4 ml-9 font-thin" id="addToCard">{count}</p>
    <Link><div className="p-4 bg-white rounded-full">
    <GiRoyalLove />
    <p className="absolute
   rounded-full -mt-14 ml-5 font-thin" id="addToWishList">{countWish}</p>
    </div></Link>
    </div>
  </div>
</div>
    );
};

export default Navbar;