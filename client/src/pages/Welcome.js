import { useNavigate } from 'react-router-dom';
import { useEffect,  } from 'react';
import BarLoader from "react-spinners/BarLoader";
const Welcome = () => {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate('/login');
        }, 1500);
    }, []);

    return (
        <div className='welcome'>
            <h1>Welcome</h1>
            <div className='welcome-logo'>
            <BarLoader 
            color="#36d7b7"
            width={250}
            />
            </div>

        </div>
    )
}
export default Welcome;