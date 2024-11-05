
  
import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Explore from "../components/Explore";
const Home = () => {
    const data = useLoaderData()
    return (
        <div>
             <Banner></Banner>
             <Explore data={data}></Explore>
        </div>
    );
};

export default Home;