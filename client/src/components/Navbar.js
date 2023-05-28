import { Link } from 'react-router-dom';
import {useLogout} from '../hooks/useLogout'
const Navbar = () => {
    const {logout}=useLogout()
    const handleClick=()=>{
        logout()
    }
    return (
        <header>
            <div className="container">
                <Link to="/"><h1>Lobster</h1></Link>
                <div className='nav-buttons'>
                    <Link to='/home'>Home</Link>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                    <Link onClick={handleClick} to='/login'>Logout</Link>

                </div>
            </div>
        </header>
    )
}
export default Navbar;