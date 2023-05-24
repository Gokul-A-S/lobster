import { Link } from "react-router-dom";

const Home = () => {

    return (
        <div className="home">
            <div className="container">
                <h3>Main Stock Register</h3>
                <Link to="/main">Main</Link>
            </div>
            
        </div>
    )
}
export default Home;