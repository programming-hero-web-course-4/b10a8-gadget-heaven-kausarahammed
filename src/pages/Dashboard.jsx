import { useContext, useEffect, useState } from "react";
import { NavLink, Outlet, useLoaderData, useNavigate } from "react-router-dom";
import { getStrodeCard, getWishList } from "../Utility";
import StrodeDisplay from "../components/strodeDisplay";
import { CountWishContext } from "../layouts/MainLayout";

const Dashboard = () => {
  const [toggle, setToggle] = useState("cart");
  const data = useLoaderData();
  const [datas, setData] = useState([]);

  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    const refresh = () => {
      const strodeId = getStrodeCard();
      const strodeData = strodeId.map((d) => parseInt(d));
      const readList = data.filter((d) => strodeData.includes(d.product_id));
      setData(readList);
    };
    return refresh();
  }, []);

  useEffect(() => {
    const wishRefresh = () => {
      const strodeWish = getWishList();
      const strodeWishLish = strodeWish.map((d) => parseInt(d));
      const wishListLs = data.filter((d) =>
        strodeWishLish.includes(d.product_id)
      );
      setWishList(wishListLs);
    };
    return wishRefresh();
  }, []);
  const handleSortByPrice = (sort) => {
    if (sort === "Sort By Price") {
      const sortPrice = [...datas].sort((a, b) => b.price - a.price);
      setData(sortPrice);
    }
  };
 
  const handleCloseBtn =() =>{
     localStorage.removeItem('product')
     window.location.href = "/";
     
  }

  const handleRemoveForLs = (product_id,count,setCount, type) =>{
  
    console.log(type)

  if(type === 'cart'){
    // remove from local storage
    const products = localStorage.getItem('product')
    const parseProducts = JSON.parse(products)
    let remainingProduct = parseProducts.filter(p => p !== product_id)
    remainingProduct = JSON.stringify(remainingProduct)
    localStorage.removeItem('product')
    localStorage.setItem('product', remainingProduct)


    // remove from data state
    const remainingstate = datas.filter(data => data.product_id !== product_id)
    setData(remainingstate)
  }

  else if(type == 'wish_list'){
    const wishlist = localStorage.getItem('wishlist')
    const parseWishlist = JSON.parse(wishlist)
    let remainingWishlist = parseWishlist.filter(p => p !== product_id)
    remainingWishlist = JSON.stringify(remainingWishlist)
    localStorage.removeItem('wishlist')
    localStorage.setItem('wishlist', remainingWishlist)

    // remove from data state
    const remainingstate = wishList.filter(data => data.product_id !== product_id)
    setWishList(remainingstate)
    
  }
}

  const totalPrice = datas?.reduce((sum, data) => sum + data.price, 0);
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
          <button
            onClick={() => setToggle("cart")}
            className={`border px-10 py-2 rounded-full text-lg ${
              toggle === "cart" ? "bg-white text-purple-500 font-bold" : ""
            }`}
          >
            Cart
          </button>
          <button
            onClick={() => setToggle("wishlist")}
            className={`border px-10 py-2 rounded-full text-lg ${
              toggle === "wishlist" ? "bg-white text-purple-500 font-bold" : ""
            }`}
          >
            Wishlist
          </button>
        </div>
      </div>

      {toggle === "cart" ? (
        <div className=" container mx-auto ">
          <div className="flex justify-between my-12 items-center">
            <div className="font-bold text-6">Card</div>
            <div className="flex gap-4 items-center">
              <p className="font-bold text-6">Total Cost : {totalPrice} </p>
              <button
                onClick={() => handleSortByPrice("Sort By Price")}
                className="px-6 py-2 border-2 border-purple-500 rounded-3xl text-purple-500 hover:bg-purple-300 hover:text-black transition"
              >
                Sort By Price
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("my_modal_5")
                    .showModal()
                }
                className="px-6 py-2 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-3xl text-white"
              >
                Purchase
              </button>
            </div>
          </div>
          {datas?.map((d) => (
            <StrodeDisplay type={'cart'} handleRemoveForLs={handleRemoveForLs} data={d} key={d.product_id}></StrodeDisplay>
          ))}
        </div>
      ) : (
        <div className="container mx-auto mt-12">
          <h2 className="font-bold text-6">WishList</h2>
          {wishList?.map((d) => (
            <StrodeDisplay type={'wish_list'}  handleRemoveForLs={handleRemoveForLs} data={d} key={d.product_id}></StrodeDisplay>
          ))}
        </div>
      )}

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <p className="text-5xl text-green-400 flex justify-center mb-6">
            <img src="./Group.png" alt="" />
          </p>
          <h3 className="font-bold text-2xl text-center">
            Payment Successfully
          </h3>
          <p className="  text-center">Thanks for purchasing.</p>
          <p className="text-center font-medium textarea-md">
            {" "}
            Total Price: $ {totalPrice}
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button onClick={()=>handleCloseBtn()} className="text-center flex bg-gray-400 btn">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Dashboard;
