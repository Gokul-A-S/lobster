import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <header>
            <div className="container">
                <Link to="/"><h1>Lobster</h1></Link>
                <div className='nav-buttons'>
                    <Link to='/home'>Home</Link>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                    <Link to='/login'>Logout</Link>

                </div>
            </div>
        </header>
    )
}
export default Navbar;