import { Link } from "react-router-dom";
 const AllPhoneDisplay = ({data}) => {

    const {product_id,price,product_image,product_title,rating,specification,category,availability,description} = data
    return (
        <div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="px-5 pt-5">
            <img
              src={product_image}
              alt="Shoes"
              className="rounded-xl h-[200px] w-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product_title}</h2>
            <p>$ {price}</p>
            <Link to={`/details/${product_id}`} ><button className="btn btn-outline text-purple-500 outline-purple-500 hover:bg-purple-500 hover:text-white font-semibold text-lg">View Details</button></Link>
          </div>
        </div>
      </div>
    );
 };
 
 export default AllPhoneDisplay;