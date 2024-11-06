import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='flex flex-col items-center -mt-36 '>
            <div className='md:h-[694px] h-[490px] border  bg-purple-600 items-center flex-col  flex rounded-2xl mt-4' >
            <h1 className='font-bold md:text-[56px] w-8/12 text-center text-white  mt-[150px]'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
            <p className='font-normal text-md w-10/12 md:w-6/12 text-white text-center mt-6'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            <Link to="/dashboard" className='bg-white px-4 py-2 z-40 rounded-3xl mt-4 text-purple-500 font-semibold'><button>Whop Now</button></Link>
        </div>
        <div className='p-2  absolute'>
        <img className="md:h-[563px] md:w-[1062px] rounded-2xl md:mt-[478px] mt-[370px]" src="./banner.jpg" alt="" />
        </div>
        </div>
    );
};

export default Banner;