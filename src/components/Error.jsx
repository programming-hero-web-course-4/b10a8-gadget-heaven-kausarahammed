import { Link } from "react-router-dom";

 

const Error = () => {
    return (
        <div className="text-center ">
            <h2 className="text-4xl font-bold text-red-400">Error/404 Page.</h2>
            <Link to="/"><button className="btn btn-error mt-12">back</button></Link>
        
        </div>
    );
};

export default Error;