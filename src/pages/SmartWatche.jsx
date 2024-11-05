import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllPhoneDisplay from "../components/AllPhoneDisplay";

 

const SmartWatche = () => {
    const data = useLoaderData()
    const [categoryData, setCategoryData] = useState([])
    useEffect(()=>{
        const categoryWatche = data.filter(d =>d.category === 'Smart Watches')
        setCategoryData(categoryWatche)
    },[data]) 
    console.log(categoryData)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-6 pb-12">
            {
                categoryData.map(c => <AllPhoneDisplay data={c} key={c.product_id}></AllPhoneDisplay>)
            }
        </div>
    );
};

export default SmartWatche;