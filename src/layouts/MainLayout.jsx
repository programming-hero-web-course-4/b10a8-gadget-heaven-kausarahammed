import React, { createContext, useState } from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
export const CountContext = createContext(0)
export const CountWishContext = createContext(5)
const MainLayout = () => {
    const [countWish, setCountWish] = useState(5)
    const [count, setCount] = useState(0)
    return (
        <div>
            <CountWishContext.Provider value={[countWish,setCountWish]}>
            <CountContext.Provider value={[count,setCount]}>
            <Navbar></Navbar>
           <div className='min-h-[calc(100vh-0px)]'>
           <Outlet /> 
           </div>
            <Footer></Footer>
            </CountContext.Provider>
            </CountWishContext.Provider>
        </div>
    );
};

export default MainLayout;