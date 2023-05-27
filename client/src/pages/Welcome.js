import { Link } from 'react-router-dom';
const Welcome = () => {
    return (
        <div className='welcome'>
            <h1>Welcome</h1>
            
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
            
        </div>
    )
}
export default Welcome;