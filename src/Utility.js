
import toast from "react-hot-toast";

const getStrodeCard = () => {
    const strodeCard = localStorage.getItem("product");
    return strodeCard ? JSON.parse(strodeCard) : [];
};

const addStrodeCard = (data, setCount, count) => {
    const remainingData = getStrodeCard();
    if (remainingData.includes(data)) {
        return toast.error("Already exists.");
    } else {
        remainingData.push(data);
        localStorage.setItem("product", JSON.stringify(remainingData));
        toast.success('Successfully Added!');
        setCount(count + 1);
    }
};

const handleRemoveForLs = (id,count,setCount) => {
    const allIds = getStrodeCard();
    const filteredIds = allIds.filter(d => d !== id);
    localStorage.setItem("product", JSON.stringify(filteredIds));
    if(count > 0){
    return  setCount(count - 1); 
    }else{
       setCount(0)
    }
   
};


const handleRemoveWishList = (id,count,setCount) => {
     
    const allId = strodeCard();
    const filteredIds = allId.filter(d => d !== id);
    localStorage.setItem("product", JSON.stringify(filteredIds));
    if(count > 0){
    return  setCount(count - 1); 
    }else{
       setCount(0)
    }
   
};

const getWishList = () => {
    const strodeCard = localStorage.getItem("wishlist");
    return strodeCard ? JSON.parse(strodeCard) : [];
};

const addWishList = (data, countWish,setCountWish) => {
    const remainingData = getWishList();
    if (remainingData.includes(data)) {
    return toast.error("Already exists."); 
    } else {
        remainingData.push(data);
        localStorage.setItem("wishlist", JSON.stringify(remainingData));
        toast.success('Successfully Added!');
        setCountWish(countWish + 1);
    }
};





export { addStrodeCard, getStrodeCard, addWishList, getWishList, handleRemoveForLs,handleRemoveWishList };



 