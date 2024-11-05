import { NavLink } from "react-router-dom";

const Dashboard = () => {
     
  return (
    <div>
      <div className="h-[290px] bg-purple-500 mt-6 text-center">
        <h1 className="pt-12 font-bold text-3xl text-white">Dashboard</h1>
        <p className="text-md text-white pt-4">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest <br />
           accessories, we have it all!
        </p>
        <div className="flex gap-4 justify-center mt-8 text-white">
        <NavLink className="border px-10 py-2 rounded-full text-lg" to="/">Cart</NavLink>
        <NavLink className="border px-10 py-2 rounded-full text-lg" to="/wishlist">Wishlist</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
 
