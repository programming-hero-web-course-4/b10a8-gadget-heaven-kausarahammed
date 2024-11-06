
import { useContext, useEffect, useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { GiLoveMystery } from "react-icons/gi";
import { NavLink, useLoaderData, useParams } from "react-router-dom";
import { CountContext, CountWishContext } from "../layouts/MainLayout";
import { addStrodeCard, addWishList } from "../Utility";
 

const Details = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/allData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [id]);

  const displayData = data.find((d) => d.product_id == id);
  const {
    product_image,
    product_title,
    price,
    availability,
    description,
    specification,
    rating,
    product_id
  } = displayData || {};
const [countWish, setCountWish] = useContext(CountWishContext)
const [count,setCount] = useContext(CountContext)
const [productPrice, setProductPrice] = useState()
const handleAddToCardLs = (card,price)=>{
  addStrodeCard(card,setCount,count )
  setProductPrice(price)
}
const handleAddWishList = (id) =>{
  addWishList(id, countWish, setCountWish )
}

  return (
    <div>
      <div className="h-[290px] bg-purple-500 mt-6 text-center">
        <h1 className="pt-12 font-bold text-3xl text-white">Product Details</h1>
        <p className="text-md text-white pt-4">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the <br /> coolest accessories, we have
          it all!
        </p>
      </div>    
      <div className="container mx-auto -mt-32">
        <div className=" bg-white    w-full flex p-8 rounded-2xl gap-12">
          <img className="rounded-xl h-[400px]" src={product_image} alt="" />
          <div>
            <h2 className="font-semibold text-3xl">{product_title}</h2>
            <p className="font-semibold text-xl my-3">Price: ${price}</p>
            <p className="py-1 px-3 rounded-3xl bg-green-100 w-20 font-normal text-green-600">
              {availability}
            </p>
            <p className="my-4 text-lg font-normal text-gray-400">
              {description}
            </p>
            <h2 className="font-bold text-lg mb-4">Specification:</h2>

            <ol className="text-gray-400 list-decimal ml-3">
              {
                specification?.map((s,index) => <li key={index}>{s}</li>)
              }
            </ol>

            <h2 className="my-4 font-bold text-lg">Rating:</h2>
            <div className="flex gap-2">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
              </div>
              <p className="border rounded-full w-10 text-center">{rating}</p>
            </div>
            <div className="flex items-center gap-4 ">
              <button
                className=" flex  px-3 py-1 rounded-3xl items-center border w-36 text-md mt-4"
                to="" onClick={()=>handleAddToCardLs(product_id,price)}>
                Add To Card
                <p className="text-2xl">
                  <CiShoppingCart />
                </p>
              </button>
              <button   className="text-2xl text-center mt-6 border rounded-full p-2" onClick={()=>handleAddWishList(product_id)}>
                <GiLoveMystery />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
