import { useEffect, useState } from "react";
import { useLoaderData, useParams} from "react-router-dom";
import AllPhoneDisplay from "../components/AllPhoneDisplay";
 
const Laptop = () => { 
     const data = useLoaderData()
     const [category,setCategory] = useState([])
     useEffect(()=>{
        const categoryData = data.filter(d => d.category === 'Laptop')
        setCategory(categoryData)
     },[data,Laptop])
    return (
        <div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-6 pb-12">
           {
            category.map(c => <AllPhoneDisplay data={c} key={c.product_id}></AllPhoneDisplay>)
             }
           </div>
        </div>
    );
};

export default Laptop;