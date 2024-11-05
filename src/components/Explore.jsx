
import { NavLink, Outlet} from "react-router-dom";
const Explore = () => {
  return (
    <div className="mt-96 container mx-auto">
      <h2 className="font-bold text-4xl text-center z-40">
        Explore Cutting-Edge Gadgets
      </h2>
      <div className="flex gap-24 mt-24">
        <div className="flex flex-col bg-white h-[465px] w-44 px-4 py-4 gap-y-4 font-medium text-lg text-gray-400 mb-8 rounded-2xl">
        
         <NavLink className={({isActive})=>` px-5 py-2 rounded-2xl text-center ${isActive?"bg-purple-500 text-white":"btn"}`} to="/"><button>All Products</button></NavLink>
           <NavLink className={({isActive})=>` px-5 py-2 rounded-2xl text-center ${isActive?"bg-purple-500 text-white":"btn"}`}  to="/laptops"><button>Laptops</button></NavLink> 
          <NavLink className={({isActive})=>` px-5 py-2 rounded-2xl text-center ${isActive?"bg-purple-500 text-white":"btn"}`} to="/phones"><button>Phones</button></NavLink> 
          <NavLink className={({isActive})=>` px-5 py-2 rounded-2xl text-center ${isActive?"bg-purple-500 text-white":"btn"}`} to="/accessories"><button>Accessorie</button></NavLink> 
          <NavLink className={({isActive})=>` px-5 py-2 rounded-2xl text-center ${isActive?"bg-purple-500 text-white":"btn"}`} to="/watches"><button>Watches</button></NavLink> 
          <NavLink className={({isActive})=>` px-5 py-2 rounded-2xl text-center ${isActive?"bg-purple-500 text-white":"btn"}`} to="/macbook"><button>MacBook</button></NavLink> 
          <NavLink className={({isActive})=>` px-5 py-2 rounded-2xl text-center ${isActive?"bg-purple-500 text-white":"btn"}`} to="/iphone"><button>Iphone</button></NavLink> 
        </div>
       
      <div>
         
      <div>
        <Outlet></Outlet>
     </div>
      </div>
      
      </div>
      
    </div>
  );
};

export default Explore;
