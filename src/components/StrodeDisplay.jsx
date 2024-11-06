 import React, { useContext, useState } from 'react';
import { CiCircleRemove } from 'react-icons/ci';
import { CountContext } from '../layouts/MainLayout';
 const StrodeDisplay = ({type, handleRemoveForLs,data}) => {
    const {price,product_image,product_title,specification,product_id} = data
    const [count,setCount] = useContext(CountContext)
     
    
  
    return (
        <div> 
             <div className='flex gap-8 my-8 bg-white rounded-3xl'>
                <div className='p-4  '>
                    <img className='h-[120px] w-[200px] rounded-3xl' src={product_image} alt="" />
                </div>
                <div className='p-4 flex justify-between w-full'>
                    <div>
                    <h2 className='font-semibold text-2xl'>{product_title}</h2>
                    <p className='text-lg text-gray-500 my-4'>{specification}</p>
                    <p className='text-xl font-semibold'>Price: $ {price}</p>
                    </div>
                    <div onClick={() => handleRemoveForLs(product_id,count,setCount,type)} className='text-3xl text-red-500 cursor-pointer'>
                  <CiCircleRemove  /> 
                    </div>
                </div>
              
             </div>
        </div>
    );
 };
 
 export default StrodeDisplay;