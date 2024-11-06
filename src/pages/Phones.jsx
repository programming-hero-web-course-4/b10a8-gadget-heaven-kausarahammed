import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllPhoneDisplay from '../components/AllPhoneDisplay';

const Phones = () => {
    const data =  useLoaderData()

    const [categoryData, setCategoryData] = useState([])
    useEffect(()=>{
        const categoryPhones = data.filter(d =>d.category === 'Phones')
        setCategoryData(categoryPhones)
    },[data,Phones])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-6 pb-12">
             
            {
                categoryData.map(c =><AllPhoneDisplay data={c} key={c.product_id}></AllPhoneDisplay>)
            }
        </div>
    );
};

export default Phones;