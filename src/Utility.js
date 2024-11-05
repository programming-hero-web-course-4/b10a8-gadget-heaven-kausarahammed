const getStrodeCard = ()=>{
    const strodeCard = localStorage.getItem("product")
    if(strodeCard){
        const strodeData = JSON.parse(strodeCard)
        return strodeData;
    }else{
        return [];
    }
}

const addStrodeCard = (data)=>{
    const remainingData = getStrodeCard()
    if(remainingData.includes(data)){
        console.log(data,"exsis")
    }else{
        remainingData.push(data)
        const addDataStr = JSON.stringify(remainingData)
        localStorage.setItem("product", addDataStr)
    alert("secssess")
    }
}
export {addStrodeCard}