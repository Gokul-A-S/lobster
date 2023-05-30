import { Link } from "react-router-dom";

const Home = () => {

    return (
        <div className="home">
            <div className="dashboard">
                <div className="container">
                    <h3>Main Stock Register</h3>
                    <Link to="/main">Main</Link>
                </div>
                <div className="container">

                    <h3>Labs</h3>
                    <Link to="/lab">Labs</Link>
                </div>
                
            </div>

        </div>
    )
}
export default Home;