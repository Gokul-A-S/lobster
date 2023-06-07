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
                <div className="container">

                    <h3>Reports</h3>
                    <Link to="/reports">Reports</Link>
                </div>
                <div className="container">

                    <h3>Alerts</h3>
                    <Link to="/alerts">Alerts</Link>
                </div>
                
            </div>

        </div>
    )
}
export default Home;