import { useLoaderData } from "react-router-dom";
 
import AllPhoneDisplay from "../components/AllPhoneDisplay";
const Alldisplay = ( ) => {
    const data = useLoaderData()
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-6 pb-12">
                {
                    [...data].slice(0,9).map(d =><AllPhoneDisplay data={d} key={d.product_id}></AllPhoneDisplay>)
                }
        </div>
    );
};

export default Alldisplay;