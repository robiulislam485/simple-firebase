import { NavLink } from "react-router-dom";


const Home = () => {
    return (
        <div className="text-center">
            <NavLink className='text-2xl font-bold' to='/login'>Login</NavLink>
        </div>
    );
};

export default Home;