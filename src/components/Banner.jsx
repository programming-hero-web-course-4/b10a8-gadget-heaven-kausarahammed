import React from 'react';

const Banner = () => {
    return (
        <div className='flex flex-col items-center -mt-36 '>
            <div className='h-[694px] border  bg-purple-600 items-center flex-col  flex rounded-2xl mt-4' >
            <h1 className='font-bold lg:text-[56px] w-8/12 text-center text-white mt-[118px]'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
            <p className='font-normal text-md w-6/12 text-white text-center mt-6'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
        </div>
        <div className='p-2  absolute'>
        <img className="h-[563px] w-[1062px] rounded-2xl mt-[478px]" src="../../public/assets/banner.jpg" alt="" />
        </div>
        </div>
    );
};

export default Banner;