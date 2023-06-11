import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext';
const Navbar = () => {
    const { user } = useAuthContext()
    const { logout } = useLogout()
    const handleClick = () => {
        logout()
    }
    return (
        <header>
            <div className="container">
                <Link to="/login"><h1>Lobster</h1></Link>
                <div className='nav-buttons'>
                    {user && (
                        <div>
                            <span>{user.id}</span>
                            <Link to='/home'>Home</Link>
                            <Link onClick={handleClick} to='/login'>Logout</Link>

                        </div>
                    )}
                    {!user && (<div>
                        <Link to='/login'>Login</Link>
                        <Link to='/register'>Register</Link>
                    </div>)}

                </div>
            </div>
        </header>
    )
}
export default Navbar;